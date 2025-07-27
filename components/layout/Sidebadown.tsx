"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { itmssidebarleft } from "../../lib/data";

function Sidebardown() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md md:hidden z-50">
      <ul className="flex justify-around items-center py-2">
        {itmssidebarleft.map(({ title, href, icon }) => {
          const isActive = pathname === href;
          return (
            <li key={title} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center text-xs pt-1 pb-2 
                    ${
                      isActive
                        ? "text-gray-800 font-extrabold"
                        : "text-gray-600 hover:text-gray-700 "
                    }`}
              >
                <div className="relative w-6 h-6 mb-1 flex items-center justify-center">
                  <Image src={icon} alt={title} width={50} height={50} />
                </div>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebardown;
