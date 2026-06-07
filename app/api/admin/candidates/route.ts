import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const source = searchParams.get("source") || "HERO_FORM";

    const where: any = { source };
    if (status) where.status = status;

    const candidates = await prisma.application.findMany({
      where,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        positionApplied: true,
        currentLocation: true,
        currentCTC: true,
        expectedCTC: true,
        resumeUrl: true,
        status: true,
        source: true,
        createdAt: true,
      },
    });

    return NextResponse.json(candidates);
  } catch (error) {
    console.error("Error fetching candidates:", error);
    return NextResponse.json({ message: "Failed to fetch candidates" }, { status: 500 });
  }
}