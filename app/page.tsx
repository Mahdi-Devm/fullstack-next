import Image from "next/image";
import { Palette } from "../types/category";
import { getCategoryById } from "../lib/GetCategoryByTitle/GetCategoryByTitle";
import { timeSince } from "../utils/timeSince";

export default async function Page() {
  const category = await getCategoryById(1);

  const palettes = category?.palettes.map((p) => p.palette) || [];
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
      {palettes.map((palette) => (
        <PaletteCard key={palette.id} palette={palette} />
      ))}
    </section>
  );
}

function PaletteCard({ palette }: { palette: Palette }) {
  return (
    <div className="h-66 space-y-4 mb-15">
      <div className="flex flex-col h-full overflow-hidden rounded-xl">
        {palette.colors.slice(0, 4).map((color, index) => (
          <div
            key={index}
            style={{
              flex: 5 - index,
              backgroundColor: color.hex,
            }}
          />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button className="border flex items-center gap-3 px-2 py-1 border-border rounded-md">
          <Image
            src="/icon/heart-removebg-preview.png"
            alt="heart"
            width={20}
            height={20}
          />
          <span className="font-mono">{palette.likes}</span>
        </button>
        <span className="font-light text-xs">
          {timeSince(palette.createdAt)}
        </span>
      </div>
    </div>
  );
}
