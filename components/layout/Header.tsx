import Image from "next/image";
import React from "react";
import { TfiMore } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import Borderb from "../ui/Borderb";

function Header() {
  return (
    <>
      <header className="w-full flex items-center justify-between p-3 gap-5">
        <div className="w-full sm:w-[300px] flex items-center justify-center">
          <Image
            width={120}
            height={100}
            src="/logo/logomobil.png"
            alt="mobile logo"
            className="block sm:hidden"
          />

          <Image
            width={140}
            height={120}
            src="/logo/logo.png"
            alt="desktop logo"
            className="hidden sm:block"
          />
        </div>

        <div className="search-container">
          <input type="search" placeholder="search palettes" />
          <CiSearch className="icon" size={20} />
        </div>

        <div className="w-[500px] flex items-center justify-between gap-6">
          <div className="border border-gray-300 items-center rounded-xl hidden md:flex">
            <Image src="/icon/chrome.png" alt="chrome" width={40} height={40} />
            <button className="p-2 rounded-md">Add to Chrome</button>
          </div>
          <TfiMore size={30} className="text-sm" />
        </div>
      </header>

      <Borderb />
    </>
  );
}

export default Header;
