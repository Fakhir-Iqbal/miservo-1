"use client";
import React, { useState } from "react";
import CustomTextField from "@components/CustomTextField";
import Navbar from "@root/src/components/Navbar/page";
import Swal from "sweetalert2";
import axios from "axios";
import Link from "next/link";

const Beneficiary = () => {
  // Initialize state to store form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    whatsappNumber: "",
    relationShip: "",
    email: "",
    anotherEmail: "",
    firstAddress: "",
    secondAddress: "",
    assetsAssigned: "",
  });

  const [errors, setErrors] = useState({});

  const savedData =
    typeof window !== "undefined"
      ? window.localStorage.getItem("loginData")
      : false;
  let converSaveData = JSON.parse(savedData);
  let token = converSaveData?.data?.token;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validateForm = () => {
    let formErrors = {};
    for (let field in formData) {
      if (!formData[field]) {
        formErrors[field] = `${field
          .replace(/([A-Z])/g, " $1")
          .toUpperCase()} is required.`;
      }
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        `https://miservo-api.vercel.app/api/beneficiary/add`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Beneficiary Added",
          // text: "Your password has been reset successfully.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            setFormData({
              firstName: "",
              lastName: "",
              contactNumber: "",
              whatsappNumber: "",
              relationShip: "",
              email: "",
              anotherEmail: "",
              firstAddress: "",
              secondAddress: "",
              assetsAssigned: "",
            });
          }
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text:
          error.response?.data?.message ||
          "Something went wrong, please try again.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar />
      <section className="p-4">
        <h2 className="text-2xl font-extrabold mb-4">Add New Beneficiary</h2>
        <h2 className="text-2xl font-extrabold mb-4">#1</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-10 gap-6">
            <div className="col-span-2">
              <CustomTextField
                label="First Name"
                name="firstName"
                placeholder="Francisco"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
            </div>
            <div className="col-span-2">
              <CustomTextField
                label="Last Name"
                name="lastName"
                placeholder="Javier"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>
            <div className="col-span-2">
              <CustomTextField
                label="Phone#1"
                name="contactNumber"
                placeholder="+123-746-7890"
                value={formData.contactNumber}
                onChange={handleChange}
                error={errors.contactNumber}
              />
            </div>
            <div className="col-span-2">
              <CustomTextField
                label="WhatsApp"
                name="whatsappNumber"
                placeholder="+123-746-7890"
                value={formData.whatsappNumber}
                onChange={handleChange}
                error={errors.whatsappNumber}
              />
            </div>
            <div className="col-span-3">
              <CustomTextField
                label="Relationship"
                name="relationShip"
                placeholder="Father, Son, etc."
                value={formData.relationShip}
                onChange={handleChange}
                error={errors.relationShip}
              />
            </div>
            <div className="col-span-3">
              <CustomTextField
                label="Email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <div className="col-span-3">
              <CustomTextField
                label="Another Email"
                name="anotherEmail"
                placeholder="Another Email"
                value={formData.anotherEmail}
                onChange={handleChange}
                error={errors.anotherEmail}
              />
            </div>
            <div className="col-span-10">
              <CustomTextField
                label="Address#1"
                name="firstAddress"
                placeholder="Street, City, etc."
                value={formData.firstAddress}
                onChange={handleChange}
                error={errors.firstAddress}
              />
            </div>
            <div className="col-span-10">
              <CustomTextField
                label="Address#2"
                name="secondAddress"
                placeholder="Same as Above"
                value={formData.secondAddress}
                onChange={handleChange}
                error={errors.secondAddress}
              />
            </div>
            <div className="col-span-10">
              <CustomTextField
                label="Assigned Assets"
                name="assetsAssigned"
                placeholder="Asset Title"
                value={formData.assetsAssigned}
                onChange={handleChange}
                error={errors.assetsAssigned}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-yellow-700 px-5 py-2 text-black text-xs font-bold flex gap-2 justify-center items-center w-72 mt-5"
          >
            ADD BENEFICIARY
          </button>
        </form>
      </section>
    </>
  );
};

export default Beneficiary;
