import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const status = String(body?.status || "").toUpperCase();

    if (!status) {
      return NextResponse.json(
        { message: "Status is required" },
        { status: 400 }
      );
    }

    const validStatuses = [
      "PENDING",
      "REVIEWED",
      "SHORTLISTED",
      "HIRED",
      "REJECTED",
    ];

    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { message: "Invalid status" },
        { status: 400 }
      );
    }

    const application = await prisma.application.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(application);
  } catch (error) {
    console.error("Error updating candidate:", error);
    return NextResponse.json(
      {
        message: "Failed to update candidate",
        error: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  }
}