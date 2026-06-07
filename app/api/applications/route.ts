import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB

const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const ALLOWED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  if (typeof value === "string") return value.trim();
  return "";
}

function getNullableString(formData: FormData, key: string): string | null {
  const value = getString(formData, key);
  return value || null;
}

function getBodyString(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  if (typeof value === "string") return value.trim();
  return "";
}

function getNullableBodyString(
  body: Record<string, unknown>,
  key: string
): string | null {
  const value = getBodyString(body, key);
  return value || null;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasAllowedResumeExtension(fileName: string): boolean {
  const lowerName = fileName.toLowerCase();
  return ALLOWED_RESUME_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
}

function validateResumeFile(file: File): string | null {
  if (file.size > MAX_RESUME_SIZE) {
    return "Resume file size must be less than 5MB.";
  }

  if (!ALLOWED_RESUME_TYPES.has(file.type) && !hasAllowedResumeExtension(file.name)) {
    return "Only PDF, DOC, and DOCX resume files are allowed.";
  }

  return null;
}

async function uploadResumeToBlob(file: File): Promise<string> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("Resume storage is not configured.");
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const fileName = `resumes/${Date.now()}-${safeName}`;

  const blob = await put(fileName, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return blob.url;
}

// POST - Submit application / candidate profile with resume upload
export async function POST(req: NextRequest) {
  console.log("=== POST /api/applications ===");

  try {
    const contentType = req.headers.get("content-type") || "";
    console.log("Content-Type:", contentType);

    let jobId: string | null = null;
    let userId: string | null = null;

    let fullName = "";
    let email = "";
    let phone: string | null = null;
    let positionApplied: string | null = null;

    let currentCTC: string | null = null;
    let expectedCTC: string | null = null;
    let preferredLocation: string | null = null;
    let currentLocation: string | null = null;
    let noticePeriod: string | null = null;
    let skills: string | null = null;
    let resumeUrl: string | null = null;
    let source: string | null = null;

    // ==========================================
    // 1. PARSE MULTIPART/FORM-DATA
    // ==========================================
    if (contentType.includes("multipart/form-data")) {
      console.log("Parsing FormData...");
      const formData = await req.formData();

      jobId = getNullableString(formData, "jobId");
      userId = getNullableString(formData, "userId");

      fullName = getString(formData, "fullName") || getString(formData, "name");
      email = getString(formData, "email");

      phone = getNullableString(formData, "phone");
      positionApplied = getNullableString(formData, "positionApplied");

      currentCTC = getNullableString(formData, "currentCTC");
      expectedCTC = getNullableString(formData, "expectedCTC");

      preferredLocation = getNullableString(formData, "preferredLocation");
      currentLocation = getNullableString(formData, "currentLocation") || getNullableString(formData, "location");

      // Sync locations for older admin dashboards
      if (!preferredLocation && currentLocation) {
        preferredLocation = currentLocation;
      }

      noticePeriod = getNullableString(formData, "noticePeriod");
      skills = getNullableString(formData, "skills");
      resumeUrl = getNullableString(formData, "resumeUrl");
      source = getNullableString(formData, "source");

      // Handle File Upload
      const resumeFile = formData.get("resume");
      
      if (resumeFile instanceof File && resumeFile.size > 0) {
        const resumeValidationError = validateResumeFile(resumeFile);

        if (resumeValidationError) {
          return NextResponse.json({ message: resumeValidationError }, { status: 400 });
        }

        try {
          console.log("Uploading resume to Vercel Blob...");
          resumeUrl = await uploadResumeToBlob(resumeFile);
          console.log("✅ Resume uploaded successfully:", resumeUrl);
        } catch (blobError) {
          console.error("❌ Blob upload failed:", blobError);
          return NextResponse.json(
            { message: "Failed to upload resume", error: blobError instanceof Error ? blobError.message : "Unknown error" },
            { status: 500 }
          );
        }
      }
    } 
    // ==========================================
    // 2. PARSE APPLICATION/JSON FALLBACK
    // ==========================================
    else {
      console.log("Parsing JSON body...");
      let body: Record<string, unknown> = {};
      
      try {
        body = (await req.json()) as Record<string, unknown>;
      } catch (jsonError) {
        return NextResponse.json({ message: "Invalid JSON payload format." }, { status: 400 });
      }

      jobId = getNullableBodyString(body, "jobId");
      userId = getNullableBodyString(body, "userId");

      fullName = getBodyString(body, "fullName") || getBodyString(body, "name");
      email = getBodyString(body, "email");

      phone = getNullableBodyString(body, "phone");
      positionApplied = getNullableBodyString(body, "positionApplied");

      currentCTC = getNullableBodyString(body, "currentCTC");
      expectedCTC = getNullableBodyString(body, "expectedCTC");

      preferredLocation = getNullableBodyString(body, "preferredLocation");
      currentLocation = getNullableBodyString(body, "currentLocation") || getNullableBodyString(body, "location");

      if (!preferredLocation && currentLocation) {
        preferredLocation = currentLocation;
      }

      noticePeriod = getNullableBodyString(body, "noticePeriod");
      skills = getNullableBodyString(body, "skills");
      resumeUrl = getNullableBodyString(body, "resumeUrl");
      source = getNullableBodyString(body, "source");
    }

    // ==========================================
    // 3. VALIDATION
    // ==========================================
    const normalizedSource = (source || (jobId ? "JOB_APPLY" : "HERO_FORM")).toUpperCase();
    const isJobApplication = normalizedSource === "JOB_APPLY" || Boolean(jobId);
    const isHeroSubmission = !isJobApplication;

    const missingFields: string[] = [];

    if (!fullName) missingFields.push("fullName");
    if (!email) missingFields.push("email");

    if (email && !isValidEmail(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }

    // Job Flow Validation
    if (isJobApplication) {
      if (!jobId) missingFields.push("jobId");
      if (!userId) missingFields.push("userId");
    }

    // Hero Form Validation
    if (isHeroSubmission) {
      if (!phone) missingFields.push("phone");
      if (!positionApplied) missingFields.push("positionApplied");
      if (!currentLocation) missingFields.push("currentLocation");
      if (!currentCTC) missingFields.push("currentCTC");
      if (!expectedCTC) missingFields.push("expectedCTC");
      if (!resumeUrl) missingFields.push("resume");
    }

    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: "Required fields are missing.", missingFields },
        { status: 400 }
      );
    }

    // ==========================================
    // 4. DATABASE CHECKS
    // ==========================================
    if (jobId) {
      const job = await prisma.job.findUnique({
        where: { id: jobId },
        select: { id: true, isClosed: true },
      });

      if (!job) return NextResponse.json({ message: "Job not found" }, { status: 404 });
      if (job.isClosed) return NextResponse.json({ message: "This job is closed" }, { status: 400 });
    }

    if (userId) {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true },
      });

      if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // ==========================================
    // 5. SAVE TO PRISMA
    // ==========================================
    const application = await prisma.application.create({
      data: {
        jobId,
        userId,
        fullName,
        email,
        phone,
        positionApplied,
        currentCTC,
        expectedCTC,
        preferredLocation,
        currentLocation,
        noticePeriod,
        skills,
        resumeUrl,
        source: normalizedSource,
        status: "PENDING",
      },
    });

    console.log("✅ Application created:", application.id);

    return NextResponse.json(
      {
        ...application,
        success: true,
        applicationId: application.id,
        message: "Application submitted successfully.",
      },
      { status: 201 }
    );
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