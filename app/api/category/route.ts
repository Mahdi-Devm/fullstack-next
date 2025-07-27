import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, slug } = body;

  const category = await prisma.category.create({
    data: { name, slug },
  });

  return NextResponse.json(category);
}

export async function GET() {
  const categories = await prisma.category.findMany({
    include: {
      palettes: {
        include: {
          palette: {
            include: { colors: true },
          },
        },
      },
    },
  });
  return NextResponse.json(categories);
}
