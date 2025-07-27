import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const palette = await prisma.palette.findUnique({
    where: { id: parseInt(params.id) },
    include: {
      colors: true,
      categories: { include: { category: true } },
    },
  });

  return NextResponse.json(palette);
}
