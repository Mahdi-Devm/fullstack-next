"use client";
import React, { useState } from "react";
import { TfiMore } from "react-icons/tfi";
import Link from "next/link";
import { menuItems } from "../../lib/data";

function DropdownListHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      <TfiMore
        size={30}
        className="text-sm cursor-pointer"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded shadow-lg z-10">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label} className="select-none p-1">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-1 cursor-pointer hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={`${item.href}`}
                    className="block px-4 py-1 cursor-pointer hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownListHeader;
