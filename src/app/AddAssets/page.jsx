"use client";

import React, { useState, useEffect } from "react";
import CustomTextField from "@root/src/components/CustomTextField";
import Navbar from "@root/src/components/Navbar/page";
import Link from "next/link";
import Attachments from "@root/src/components/AddAttachments/page";
import Swal from "sweetalert2";
import axios from "axios";

// const beneficiaries = [
//   { id: 1, name: "John Doe" },
//   { id: 2, name: "Jane Smith" },
//   { id: 3, name: "Alice Johnson" },
// ];

const AddAssets = () => {
  const savedData =
    typeof window !== "undefined"
      ? window.localStorage.getItem("loginData")
      : false;
  let converSaveData = JSON.parse(savedData);
  let token = converSaveData?.data?.token;

  const [beneficiaries, setBeneficiaries] = useState([]);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    beneficiary: "",
    description: "",
    documents: "",
    attorney: null,
    courtInformation: "",
  });

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
          setBeneficiaries(response.data.data);
        }
      } catch (error) {
        //  console.log(error, "error")
      }
    };

    fetchBeneficiaries();
  }, [token]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event) => {
    setFormData({
      ...formData,
      attorney: event.target.value === "yes" ? true : false,
    });
  };

  const handleAttachmentChange = (documents) => {
    setFormData({
      ...formData,
      documents: documents.map((doc) => doc.type),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset any previous errors
    let formErrors = {};

    // Validate required fields (excluding documents and attorney)
    for (let field in formData) {
      if (field !== "documents" && field !== "attorney" && !formData[field]) {
        formErrors[field] = `${field
          .replace(/([A-Z])/g, " $1")
          .toUpperCase()} is required.`;
      }
    }
    setErrors(formErrors);

    // If there are any validation errors, don't submit the form
    if (Object.keys(formErrors).length > 0) {
      Swal.fire({
        title: "Missing Required Fields",
        text: "Please fill in all the required fields before submitting.",
        icon: "warning",
      });
      return;
    }

    // If validation is successful, make the API call
    try {
      const response = await axios.post(
        `https://miservo-api.vercel.app/api/asset/add`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // If API call is successful, show a success message
      if (response.status === 200) {
        Swal.fire({
          title: "Assets Added Successfully",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            // Reset the form fields
            setFormData({
              title: "",
              beneficiary: "",
              description: "",
              documents: "",
              attorney: null,
              courtInformation: "",
            });
          }
        });
      }
    } catch (error) {
      // If there's an error in the API call, show an error message
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
      <section className="p-4 px-10">
        <h2 className="text-2xl font-extrabold mb-4">Add New Assets</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <CustomTextField
                label="Add Title:"
                name="title"
                placeholder="Add Title Here"
                value={formData.title}
                onChange={handleChange}
                error={errors.title}
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="beneficiary" className="block mb-1 font-bold">
                Select Beneficiary:
              </label>
              <select
                id="beneficiary"
                name="beneficiary"
                value={formData.beneficiary}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              >
                <option value="" disabled>
                  Select a beneficiary
                </option>
                {beneficiaries.map((beneficiary) => (
                  <option key={beneficiary._id} value={beneficiary._id}>
                    {beneficiary.firstName}
                  </option>
                ))}
              </select>
              {errors.beneficiary && (
                <div className="text-red-600">{errors.beneficiary}</div>
              )}
            </div>
            <div className="col-span-12">
              <p className="font-bold mb-1">Description:</p>
              <textarea
                name="description"
                placeholder="Add Description Here"
                value={formData.description}
                onChange={handleChange}
                className="h-36 w-full p-3 border-none resize-none focus:outline-none"
              />
              {errors.description && (
                <div className="text-red-600">{errors.description}</div>
              )}
            </div>

            <div className="col-span-12">
              <p className="font-bold mb-3">Attach Document/Images/Videos:</p>
              <Attachments onChange={handleAttachmentChange} />
              {errors.documents && (
                <div className="text-red-600">{errors.documents}</div>
              )}
            </div>
            <div className="col-span-6 flex items-center gap-5 py-3">
              <span className="font-bold">Attorney Against this Asset?</span>
              <div className="flex items-center mt-2">
                <label className="flex items-center mr-4">
                  <input
                    type="radio"
                    name="attorney"
                    value="yes"
                    checked={formData.attorney === true}
                    onChange={handleSelectChange}
                    className="peer hidden"
                  />
                  <span className="w-5 h-5 border-2 border-yellow-700 bg-white rounded-full flex items-center justify-center mr-2 peer-checked:bg-yellow-700">
                    {formData.attorney === true && (
                      <span className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </span>
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attorney"
                    value="no"
                    checked={formData.attorney === false}
                    onChange={handleSelectChange}
                    className="peer hidden"
                  />
                  <span className="w-5 h-5 border-2 border-yellow-700 bg-yellow-700 rounded-full flex items-center justify-center mr-2 peer-checked:bg-yellow-700">
                    {formData.attorney === false && (
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
                the attorney is unreachable):
              </p>
              <textarea
                name="courtInformation"
                placeholder="Write The Information Here"
                value={formData.courtInformation}
                onChange={handleChange}
                className="h-36 w-full p-3 border-none resize-none focus:outline-none"
              />
              {errors.courtInformation && (
                <div className="text-red-600">{errors.courtInformation}</div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-yellow-700 px-5 py-2 text-black text-xs font-bold flex gap-2 justify-center items-center w-72 mt-5"
          >
            ADD RECORD
          </button>
        </form>
      </section>
    </>
  );
};

export default AddAssets;
