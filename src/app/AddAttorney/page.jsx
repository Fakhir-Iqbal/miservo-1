"use client";
import React from "react";
import CustomTextField from "@components/CustomTextField";
import Navbar from "@root/src/components/Navbar/page";
import Link from "next/link";

const AddAttorney = () => {
  return (
    <>
      <Navbar />
      <section className="p-4">
        <h2 className="text-2xl font-extrabold mb-4">Add Attorney</h2>
        <h2 className="text-md font-extrabold mb-4">
          Write the attorney details carefully
        </h2>
        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-2">
            <CustomTextField
              label="First Name"
              placeholder="Francisco"
              classs=""
            />
          </div>
          <div className="col-span-2">
            <CustomTextField label="Last Name" placeholder="Javier" classs="" />
          </div>
          <div className="col-span-2">
            <CustomTextField
              label="Phone"
              placeholder="+123-746-7890"
              classs=""
            />
          </div>
          <div className="col-span-2">
            <CustomTextField
              label="company cell number"
              placeholder="+123-746-7890"
              classs=""
            />
          </div>
          <div className="col-span-2">
            <CustomTextField
              label="WhatsApp"
              placeholder="+123-746-7890"
              classs=""
            />
          </div>
          <div className="col-span-3">
            <CustomTextField
              label="Company Name"
              placeholder="SilverStone"
              classs=""
            />
          </div>
          <div className="col-span-3">
            <CustomTextField
              label="Email"
              placeholder="franciscojavier@gmail.com"
              classs=""
            />
          </div>
          <div className="col-span-3">
            <CustomTextField label="Office Email" placeholder="-" classs="" />
          </div>
          <div className="col-span-3">
            <CustomTextField
              label="Company Website"
              placeholder="SilverStone"
              classs=""
            />
          </div>
          <div className="col-span-10">
            <CustomTextField
              label="Office Address"
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard"
              classs=""
            />
          </div>
          <div className="col-span-10">
            <CustomTextField
              label="Other Address"
              placeholder="Same As Above"
              classs=""
            />
          </div>
        </div>
        {/* Neeed button here */}
        <Link
          href="/Attorney"
          className="bg-yellow-700 px-5 py-2 text-black text-xs font-bold flex gap-2 justify-center items-center w-72 mt-5"
        >
          ADD ATTORNEY
        </Link>
      </section>
    </>
  );
};

export default AddAttorney;
