import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

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
      return NextResponse.json({ message: "Status is required" }, { status: 400 });
    }

    const validStatuses = ["PENDING", "REVIEWED", "SHORTLISTED", "HIRED", "REJECTED"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ message: "Invalid status" }, { status: 400 });
    }

    // Get application with job ID
    const application = await prisma.application.findUnique({
      where: { id },
      select: { id: true, jobId: true, status: true },
    });

    if (!application) {
      return NextResponse.json({ message: "Application not found" }, { status: 404 });
    }

    // Update application status
    const updatedApplication = await prisma.application.update({
      where: { id },
      data: { status },
    });

    // If hired, EXPLICITLY set isClosed to true (boolean, not number/string)
    if (status === "HIRED") {
      console.log("Closing job ID:", application.jobId);
      const updatedJob = await prisma.job.update({
        where: { id: application.jobId },
        data: { isClosed: true }, // Explicit boolean
      });
      console.log("Job closed successfully:", updatedJob.id, "isClosed:", updatedJob.isClosed);
    }

    return NextResponse.json(updatedApplication);
  } catch (error) {
    console.error("=== HIRE FLOW ERROR ===");
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to update application", error: error instanceof Error ? error.message : "Unknown" },
      { status: 500 }
    );
  }
}