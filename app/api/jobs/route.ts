import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET ALL JOBS
export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("GET Jobs Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

// CREATE JOB
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const job = await prisma.job.create({
      data: {
        title: body.title,
        company: body.company,
        location: body.location,
        salary: body.salary,
        type: body.type,
        description: body.description,
        sector: body.sector || "IT",
      },
    });

    return NextResponse.json(job);
  } catch (error) {
    console.error("POST Job Error:", error);
    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 }
    );
  }
}