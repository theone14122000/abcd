import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET - Fetch all open jobs (public)
export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      where: {
        isClosed: false,
      },
      select: {
        id: true,
        title: true,
        company: true,
        location: true,
        salary: true,
        type: true,
        sector: true,
        description: true,
        isClosed: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("GET /api/jobs error:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch jobs",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}