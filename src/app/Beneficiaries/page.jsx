"use client";

import React, { useState, useEffect } from "react";
import Icon from "@root/src/components/Icon";
import { addCircle, back, pencil } from "@root/icons";
import Link from "next/link";
import Navbar from "@root/src/components/Navbar/page";
import BeneficiariesCard from "@root/src/components/Cards/BeneficiariesCard";
import axios from "axios";

const Beneficiary = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [activeBeneficiary, setActiveBeneficiary] = useState(null); // Will hold the currently selected beneficiary
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const savedData = localStorage.getItem("loginData");
  let converSaveData = JSON.parse(savedData);
  let token = converSaveData?.data?.token;

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        const response = await axios.get(
          "https://miservo-api.vercel.app/api/beneficiary/get",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setData(response.data.data);
          setActiveBeneficiary(response.data.data[0]); 
          setLoading(false);
        }
      } catch (error) {
        setError("No Beneficiaries Found");
        setLoading(false);

        
      }
    };

    fetchBeneficiaries();
  }, [token]);

  const nextBeneficiary = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    setActiveBeneficiary(data[nextIndex]);
  };

  const prevBeneficiary = () => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(prevIndex);
    setActiveBeneficiary(data[prevIndex]);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">{error}</p>
          <p className="text-gray-500">Please add beneficiaries to view them here.</p>
        </div>
      </div>
    );
  }

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
              ADD BENEFICIARIES <Icon src={addCircle} className="w-4" />
            </Link>
            <span
              className="bg-white mx-3 p-3 rounded-full cursor-pointer"
              onClick={prevBeneficiary}
            >
              <Icon src={back} className="w-3 h-3" />
            </span>
            <span
              className="bg-white p-3 rounded-full cursor-pointer"
              onClick={nextBeneficiary}
            >
              <Icon src={back} className="w-3 h-3 rotate-180" />
            </span>
          </div>
        </div>

        {/* Slider for cards */}
        <div className="flex gap-5 py-6 overflow-x-auto">
          {data?.slice(0, 5).map((beneficiary, index) => (
            <BeneficiariesCard
              key={beneficiary._id}
              index={index + 1}
              name={`${beneficiary.firstName} ${beneficiary.lastName}`}
              email={beneficiary.email}
              phone={beneficiary.contactNumber}
              relation={beneficiary.relationShip}
              bg={false}
              onClick={() => {
                setActiveBeneficiary(beneficiary);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>

        {/* Full details section */}
        {activeBeneficiary && (
          <div className="bg-white my-7 p-4 rounded-2xl">
            <div className="flex justify-between py-3">
              <h2 className="text-3xl font-bold">
                {currentIndex + 1}. {`${activeBeneficiary.firstName} ${activeBeneficiary.lastName}`}
              </h2>
              <Link href="/" className="flex gap-2 py-3">
                Edit Details <Icon src={pencil} className="w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <p>
                <span className="font-bold">First Name:</span>{" "}
                {activeBeneficiary.firstName}
              </p>
              <p>
                <span className="font-bold">Last Name:</span> {activeBeneficiary.lastName}
              </p>
              <p>
                <span className="font-bold">Relation:</span> {activeBeneficiary.relationShip}
              </p>
              <p>
                <span className="font-bold">Phone:</span> {activeBeneficiary.contactNumber}
              </p>
              <p>
                <span className="font-bold">Phone#2:</span> {activeBeneficiary.whatsappNumber}
              </p>
              <p>
                <span className="font-bold">Whatsapp:</span> {activeBeneficiary.whatsappNumber}
              </p>
              <p>
                <span className="font-bold">Email:</span> {activeBeneficiary.email}
              </p>
              <p>
                <span className="font-bold">Another Email:</span>{" "}
                {activeBeneficiary.anotherEmail}
              </p>
              <p>
                <span className="font-bold">Address:</span> {activeBeneficiary.firstAddress}
              </p>
              <p>
                <span className="font-bold">Address#2:</span> {activeBeneficiary.secondAddress}
              </p>
              <p>
                <span className="font-bold">Assigned Assets:</span>{" "}
                {activeBeneficiary.assetsAssigned}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Beneficiary;
