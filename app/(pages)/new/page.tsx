import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
        <div className="   h-66 space-y-4 ">
          <div className="flex flex-col h-full  overflow-hidden rounded-xl">
            <div className="flex-[5] bg-gray-100 "></div>
            <div className="flex-[4] bg-gray-200"></div>
            <div className="flex-[3] bg-gray-300"></div>
            <div className="flex-[2] bg-gray-400"></div>
          </div>
          <div className="flex justify-between items-center">
            <button className="border flex items-center gap-3 px-2 py-1 justify-between border-border rounded-md">
              <Image
                src="/icon/heart-removebg-preview.png"
                alt="heart"
                width={20}
                height={20}
              />
              <span className="font-mono">30</span>
            </button>
            <span className="font-light">5 hours</span>
          </div>
        </div>
        <div className="   h-66 space-y-4 ">
          <div className="flex flex-col h-full  overflow-hidden rounded-xl">
            <div className="flex-[5] bg-red-100 "></div>
            <div className="flex-[4] bg-red-200"></div>
            <div className="flex-[3] bg-red-300"></div>
            <div className="flex-[2] bg-red-400"></div>
          </div>
          <div className="flex justify-between items-center">
            <button className="border flex items-center gap-3 px-2 py-1 justify-between border-border rounded-md">
              <Image
                src="/icon/heart-removebg-preview.png"
                alt="heart"
                width={20}
                height={20}
              />
              <span className="font-mono">20</span>
            </button>
            <span className="font-light">20 hours</span>
          </div>
        </div>
        <div className="   h-66 space-y-4 mt-15 md:mt-0">
          <div className="flex flex-col h-full  overflow-hidden rounded-xl">
            <div className="flex-[5] bg-blue-100 "></div>
            <div className="flex-[4] bg-blue-200"></div>
            <div className="flex-[3] bg-blue-300"></div>
            <div className="flex-[2] bg-blue-400"></div>
          </div>
          <div className="flex justify-between items-center">
            <button className="border flex items-center gap-3 px-2 py-1 justify-between border-border rounded-md">
              <Image
                src="/icon/heart-removebg-preview.png"
                alt="heart"
                width={20}
                height={20}
              />
              <span className="font-mono">20</span>
            </button>
            <span className="font-light">9 hours</span>
          </div>
        </div>
        <div className=" h-66 space-y-4 mt-15">
          <div className="flex flex-col h-full  overflow-hidden rounded-xl">
            <div className="flex-[5] bg-yellow-100 "></div>
            <div className="flex-[4] bg-yellow-200"></div>
            <div className="flex-[3] bg-yellow-300"></div>
            <div className="flex-[2] bg-yellow-400"></div>
          </div>
          <div className="flex justify-between items-center">
            <button className="border flex items-center gap-3 px-2 py-1 justify-between border-border rounded-md">
              <Image
                src="/icon/heart-removebg-preview.png"
                alt="heart"
                width={20}
                height={20}
              />
              <span className="font-mono">30</span>
            </button>
            <span className="font-light">5 hours</span>
          </div>
        </div>
        <div className="   h-66 space-y-4 mt-15">
          <div className="flex flex-col h-full  overflow-hidden rounded-xl">
            <div className="flex-[5] bg-green-100 "></div>
            <div className="flex-[4] bg-green-200"></div>
            <div className="flex-[3] bg-green-300"></div>
            <div className="flex-[2] bg-green-400"></div>
          </div>
          <div className="flex justify-between items-center">
            <button className="border flex items-center gap-3 px-2 py-1 justify-between border-border rounded-md">
              <Image
                src="/icon/heart-removebg-preview.png"
                alt="heart"
                width={20}
                height={20}
              />
              <span className="font-mono">20</span>
            </button>
            <span className="font-light">20 hours</span>
          </div>
        </div>
        <div className="   h-66 space-y-4 mt-15">
          <div className="flex flex-col h-full  overflow-hidden rounded-xl">
            <div className="flex-[5] bg-indigo-100 "></div>
            <div className="flex-[4] bg-indigo-200"></div>
            <div className="flex-[3] bg-indigo-300"></div>
            <div className="flex-[2] bg-indigo-400"></div>
          </div>
          <div className="flex justify-between items-center">
            <button className="border flex items-center gap-3 px-2 py-1 justify-between border-border rounded-md">
              <Image
                src="/icon/heart-removebg-preview.png"
                alt="heart"
                width={20}
                height={20}
              />
              <span className="font-mono">20</span>
            </button>
            <span className="font-light">9 hours</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
