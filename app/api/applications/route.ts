import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  if (typeof value === "string") return value;
  return "";
}

// POST - Submit a new application
export async function POST(req: NextRequest) {
  console.log("=== POST /api/applications ===");

  try {
    const contentType = req.headers.get("content-type") || "";
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

    // multipart/form-data
    if (contentType.includes("multipart/form-data")) {
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

      const resumeFile = formData.get("resume");

      if (resumeFile instanceof File && resumeFile.size > 0) {
        if (process.env.BLOB_READ_WRITE_TOKEN) {
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
        }
      }
    } else {
      // JSON body fallback
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
    }

    if (!jobId || !userId || !fullName || !email) {
      return NextResponse.json(
        {
          message: "Required fields are missing",
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

    const job = await prisma.job.findUnique({
      where: { id: jobId },
      select: {
        id: true,
        isClosed: true,
      },
    });

    if (!job) {
      return NextResponse.json(
        { message: "Job not found" },
        { status: 404 }
      );
    }

    if (job.isClosed) {
      return NextResponse.json(
        { message: "This job is closed and no longer accepting applications" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

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