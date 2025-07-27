import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const { title, slug, colors, categoryIds } = body;

  const palette = await prisma.palette.create({
    data: {
      title,
      slug,
      colors: {
        create: colors.map((hex: string, index: number) => ({
          hex,
          order: index + 1,
        })),
      },
      categories: {
        create: categoryIds.map((id: number) => ({
          category: { connect: { id } },
        })),
      },
    },
    include: {
      colors: true,
      categories: {
        include: { category: true },
      },
    },
  });

  return NextResponse.json(palette);
}

export async function GET() {
  const palettes = await prisma.palette.findMany({
    include: {
      colors: true,
      categories: { include: { category: true } },
    },
  });
  return NextResponse.json(palettes);
}
