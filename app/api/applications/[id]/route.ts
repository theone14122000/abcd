import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const application = await prisma.application.findUnique({
      where: { id },
    });

    if (!application) {
      return NextResponse.json(
        { message: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error("GET /api/applications/[id] error:", error);
    return NextResponse.json(
      { message: "Failed to fetch application" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const status = String(body?.status || "").toUpperCase();

    console.log("=== HIRE FLOW TRIGGERED ===");
    console.log("Application ID:", id);
    console.log("New Status:", status);

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

    const application = await prisma.application.findUnique({
      where: { id },
      select: {
        id: true,
        jobId: true,
        status: true,
      },
    });

    if (!application) {
      return NextResponse.json(
        { message: "Application not found" },
        { status: 404 }
      );
    }

    const updatedApplication = await prisma.application.update({
      where: { id },
      data: { status },
    });

    let updatedJob = null;

    if (status === "HIRED" && application.jobId) {
      console.log("Closing job ID:", application.jobId);

      updatedJob = await prisma.job.update({
        where: { id: application.jobId },
        data: { isClosed: true },
      });

      console.log(
        "Job closed successfully:",
        updatedJob.id,
        "isClosed:",
        updatedJob.isClosed
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application updated successfully",
      application: updatedApplication,
      job: updatedJob,
    });
  } catch (error) {
    console.error("=== HIRE FLOW ERROR ===");
    console.error("Error:", error);

    return NextResponse.json(
      {
        message: "Failed to update application",
        error: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const application = await prisma.application.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!application) {
      return NextResponse.json(
        { message: "Application not found" },
        { status: 404 }
      );
    }

    await prisma.application.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error("DELETE /api/applications/[id] error:", error);
    return NextResponse.json(
      {
        message: "Failed to delete application",
        error: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  }
}