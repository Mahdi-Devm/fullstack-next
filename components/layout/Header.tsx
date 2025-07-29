import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Borderb from "../ui/Borderb";
import Loginbtn from "../ui/Loginbtn";
import { cookies } from "next/headers";

async function Header() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  const isLoggedIn = !!token;

  return (
    <>
      <header className="w-full flex items-center justify-between p-3 gap-5">
        <div className="w-[100px] sm:w-[300px] flex items-center justify-center">
          <Image
            width={50}
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

        <div className="relative w-full border border-border rounded-[20px] p-1">
          <input
            type="search"
            placeholder="search palettes"
            className="pl-10 w-50 h-8 rounded-[20px] focus:outline-none"
          />
          <CiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
            size={20}
          />
        </div>

        <Loginbtn isLoggedIn={isLoggedIn} />
      </header>

      <Borderb />
    </>
  );
}

export default Header;
