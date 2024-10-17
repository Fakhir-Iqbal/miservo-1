"use client";
import React from "react";
import Link from "next/link";

const CustomButton = ({ href, className = "", title }) => {
  return (
    <span
      className={`bg-yellow-700 px-5 py-2 rounded-md text-black text-xs font-bold  ${className}`}>

      <Link
        href={href ?? "#"}
      >
        {title}
      </Link>
    </span>
  );
};

export default CustomButton;
