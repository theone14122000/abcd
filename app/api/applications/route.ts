import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function GET() {
  try {
    const applications = await prisma.application.findMany({
      include: {
        user: {
          select: { id: true, name: true, email: true, role: true },
        },
        job: {
          select: {
            id: true,
            title: true,
            company: true,
            location: true,
            sector: true,
            type: true,
            salary: true,
            isClosed: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(applications);
  } catch (error) {
    console.error("GET /api/applications error:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch applications",
        error: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  console.log("POST /api/applications - START");

  try {
    const contentType = req.headers.get("content-type") || "";
    console.log("Content-Type:", contentType);

    let jobId = "";
    let userId = "";
    let fullName = "";
    let email = "";
    let currentCTC: string | null = null;
    let expectedCTC: string | null = null;
    let preferredLocation: string | null = null;
    let noticePeriod: string | null = null;
    let skills: string | null = null;
    let resumeUrl: string | null = null;
    let resumeFile: File | null = null;

    // Detect FormData vs JSON
    if (contentType.includes("multipart/form-data")) {
      console.log("Parsing as FormData");
      const formData = await req.formData();

      jobId = getString(formData, "jobId");
      userId = getString(formData, "userId");
      fullName = getString(formData, "fullName");
      email = getString(formData, "email");
      currentCTC = getString(formData, "currentCTC") || null;
      expectedCTC = getString(formData, "expectedCTC") || null;
      preferredLocation = getString(formData, "preferredLocation") || null;
      noticePeriod = getString(formData, "noticePeriod") || null;
      skills = getString(formData, "skills") || null;

      const resume = formData.get("resume");
      if (resume instanceof File && resume.size > 0) {
        resumeFile = resume;
      }
    } else if (contentType.includes("application/json")) {
      console.log("Parsing as JSON");
      const body = await req.json();

      jobId = body.jobId || "";
      userId = body.userId || "";
      fullName = body.fullName || "";
      email = body.email || "";
      currentCTC = body.currentCTC || null;
      expectedCTC = body.expectedCTC || null;
      preferredLocation = body.preferredLocation || null;
      noticePeriod = body.noticePeriod || null;
      skills = body.skills || null;
      resumeUrl = body.resumeUrl || null;
    } else {
      return NextResponse.json(
        {
          message: "Unsupported content type",
          contentType,
        },
        { status: 400 }
      );
    }

    console.log("Received:", { jobId, userId, fullName, email });

    if (!jobId || !userId || !fullName || !email) {
      return NextResponse.json(
        {
          message: "Missing required fields",
          received: {
            jobId: !!jobId,
            userId: !!userId,
            fullName: !!fullName,
            email: !!email,
          },
        },
        { status: 400 }
      );
    }

    // Check job
    const job = await prisma.job.findUnique({
      where: { id: jobId },
      select: { id: true, isClosed: true },
    });

    if (!job) {
      console.error("Job not found:", jobId);
      return NextResponse.json(
        { message: "Job not found", jobId },
        { status: 404 }
      );
    }

    if (job.isClosed) {
      return NextResponse.json(
        { message: "Job is closed" },
        { status: 400 }
      );
    }

    // Check user
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });

    if (!user) {
      console.error("User not found:", userId);
      return NextResponse.json(
        { message: "User not found", userId },
        { status: 404 }
      );
    }

    // Handle resume upload
    if (resumeFile) {
      console.log("Resume file size:", resumeFile.size);

      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.warn("BLOB_READ_WRITE_TOKEN missing - saving without resume");
      } else {
        try {
          const { put } = await import("@vercel/blob");

          const safeName = resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, "-");

          const blob = await put(
            `resumes/${Date.now()}-${safeName}`,
            resumeFile,
            {
              access: "public",
              addRandomSuffix: true,
            }
          );

          resumeUrl = blob.url;
          console.log("Resume uploaded:", resumeUrl);
        } catch (uploadErr) {
          console.error("Resume upload failed:", uploadErr);
        }
      }
    }

    // Create application
    const application = await prisma.application.create({
      data: {
        jobId,
        userId,
        fullName,
        email,
        currentCTC,
        expectedCTC,
        preferredLocation,
        noticePeriod,
        skills,
        resumeUrl,
        status: "PENDING",
      },
    });

    console.log("Application created:", application.id);
    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error("POST /api/applications error:", error);
    return NextResponse.json(
      {
        message: "Failed to submit application",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}