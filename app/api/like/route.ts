import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

export async function POST(request: Request) {
  try {
    const { paletteId, userKey } = await request.json();

    if (!paletteId || !userKey) {
      return NextResponse.json(
        { message: "paletteId و userKey معتبر نیستند" },
        { status: 400 }
      );
    }

    const existingLike = await prisma.like.findFirst({
      where: { paletteId, userKey },
    });

    if (existingLike) {
      await prisma.like.delete({ where: { id: existingLike.id } });
      await prisma.palette.update({
        where: { id: paletteId },
        data: { likes: { decrement: 1 } },
      });
      return NextResponse.json({ liked: false, message: "برداشت لایک" });
    } else {
      await prisma.like.create({ data: { paletteId, userKey } });
      await prisma.palette.update({
        where: { id: paletteId },
        data: { likes: { increment: 1 } },
      });
      return NextResponse.json({ liked: true, message: "اضافه کردن لایک" });
    }
  } catch (error) {
    return NextResponse.json(
      { liked: null, message: (error as Error).message },
      { status: 500 }
    );
  }
}
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userKey = searchParams.get("userKey");

    if (!userKey) {
      return NextResponse.json(
        { message: "userKey is required" },
        { status: 400 }
      );
    }

    const palettes = await prisma.palette.findMany({
      where: {
        likesList: {
          some: {
            userKey,
          },
        },
      },
      include: {
        colors: true,
        categories: true,
        likesList: true,
      },
    });

    return NextResponse.json({ palettes });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
