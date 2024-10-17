"use client";

import React, { useState } from "react";
import CustomTextField from "@root/src/components/CustomTextField";
import Navbar from "@root/src/components/Navbar/page";
import Link from "next/link";
import Attachments from "@root/src/components/AddAttachments/page";

const beneficiaries = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

const AddAssets = () => {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState("");

  const handleChange = (event) => {
    setSelectedBeneficiary(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Navbar />
      <section className="p-4 px-10">
        <h2 className="text-2xl font-extrabold mb-4">Add New Assets</h2>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <CustomTextField
              label="Add Title:"
              placeholder="Add Title Here"
              className=""
            />
          </div>
          <div className="col-span-6">
            <label htmlFor="beneficiary" className="block mb-1 font-bold">
              Select Beneficiary:
            </label>
            <select
              id="beneficiary"
              value={selectedBeneficiary}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            >
              <option value="" disabled>
                Select a beneficiary
              </option>
              {beneficiaries.map((beneficiary) => (
                <option key={beneficiary.id} value={beneficiary.id}>
                  {beneficiary.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-12">
            <p className="font-bold mb-1">Discription:</p>
            <textarea
              placeholder="Add Description Here"
              className="h-36 w-full p-3 border-none resize-none focus:outline-none"
            />
          </div>

          <div className="col-span-12">
          <p className="font-bold mb-3">Attach Document/Images/Videos:</p>  
            <Attachments />
          </div>
          <div className="col-span-6 flex items-center gap-5 py-3">
            <span className="font-bold">Attorney Against this Asset?</span>
            <div className="flex items-center mt-2">
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  value="yes"
                  checked={selectedOption === "yes"}
                  onChange={handleSelectChange}
                  className="peer hidden"
                />
                <span
                  className="w-5 h-5 border-2 border-yellow-700 bg-white rounded-full flex items-center justify-center mr-2 
                    peer-checked:bg-yellow-700"
                >
                  {selectedOption === "yes" && (
                    <span className="w-3 h-3 bg-white rounded-full" />
                  )}
                </span>
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="no"
                  checked={selectedOption === "no"}
                  onChange={handleSelectChange}
                  className="peer hidden"
                />
                <span
                  className="w-5 h-5 border-2 border-yellow-700 bg-yellow- rounded-full flex items-center justify-center mr-2 
                    peer-checked:bg-yellow-700"
                >
                  {selectedOption === "no" && (
                    <span className="w-3 h-3 bg-white rounded-full" />
                  )}
                </span>
                No
              </label>
            </div>
          </div>

          <div className="col-span-12">
            <p className="font-bold mb-1">
              Add court information: (where legal documents are filed in case
              the attorney is unreachable) :
            </p>
            <textarea
              placeholder="Write The Information Here"
              className="h-36 w-full p-3 border-none resize-none focus:outline-none"
            />
          </div>
        </div>
        <Link
          href="/Assets"
          className="bg-yellow-700 px-5 py-2 text-black text-xs font-bold flex gap-2 justify-center items-center w-72 mt-5"
        >
          ADD RECORD
        </Link>
      </section>
    </>
  );
};

export default AddAssets;
