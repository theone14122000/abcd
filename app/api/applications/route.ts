import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const applications = await prisma.application.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
        job: {
          select: {
            id: true,
            title: true,
            company: true,
            location: true,
            sector: true,
            type: true,
            salary: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(applications);
  } catch (error) {
    console.error("GET /api/applications error:", error);
    return NextResponse.json(
      { message: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      jobId,
      userId,
      fullName,
      email,
      currentCTC,
      expectedCTC,
      preferredLocation,
      noticePeriod,
      skills,
      resumeUrl,
    } = body;

    if (!jobId || !userId || !fullName || !email) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    const application = await prisma.application.create({
      data: {
        jobId,
        userId,
        fullName,
        email,
        currentCTC: currentCTC || null,
        expectedCTC: expectedCTC || null,
        preferredLocation: preferredLocation || null,
        noticePeriod: noticePeriod || null,
        skills: skills || null,
        resumeUrl: resumeUrl || null,
        status: "PENDING",
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error("POST /api/applications error:", error);
    return NextResponse.json(
      { message: "Failed to submit application" },
      { status: 500 }
    );
  }
}