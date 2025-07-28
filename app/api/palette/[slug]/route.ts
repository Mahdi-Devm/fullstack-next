import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const palette = await prisma.palette.findUnique({
    where: { slug },
    include: {
      colors: true,
      categories: { include: { category: true } },
    },
  });

  if (!palette) {
    return NextResponse.json({ error: "Palette not found" }, { status: 404 });
  }

  return NextResponse.json(palette);
}
