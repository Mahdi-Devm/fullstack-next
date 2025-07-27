import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

// PUT: آپدیت کتگوری
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const body = await req.json();
  const { name, slug } = body;

  const updatedCategory = await prisma.category.update({
    where: { id },
    data: { name, slug },
  });

  return NextResponse.json(updatedCategory);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const deleted = await prisma.category.delete({
    where: { id },
  });

  return NextResponse.json(deleted);
}
