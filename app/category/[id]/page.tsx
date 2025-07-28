import PaletteCard from "../../../components/ui/PaletteCard";
import { getCategoryById } from "../../../lib/GetCategoryByTitle/GetCategoryById";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = await getCategoryById(Number(id));
  const palettes = category?.palettes.map((p) => p.palette) || [];

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
      {palettes.map((palette) => (
        <PaletteCard key={palette.id} palette={palette} />
      ))}
    </section>
  );
}
