"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { items, itmssidebarleft } from "../../lib/data";

function Sidebarleft() {
  const pathname = usePathname();

  return (
    <div className="w-full items-center h-screen flex flex-col bg-white  px-4 py-6 text-sm text-gray-700 overflow-y-auto">
      <div className="space-y-2 mb-6 w-full">
        {itmssidebarleft.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-4   py-2 rounded-xl transition-colors capitalize ${
                isActive ? "bg-[#f4f4f4f1] font-medium" : ""
              } hover:bg-[#F9F9F9] hover:font-medium`}
            >
              <Image src={item.icon} alt={item.title} width={20} height={20} />
              <span className={` ${isActive ? "text-gray-900 " : ""} `}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 w-full">
        {items.map((item, index) => (
          <Link href={`/category/${item.id}`} key={index}>
            <button
              key={index}
              className="text-left px-5 py-1 capitalize transition-colors hover:text-stone-900 font-light"
            >
              {item.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebarleft;
