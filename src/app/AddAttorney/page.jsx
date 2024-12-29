"use client";
import React, { useState } from "react";
import CustomTextField from "@components/CustomTextField";
import Navbar from "@root/src/components/Navbar/page";
import Swal from 'sweetalert2';
import axios from 'axios';

const AddAttorney = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    companyPhoneNumber: "",
    whatsappNumber: "",
    companyName: "",
    email: "",
    officeEmail: "",
    companyWebsite: "",
    officeLocation: "",
    officeAddress: "",
  });

  const [errors, setErrors] = useState({});

  const savedData = localStorage.getItem('loginData');
  let converSaveData = JSON.parse(savedData);
  let token = converSaveData.data.token;

  // Handle changes in form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data before submitting
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    let formErrors = {};

    // Validate all required fields
    for (let field in formData) {
      if (!formData[field]) {
        formErrors[field] = `${field.replace(/([A-Z])/g, ' $1').toUpperCase()} is required.`;
      }
    }

    setErrors(formErrors);

    // If there are errors, don't submit the form
    if (Object.keys(formErrors).length > 0) return;
    try {
      const response = await axios.post(
        `https://miservo-api.vercel.app/api/attorney/add`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Attorney Added Successfully",
          // text: "Your password has been reset successfully.",
          icon: "success",
        })
          .then((result) => {
            if (result.isConfirmed) {
              setFormData({
                firstName: "",
                lastName: "",
                contactNumber: "",
                companyPhoneNumber: "",
                whatsappNumber: "",
                companyName: "",
                email: "",
                officeEmail: "",
                companyWebsite: "",
                officeLocation: "",
                officeAddress: "",
              });
            }
          });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || 'Something went wrong, please try again.',
        icon: 'error',
      });
    }
  };

  return (
    <>
      <Navbar />
      <section className="p-4">
        <h2 className="text-2xl font-extrabold mb-4">Add Attorney</h2>
        <h2 className="text-md font-extrabold mb-4">
          Write the attorney details carefully
        </h2>
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
                label="Phone"
                name="contactNumber"
                placeholder="+123-746-7890"
                value={formData.contactNumber}
                onChange={handleChange}
                error={errors.contactNumber}
              />
            </div>
            <div className="col-span-2">
              <CustomTextField
                label="Company Phone Number"
                name="companyPhoneNumber"
                placeholder="+123-746-7890"
                value={formData.companyPhoneNumber}
                onChange={handleChange}
                error={errors.companyPhoneNumber}
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
                label="Company Name"
                name="companyName"
                placeholder="SilverStone"
                value={formData.companyName}
                onChange={handleChange}
                error={errors.companyName}
              />
            </div>
            <div className="col-span-3">
              <CustomTextField
                label="Email"
                name="email"
                placeholder="franciscojavier@gmail.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <div className="col-span-3">
              <CustomTextField
                label="Office Email"
                name="officeEmail"
                placeholder="-"
                value={formData.officeEmail}
                onChange={handleChange}
                error={errors.officeEmail}
              />
            </div>
            <div className="col-span-3">
              <CustomTextField
                label="Company Website"
                name="companyWebsite"
                placeholder="SilverStone"
                value={formData.companyWebsite}
                onChange={handleChange}
                error={errors.companyWebsite}
              />
            </div>
            <div className="col-span-10">
              <CustomTextField
                label="Office Location"
                name="officeLocation"
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                value={formData.officeLocation}
                onChange={handleChange}
                error={errors.officeLocation}
              />
            </div>
            <div className="col-span-10">
              <CustomTextField
                label="Office Address"
                name="officeAddress"
                placeholder="Same As Above"
                value={formData.officeAddress}
                onChange={handleChange}
                error={errors.officeAddress}
              />
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-700 px-5 py-2 text-black text-xs font-bold flex gap-2 justify-center items-center w-72 mt-5"
          >
            ADD ATTORNEY
          </button>
        </form>
      </section>
    </>
  );
};

export default AddAttorney;
