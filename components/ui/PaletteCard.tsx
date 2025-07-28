import { Palette } from "../../types/category";
import { timeSince } from "../../utils/timeSince";
import Link from "next/link";
import BtnLikePaletteCard from "./BtnLikePaletteCard";

export default function PaletteCard({ palette }: { palette: Palette }) {
  return (
    <div className="h-66 space-y-4 mb-15 md:w-66 w-full mx-auto">
      <Link href={`/palette/${palette.slug}`}>
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
      </Link>
      <div className="flex justify-between items-center mt-3">
        <BtnLikePaletteCard likes={palette.likes} id={palette.id} />

        <span className="font-light text-xs">
          {timeSince(palette.createdAt)}
        </span>
      </div>
    </div>
  );
}
