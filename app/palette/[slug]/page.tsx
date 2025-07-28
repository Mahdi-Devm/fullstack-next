import Link from "next/link";
import { getCategoryBySlug } from "../../../lib/getCategoryBySlug/getCategoryBySlug";
import PaletteCard from "../../../components/ui/PaletteCard";
import Borderb from "../../../components/ui/Borderb";
import { Category, CategorySummary } from "../../../types/category";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const palette = await getCategoryBySlug(slug);

  if (!palette) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl font-semibold">
        Slug not found
      </div>
    );
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-10 md:p-0 p-8">
        <PaletteCard palette={palette} />
      </div>

      <div className="max-w-2xl mx-auto mt-16 p-6 bg-white rounded-2xl  font-sans">
        <div className="flex space-x-4 mb-8 justify-center">
          {palette.colors.slice(0, 4).map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                title={color.hex}
                style={{ backgroundColor: color.hex }}
                className="w-20 h-20 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-110"
              />

              <span
                className="mt-2 text-sm font-mono select-all cursor-text"
                title={`Copy ${color.hex}`}
              >
                {color.hex.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 m-0 mb-10">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">Title</h2>
            <Borderb />
            <h3 className="text-stone-600">{palette.title}</h3>
          </div>
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">
              Categories
            </h2>
            <div className="mb-1">
              <Borderb />
            </div>
            <ul className="inline-flex flex-wrap gap-3 justify-center">
              {palette.categories.map(
                (categoryWrapper: { category: CategorySummary }) => (
                  <li key={categoryWrapper.category.id}>
                    <Link
                      href={`/${
                        categoryWrapper.category.slug ||
                        categoryWrapper.category.id
                      }`}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm transition-colors"
                    >
                      {categoryWrapper.category.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
