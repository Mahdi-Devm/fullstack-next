import { getCategoryById } from "../GetCategoryByTitle/GetCategoryById";
import type { Metadata } from "next";

export async function generateCategoryMetadata(id: number): Promise<Metadata> {
  const category = await getCategoryById(id);

  if (!category) {
    return {
      title: "دسته‌بندی پیدا نشد",
      description: "دسته‌بندی مورد نظر یافت نشد.",
    };
  }

  const paletteCount = category.palettes.length;
  const colorCount = category.palettes.reduce(
    (sum, p) => sum + p.palette.colors.length,
    0
  );

  return {
    title: `${category.name} - ${paletteCount} پالت، ${colorCount} رنگ`,
    description: `دسته‌بندی «${category.name}» شامل ${paletteCount} پالت با مجموع ${colorCount} رنگ منحصربه‌فرد است.`,
    openGraph: {
      title: `${category.name} | پالت‌های رنگ`,
      description: `پالت‌های مربوط به ${category.name} را ببینید - شامل ${paletteCount} پالت و ${colorCount} رنگ.`,
    },
  };
}
