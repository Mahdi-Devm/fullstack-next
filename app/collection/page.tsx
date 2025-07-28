"use client";
import React, { useState, useEffect } from "react";
import GetAllPalettesByUserKey from "../../lib/GetAllPaletteByparams/GetAllPaletteByparams";
import BtnLikePaletteCard from "../../components/ui/BtnLikePaletteCard";
import { timeSince } from "../../utils/timeSince";

interface Color {
  hex: string;
}

interface Palette {
  id: number;
  colors: Color[];
  likes: number;
  createdAt: string;
}

export default function Page() {
  const [palettes, setPalettes] = useState<Palette[] | null>(null);

  async function fetchPalettes() {
    const result = await GetAllPalettesByUserKey("1");
    setPalettes(result.palettes);
  }

  useEffect(() => {
    fetchPalettes();
  }, []);

  if (!palettes) {
    return <p className="text-center mt-10">Loading palettes...</p>;
  }

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 p-4">
        {palettes.map((palette) => (
          <div key={palette.id} className=" flex flex-col  rounded-xl">
            <div className="flex flex-col mt-3 h-66 transition-all drop-shadow-amber-300 rounded-xl overflow-auto">
              {palette.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  style={{
                    flexGrow: 5 - index,
                    backgroundColor: color.hex,
                    height: 50,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between items-center mt-3 px-3">
              <BtnLikePaletteCard likes={palette.likes} id={palette.id} />
              <span className="font-light text-xs">
                {timeSince(palette.createdAt)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
