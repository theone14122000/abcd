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

// POST - Submit a new application with resume upload
export async function POST(req: NextRequest) {
  console.log("=== POST /api/applications ===");

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

    // Handle multipart/form-data
    if (contentType.includes("multipart/form-data")) {
      console.log("Parsing FormData...");
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

      console.log("Extracted values:", { jobId, userId, fullName, email });

      // Handle resume file upload
      const resumeFile = formData.get("resume");
      console.log("Resume file detected:", resumeFile instanceof File);
      
      if (resumeFile instanceof File && resumeFile.size > 0) {
        console.log("Resume details:", {
          name: resumeFile.name,
          size: resumeFile.size,
          type: resumeFile.type,
        });

        // Check if BLOB token exists
        if (!process.env.BLOB_READ_WRITE_TOKEN) {
          console.error("❌ BLOB_READ_WRITE_TOKEN is not set in environment variables");
          return NextResponse.json(
            { message: "Resume storage is not configured" },
            { status: 500 }
          );
        }

        try {
          // Sanitize filename
          const safeName = resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, "-");
          const fileName = `resumes/${Date.now()}-${safeName}`;

          console.log("Uploading to Vercel Blob:", fileName);

          // Upload to Vercel Blob
          const blob = await put(fileName, resumeFile, {
            access: "public",
            addRandomSuffix: true,
          });

          resumeUrl = blob.url;
          console.log("✅ Resume uploaded successfully:", blob.url);
        } catch (blobError) {
          console.error("❌ Blob upload failed:", blobError);
          return NextResponse.json(
            { 
              message: "Failed to upload resume",
              error: blobError instanceof Error ? blobError.message : "Unknown error"
            },
            { status: 500 }
          );
        }
      } else {
        console.warn("⚠️ No resume file provided");
      }
    } else {
      // JSON fallback
      console.log("Parsing JSON body...");
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

    // Validate required fields
    if (!jobId || !userId || !fullName || !email) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Check if job exists and is open
    const job = await prisma.job.findUnique({
      where: { id: jobId },
      select: { id: true, isClosed: true },
    });

    if (!job) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    if (job.isClosed) {
      return NextResponse.json(
        { message: "This job is closed" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Create application record
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

    console.log("✅ Application created:", application.id);
    console.log("Resume URL saved:", resumeUrl);

    return NextResponse.json(application, { status: 201 });

  } catch (error) {
    console.error("❌ POST /api/applications error:", error);
    return NextResponse.json(
      {
        message: "Failed to submit application",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}