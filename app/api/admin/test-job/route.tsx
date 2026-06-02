import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { jobId, isClosed } = body;

    if (!jobId) {
      return NextResponse.json({ message: "jobId required" }, { status: 400 });
    }

    // First check if job exists
    const job = await prisma.job.findUnique({
      where: { id: jobId },
      select: { id: true, title: true, isClosed: true },
    });

    if (!job) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    // Toggle isClosed
    const updatedJob = await prisma.job.update({
      where: { id: jobId },
      data: { isClosed: Boolean(isClosed) },
      select: { id: true, title: true, isClosed: true },
    });

    console.log("=== TEST JOB UPDATE ===");
    console.log("Job ID:", jobId);
    console.log("Old isClosed:", job.isClosed, "Type:", typeof job.isClosed);
    console.log("New isClosed:", updatedJob.isClosed, "Type:", typeof updatedJob.isClosed);

    return NextResponse.json(updatedJob);
  } catch (error) {
    console.error("Test job update error:", error);
    return NextResponse.json(
      { message: "Failed to update job", error: error instanceof Error ? error.message : "Unknown" },
      { status: 500 }
    );
  }
}