import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const job = await prisma.job.findUnique({
      where: { id },
    });

    if (!job) {
      return NextResponse.json(
        { message: "Job not found" },
        { status: 404 }
      );
    }

    const updatedJob = await prisma.job.update({
      where: { id },
      data: {
        isClosed: false,
      },
    });

    return NextResponse.json(updatedJob);
  } catch (error) {
    console.error("Reopen job error:", error);
    return NextResponse.json(
      { message: "Failed to reopen job" },
      { status: 500 }
    );
  }
}