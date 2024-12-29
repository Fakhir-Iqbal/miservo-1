"use client";

import React, { useState, useEffect } from "react";
import Icon from "@root/src/components/Icon";
import { addCircle, back, pencil } from "@root/icons";
import Link from "next/link";
import Navbar from "@root/src/components/Navbar/page";
import BeneficiariesCard from "@root/src/components/Cards/BeneficiariesCard";
import axios from "axios";

const Attorney = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [activeAttorney, setActiveAttorney] = useState(null); // Will hold the currently selected Attorney
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const savedData = localStorage.getItem("loginData");
  let converSaveData = JSON.parse(savedData);
  let token = converSaveData?.data?.token;

  useEffect(() => {
    const fetchAttorney = async () => {
      try {
        const response = await axios.get(
          "https://miservo-api.vercel.app/api/Attorney/get",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setData(response.data.data);
          setActiveAttorney(response.data.data[0]);
          setLoading(false);
        }
      } catch (error) {
        setError("No Attorney Found");
        setLoading(false);


      }
    };

    fetchAttorney();
  }, [token]);

  const nextAttorney = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    setActiveAttorney(data[nextIndex]);
  };

  const prevAttorney = () => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(prevIndex);
    setActiveAttorney(data[prevIndex]);
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
          <p className="text-gray-500">Please add Attorney to view them here.</p>
        </div>
      </div>
    );
  }

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
              ADD ATTORNEY <Icon src={addCircle} className="w-4" />
            </Link>
            <span
              className="bg-white mx-3 p-3 rounded-full cursor-pointer"
              onClick={prevAttorney}
            >
              <Icon src={back} className="w-3 h-3" />
            </span>
            <span
              className="bg-white p-3 rounded-full cursor-pointer"
              onClick={nextAttorney}
            >
              <Icon src={back} className="w-3 h-3 rotate-180" />
            </span>
          </div>
        </div>

        {/* Slider for cards */}
        <div className="flex gap-5 py-6 overflow-x-auto">
          {data?.slice(0, 5).map((Attorney, index) => (
            <BeneficiariesCard
              key={Attorney._id}
              index={index + 1}
              name={`${Attorney.firstName} ${Attorney.lastName}`}
              email={Attorney.email}
              phone={Attorney.contactNumber}
              relation={Attorney.relationShip}
              bg={false}
              onClick={() => {
                setActiveAttorney(Attorney);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>

        {/* Full details section */}
        {activeAttorney && (
          <div className="bg-white my-7 p-4 rounded-2xl">
            <div className="flex justify-between py-3">
              <h2 className="text-3xl font-bold">
                {currentIndex + 1}. {`${activeAttorney.firstName} ${activeAttorney.lastName}`}
              </h2>
              <Link href="/" className="flex gap-2 py-3">
                Edit Details <Icon src={pencil} className="w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <p>
                <span className="font-bold">First Name:</span>{" "}
                {activeAttorney.firstName}
              </p>
              <p>
                <span className="font-bold">Last Name:</span> {activeAttorney.lastName}
              </p>
              <p>
                <span className="font-bold">Phone:</span> {activeAttorney.contactNumber}
              </p>
              <p>
                <span className="font-bold">company cell number:</span> {activeAttorney.companyPhoneNumber}
              </p>
              <p>
                <span className="font-bold">WhatsApp:</span> {activeAttorney.whatsappNumber}
              </p>
              <p>
                <span className="font-bold">company name:</span> {activeAttorney.companyName}
              </p>
              <p>
                <span className="font-bold">Email:</span> {activeAttorney.email}
              </p>
              <p>
                <span className="font-bold">Office Email:</span>{" "}
                {activeAttorney.officeEmail}
              </p>
              <p>
                <span className="font-bold">company website:</span> {activeAttorney.companyWebsite}
              </p>
              <p>
                <span className="font-bold">office Address(location):</span> {activeAttorney.officeAddress}
              </p>
              <p>
                <span className="font-bold">other address:</span>{" "}
                {activeAttorney.officeLocation}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Attorney;
