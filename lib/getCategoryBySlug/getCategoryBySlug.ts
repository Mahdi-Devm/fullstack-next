import { Palette } from "../../types/category";
import prisma from "../db";

export async function getCategoryBySlug(slug: string): Promise<Palette | null> {
  const palette = await prisma.palette.findUnique({
    where: { slug },
    include: {
      colors: true,
      categories: { include: { category: true } },
    },
  });

  return palette;
}
