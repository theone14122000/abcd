import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    // EXPLICITLY select isClosed to make sure it's included
    const jobs = await prisma.job.findMany({
      select: {
        id: true,
        title: true,
        company: true,
        location: true,
        salary: true,
        type: true,
        sector: true,
        description: true,
        isClosed: true, // Explicitly select this field
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    console.log("=== DASHBOARD API RESPONSE ===");
    console.log("Total jobs:", jobs.length);
    console.log("Sample job isClosed values:", jobs.slice(0, 3).map(j => ({ id: j.id, title: j.title, isClosed: j.isClosed, type: typeof j.isClosed })));

    // Return jobs array directly
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json([]);
  }
}