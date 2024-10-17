"use client";

import React from "react";
import Icon from "@root/src/components/Icon";
import { addCircle, back, pencil } from "@root/icons";
import Link from "next/link";
import Navbar from "@root/src/components/Navbar/page";

const personalDetails = [
  {
    label: "First Name",
    value: "John",
  },
  {
    label: "Last Name",
    value: "Doe",
  },
  {
    label: "Relation",
    value: "Son",
  },
  {
    label: "Phone",
    value: "+123-456-789",
  },
  {
    label: "Phone#2",
    value: "+123-456-789",
  },
  {
    label: "Whatsapp",
    value: "+123-456-789",
  },
  {
    label: "Email",
    value: "franciscojavier@gmail.com",
  },
  {
    label: "Another Email",
    value: "-",
  },
  {
    label: "Address",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    label: "Address#2",
    value: "Same as above",
  },
  {
    label: "Assigned Assets",
    value: "John Xavier",
  },
];

const Attorney = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Attorney</h1>
          <div className="flex items-center">
            <Link
              href="/AddAttorney"
              className="flex gap-2 font-semibold underline decoration-yellow-800 text-sm decoration-2"
            >
              {" "}
              ADD ATTORNEY <Icon src={addCircle} className="w-4" />
            </Link>
            <span className="bg-white mx-3 p-3 rounded-full">
              {" "}
              <Icon src={back} className="w-3 h-3" />
            </span>
            <span className="bg-white p-3 rounded-full">
              {" "}
              <Icon src={back} className="w-3 h-3 rotate-180" />
            </span>
          </div>
        </div>

        <div className="bg-white my-7 p-4 rounded-2xl min-h-[420px]">
          <div className="flex justify-between py-3">
            <h2 className="text-3xl font-bold text-blue-900 ">
            Francisco Javier
            </h2>
            <Link href="/" className="flex gap-2 py-3">
              Edit Details <Icon src={pencil} className="w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {personalDetails.map((detail, index) => (
              <p key={index}>
                <span className="font-bold">{detail.label}:</span>{" "}
                {detail.value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Attorney;
