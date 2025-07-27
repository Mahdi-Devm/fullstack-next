"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Borderb from "../ui/Borderb";

function Sidebarright() {
  const pathname = usePathname();

  let title = "";
  let description = "";

  if (pathname === "/new") {
    title = "Color Palettes for Designers and Artists";
    description = "Discover the newest hand-picked palettes of Color Hunt";
  } else if (pathname === "/random") {
    title = "Find Color Inspiration";
    description =
      "Randomly browse through thousands of beautiful color palettes";
  } else if (pathname === "/popular") {
    title = "Most Popular Palettes of Color Hunt";
    description = "The community's favorite color palettes";
  } else if (pathname === "/collection") {
    return null;
  }

  return (
    <div>
      <h2 className="text-lg  mt-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-3">
        <Borderb />
      </div>
    </div>
  );
}

export default Sidebarright;
