"use client";
// Beneficiaries.js
import React from "react";
import { SidebarWithBurgerMenu } from "@root/src/components/Sidebar";
import { notification, search, addCircle, downicon } from "@root/icons";
import Icon from "@root/src/components/Icon";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center bg-white ">
        <h1 className="text-3xl font-bold ml-5 text-blue-900">Miservo</h1>
        <div className="flex gap-5 items-center">
          <div className="relative">
            <input
              type="text"
              className="text-sm px-5 py-2 border-none outline-none w-96 bg-gray-200"
              placeholder="Search Here..."
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer">
              <Icon src={search} className="w-4" />
            </button>
          </div>
          <Link
            href="/AddAssets"
            className="bg-yellow-700 px-5 py-2 text-black text-xs font-bold flex gap-2 justify-center items-center"
          >
            ADD ASSETS
            <Icon src={addCircle} className="w-4" />
          </Link>
          <Link
            href="/Beneficiary"
            className="bg-yellow-700 px-5 py-2 text-black text-xs font-bold flex gap-2 justify-center items-center"
          >
            ADD BENEFICIARY
            <Icon src={addCircle} className="w-4" />
          </Link>
          <Link
            href="/"
            className="bg-green-500 px-5 py-2 text-black text-xs font-bold flex gap-2 justify-center items-center"
          >
            NEED HELP
          </Link>
          <span className="px-3">
            <Icon src={notification} className="w-5" />
          </span>
          <div className="flex gap-2 border border-yellow-800 p-1 px-3 mx-5">
            <Image
              src="/images/avatar.png"
              width={40}
              height={40}
              className=""
            />
            <Icon src={downicon} className="w-4" />
          </div>
          <span className="bg-yellow-700 p-3.5 text-black text-xs font-bold">
            <SidebarWithBurgerMenu />
          </span>
        </div>
      </div>
    </>
  );
}
