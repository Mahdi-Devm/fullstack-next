import PaletteCard from "../../components/ui/PaletteCard";
import { getCategoryById } from "../../lib/GetCategoryByTitle/GetCategoryById";

export default async function Page() {
  const category = await getCategoryById(2);

  const palettes = category?.palettes.map((p) => p.palette) || [];
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
      {palettes.map((palette) => (
        <PaletteCard key={palette.id} palette={palette} />
      ))}
    </section>
  );
}
