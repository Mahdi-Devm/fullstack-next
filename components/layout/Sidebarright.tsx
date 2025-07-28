"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Borderb from "../ui/Borderb";
import GetAllPalettesByUserKey from "../../lib/GetAllPaletteByparams/GetAllPaletteByparams";
import { FaX } from "react-icons/fa6";
import AddcollectionById from "../../lib/AddcollectionById/AddcollectionById";
interface Palette {
  id: number;
  colors: {
    hex: string;
  }[];
}
function Sidebarright() {
  const pathname = usePathname();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [palettes, setPalettes] = useState<Palette[] | null>(null);
  useEffect(() => {
    if (pathname === "/") {
      setTitle("Color Palettes for Designers and Artists");
      setDescription("Discover the newest hand-picked palettes of Color Hunt");
    } else if (pathname === "/random") {
      setTitle("Find Color Inspiration");
      setDescription(
        "Randomly browse through thousands of beautiful color palettes"
      );
    } else if (pathname === "/popular") {
      setTitle("Most Popular Palettes of Color Hunt");
      setDescription("The community's favorite color palettes");
    } else if (pathname === "/collection") {
      setTitle("");
      setDescription("");
      return;
    }
  }, [pathname]);

  async function fetchPalettes() {
    const result = await GetAllPalettesByUserKey("1");
    setPalettes(result.palettes);
  }

  useEffect(() => {
    fetchPalettes();
  }, []);

  async function handelremovelikelist(id: number) {
    await AddcollectionById(id, "1");
    await fetchPalettes();
  }

  if (pathname === "/collection") return null;

  return (
    <div>
      <h2 className="text-lg mt-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-3">
        <Borderb />
      </div>
      {palettes && (
        <div className="grid grid-cols-3 gap-4 mt-5">
          {palettes.map((palette) => (
            <div
              key={palette.id}
              className="relative group flex flex-col h-25 overflow-hidden rounded-xl transition-all duration-300 hover:opacity-50 hover:h-26"
            >
              <button
                className="absolute inset-0 z-10 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 cursor-pointer"
                onClick={() => handelremovelikelist(Number(palette.id))}
              >
                <FaX size={10} />
              </button>
              {palette.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  style={{ flex: 5 - index, backgroundColor: color.hex }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebarright;
