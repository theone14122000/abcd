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

// ==========================================
// GET: Fetch all applications (For Admin)
// ==========================================
export async function GET() {
  try {
    const applications = await prisma.application.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
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
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(applications);
  } catch (error) {
    console.error("GET /api/applications error:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch applications",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// ==========================================
// POST: Submit a new application
// ==========================================
export async function POST(req: NextRequest) {
  console.log("=== API: POST /api/applications ===");
  const contentType = req.headers.get("content-type") || "";
  console.log("Content-Type detected:", contentType);

  try {
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

    // 1. DATA EXTRACTION
    if (contentType.includes("multipart/form-data")) {
      console.log("Status: Parsing Multipart Form Data");
      const formData = await req.formData();

      jobId = getString(formData, "jobId");
      userId = getString(formData, "userId");
      fullName = getString(formData, "fullName");
      email = getString(formData, "email");
      currentCTC = getString(formData, "currentCTC");
      expectedCTC = getString(formData, "expectedCTC");
      preferredLocation = getString(formData, "preferredLocation");
      noticePeriod = getString(formData, "noticePeriod");
      skills = getString(formData, "skills");

      const resumeFile = formData.get("resume");
      if (resumeFile instanceof File && resumeFile.size > 0) {
        console.log("File found:", resumeFile.name);
        if (process.env.BLOB_READ_WRITE_TOKEN) {
          const blob = await put(`resumes/${Date.now()}-${resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, "-")}`, resumeFile, {
            access: "public",
            addRandomSuffix: true,
          });
          resumeUrl = blob.url;
          console.log("Resume uploaded to Blob:", blob.url);
        } else {
          console.warn("BLOB_READ_WRITE_TOKEN not set - skipping resume upload");
        }
      }
    } else {
      console.log("Status: Attempting JSON Parse");
      try {
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
      } catch (jsonErr) {
        console.error("JSON Parsing failed:", jsonErr);
        return NextResponse.json({ message: "Invalid JSON or Body format" }, { status: 400 });
      }
    }

    // 2. VALIDATION
    if (!jobId || !userId || !fullName || !email) {
      console.error("Validation Failed: Missing required fields");
      return NextResponse.json({ message: "Job ID, User ID, Name, and Email are required" }, { status: 400 });
    }

    // 3. DATABASE OPERATIONS
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) return NextResponse.json({ message: "Job not found" }, { status: 404 });
    if (job.isClosed) return NextResponse.json({ message: "Job is closed" }, { status: 400 });

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

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

    console.log("SUCCESS: Application Created", application.id);
    return NextResponse.json(application, { status: 201 });

  } catch (error) {
    console.error("CRITICAL ERROR in /api/applications:", error);
    return NextResponse.json(
      { message: "Server error", error: error instanceof Error ? error.message : "Unknown" },
      { status: 500 }
    );
  }
}