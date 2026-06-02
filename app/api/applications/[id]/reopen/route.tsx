import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // Note: Params is a Promise in Next 15+
) {
  try {
    const { id } = await context.params;

    const updatedJob = await prisma.job.update({
      where: { id },
      data: { isClosed: false },
    });

    return NextResponse.json(updatedJob);
  } catch (error) {
    console.error("Reopen API Error:", error);
    return NextResponse.json({ error: "Failed to reopen job" }, { status: 500 });
  }
}