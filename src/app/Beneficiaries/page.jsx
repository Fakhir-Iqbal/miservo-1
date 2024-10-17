"use client";

import React from "react";
import Icon from "@root/src/components/Icon";
import { addCircle, back, pencil } from "@root/icons";
import Link from "next/link";
import Navbar from "@root/src/components/Navbar/page";
import BeneficiariesCard from "@root/src/components/Cards/BeneficiariesCard";

const beneficiaries = [
  {
    index: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "+123-456-7890",
    relation: "Brother",
    bg: false,
  },
  {
    index: 2,
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    phone: "+123-456-7891",
    relation: "Sister",
    bg: false,
  },
  {
    index: 3,
    name: "Alice Johnson",
    email: "alicejohnson@gmail.com",
    phone: "+123-456-7892",
    relation: "Cousin",
    bg: false,
  },
  {
    index: 2,
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    phone: "+123-456-7891",
    relation: "Sister",
    bg: false,
  },
];
const beneficiaryDetails = [
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

const Beneficiary = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Beneficiaries</h1>
          <div className="flex items-center">
            <Link
              href="/Beneficiary"
              className="flex gap-2 font-semibold underline decoration-yellow-800 text-sm decoration-2"
            >
              {" "}
              ADD BENEFICIARIES <Icon src={addCircle} className="w-4" />
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
        <div className="flex gap-5 py-6">
          {beneficiaries.map((beneficiary) => (
            <BeneficiariesCard
              key={beneficiary.index}
              index={beneficiary.index}
              name={beneficiary.name}
              email={beneficiary.email}
              phone={beneficiary.phone}
              relation={beneficiary.relation}
              bg={beneficiary.bg}
            />
          ))}
        </div>
        <div className="bg-white my-7 p-4 rounded-2xl">
          <div className="flex justify-between py-3">
            <h2 className="text-3xl font-bold">#1</h2>
            <Link href="/" className="flex gap-2 py-3">
              Edit Details <Icon src={pencil} className="w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {beneficiaryDetails.map((detail, index) => (
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

export default Beneficiary;
