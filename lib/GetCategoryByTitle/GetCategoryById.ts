import { Category } from "../../types/category";
import prisma from "../db";

export async function getCategoryById(id: number): Promise<Category | null> {
  const category = await prisma.category.findUnique({
    where: { id },
    include: {
      palettes: {
        include: {
          palette: {
            include: {
              colors: true,
              categories: { include: { category: true } },
            },
          },
        },
      },
    },
  });

  return category;
}
