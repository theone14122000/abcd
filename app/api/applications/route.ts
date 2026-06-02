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

    // ─── 1. DATA EXTRACTION ──────────────────────────────────────────────────

    if (contentType.includes("multipart/form-data")) {
      console.log("Status: Parsing Multipart Form Data");
      const formData = await req.formData();

      jobId             = getString(formData, "jobId");
      userId            = getString(formData, "userId");
      fullName          = getString(formData, "fullName");
      email             = getString(formData, "email");
      currentCTC        = getString(formData, "currentCTC")        || null;
      expectedCTC       = getString(formData, "expectedCTC")       || null;
      preferredLocation = getString(formData, "preferredLocation") || null;
      noticePeriod      = getString(formData, "noticePeriod")      || null;
      skills            = getString(formData, "skills")            || null;

      const resumeFile = formData.get("resume");
      if (resumeFile instanceof File && resumeFile.size > 0) {
        console.log("File found:", resumeFile.name);
        if (process.env.BLOB_READ_WRITE_TOKEN) {
          const blob = await put(
            `resumes/${Date.now()}-${resumeFile.name}`,
            resumeFile,
            { access: "public", addRandomSuffix: true }
          );
          resumeUrl = blob.url;
        } else {
          console.log("Local Dev: Skipping blob upload (no BLOB_READ_WRITE_TOKEN)");
        }
      }

    } else {
      // ── JSON branch ──────────────────────────────────────────────────────
      // CRITICAL FIX: read as raw text FIRST, then parse manually.
      // req.json() can throw synchronously in Next.js App Router before
      // your try-catch has a chance to handle it (e.g. body starting with "-").
      console.log("Status: Reading body as text before JSON parse");

      let rawText: string;
      try {
        rawText = await req.text();
      } catch (readErr) {
        console.error("Failed to read request body:", readErr);
        return NextResponse.json(
          { message: "Could not read request body" },
          { status: 400 }
        );
      }

      if (!rawText || rawText.trim() === "") {
        console.error("Request body is empty");
        return NextResponse.json(
          { message: "Request body is empty" },
          { status: 400 }
        );
      }

      let body: Record<string, unknown>;
      try {
        body = JSON.parse(rawText);
      } catch (jsonErr) {
        console.error("JSON parse failed. Raw body was:", JSON.stringify(rawText), jsonErr);
        return NextResponse.json(
          { message: "Invalid JSON in request body" },
          { status: 400 }
        );
      }

      jobId             = (body.jobId             as string) || "";
      userId            = (body.userId             as string) || "";
      fullName          = (body.fullName           as string) || "";
      email             = (body.email              as string) || "";
      currentCTC        = (body.currentCTC         as string) || null;
      expectedCTC       = (body.expectedCTC        as string) || null;
      preferredLocation = (body.preferredLocation  as string) || null;
      noticePeriod      = (body.noticePeriod       as string) || null;
      skills            = (body.skills             as string) || null;
      resumeUrl         = (body.resumeUrl          as string) || null;
    }

    // ─── 2. VALIDATION ───────────────────────────────────────────────────────

    if (!jobId || !userId || !fullName || !email) {
      console.error("Validation Failed: Missing required fields", {
        jobId, userId, fullName, email,
      });
      return NextResponse.json(
        { message: "Job ID, User ID, Name, and Email are required" },
        { status: 400 }
      );
    }

    // ─── 3. DATABASE OPERATIONS ──────────────────────────────────────────────

    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }
    if (job.isClosed) {
      return NextResponse.json({ message: "Job is closed" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
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

    console.log("SUCCESS: Application Created", application.id);
    return NextResponse.json(application, { status: 201 });

  } catch (error) {
    console.error("CRITICAL ERROR in /api/applications:", error);
    return NextResponse.json(
      {
        message: "Server error",
        error: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  }
}