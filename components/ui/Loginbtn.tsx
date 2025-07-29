"use client";

import React, { useState } from "react";
import DropdownListHeader from "./DropdownListHeader";
import { LuLogIn } from "react-icons/lu";
import FormloginModal from "./FormloginModal";
import { FaUserCircle } from "react-icons/fa";

function Loginbtn({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  function handelchangeroute() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className="relative inline-block text-left w-[100px] md:w-[500px]">
        <div className=" flex items-center justify-between gap-6 relative">
          {!isLoggedIn ? (
            <div
              className="border border-gray-300 items-center rounded-xl hidden md:flex p-2 gap-2 hover:bg-gray-100 cursor-pointer transition-all duration-300"
              onClick={handelchangeroute}
            >
              <button className="rounded-md cursor-pointer">Register</button>
              <LuLogIn size={20} />
            </div>
          ) : (
            <div className="border border-green-400 items-center rounded-xl hidden md:flex p-2 gap-2 bg-green-50 text-green-700">
              <FaUserCircle size={20} />
              <span className="text-sm font-semibold">Success User</span>
            </div>
          )}
          <DropdownListHeader />
        </div>
      </div>

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          ></div>

          <FormloginModal />
        </>
      )}
    </>
  );
}

export default Loginbtn;
