"use client";

import React, { useState, useEffect } from "react";
import Icon from "@root/src/components/Icon";
import { addCircle, back, pencil } from "@root/icons";
import Link from "next/link";
import Navbar from "@root/src/components/Navbar/page";
import BeneficiariesCard from "@root/src/components/Cards/BeneficiariesCard";
import axios from "axios";

const Assests = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const savedData = localStorage.getItem("loginData");
  const token = savedData ? JSON.parse(savedData)?.data?.token : null;

  useEffect(() => {
    const fetchAssests = async () => {
      try {
        const response = await axios.get(
          "https://miservo-api.vercel.app/api/asset/get",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setData(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        setError("No Assets Found");
        setLoading(false);
      }
    };

    if (token) {
      fetchAssests();
    }
  }, [token]);

  const nextAssests = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevAssests = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const activeAssests = data[currentIndex];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading assets, please wait...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">{error}</p>
          <p className="text-gray-500">Please add assets to view them here or check your internet connection.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Assets</h1>
          <div className="flex items-center">
            <Link
              href="/AddAssets"
              className="flex gap-2 font-semibold underline decoration-yellow-800 text-sm decoration-2"
            >
              ADD ASSETS <Icon src={addCircle} className="w-4" />
            </Link>
            <span
              className="bg-white mx-3 p-3 rounded-full cursor-pointer"
              onClick={prevAssests}
            >
              <Icon src={back} className="w-3 h-3" />
            </span>
            <span
              className="bg-white p-3 rounded-full cursor-pointer"
              onClick={nextAssests}
            >
              <Icon src={back} className="w-3 h-3 rotate-180" />
            </span>
          </div>
        </div>

        {/* Slider for cards */}
        <div className="flex gap-5 py-6 overflow-x-auto">
          {data?.slice(0, 5).map((asset, index) => (
            <BeneficiariesCard
              key={asset._id}
              index={index + 1}
              name={asset.title}
              email={asset.email}
              phone={asset.contactNumber}
              location={asset.firstAddress}
              assests={asset}
              image={asset.assetPicture}
            />
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Asset Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-bold">Title:</span> {activeAssests?.title}</p>
              <p><span className="font-bold">Asset Number:</span> {activeAssests?.assetNumber}</p>
              <p><span className="font-bold">Documents/Video/Image:</span> {activeAssests.documents.length > 0 ? <img src={activeAssests.documents[0].url} className="w-20 h-24" /> : 'No document available'}</p>
            </div>

            <div>
              <p><span className="font-bold">Beneficiary Name:</span> {activeAssests.beneficiaryDetails?.firstName} {activeAssests.beneficiaryDetails?.lastName}</p>
              <p><span className="font-bold">Phone:</span> {activeAssests.beneficiaryDetails?.contactNumber}</p>
              <p><span className="font-bold">Email:</span> {activeAssests.beneficiaryDetails?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assests;
