import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const { hex, order, paletteId } = body;

  const color = await prisma.color.create({
    data: { hex, order, paletteId },
  });

  return NextResponse.json(color);
}

export async function GET() {
  const colors = await prisma.color.findMany({
    include: { palette: true },
  });
  return NextResponse.json(colors);
}
