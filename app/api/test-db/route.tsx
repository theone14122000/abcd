import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const allJobs = await prisma.job.findMany({
      select: {
        id: true,
        title: true,
        sector: true,
        isClosed: true,
      },
    });

    const allApplications = await prisma.application.findMany({
      select: {
        id: true,
        jobId: true,
        fullName: true,
        status: true,
      },
    });

    return NextResponse.json({
      jobsCount: allJobs.length,
      jobs: allJobs,
      applicationsCount: allApplications.length,
      applications: allApplications,
    });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Unknown error",
      message: "Database query failed. isClosed column might not exist.",
    });
  }
}