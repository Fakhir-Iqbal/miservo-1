// "use client";

// import React from "react";
// import Icon from "@root/src/components/Icon";
// import { addCircle, back, pencil } from "@root/icons";
// import Link from "next/link";
// import Navbar from "@root/src/components/Navbar/page";
// import Attachments from "@root/src/components/AddAttachments/page";

// const beneficiaries = [
//   {
//     index: 1,
//     name: "John Doe",
//   },
//   {
//     index: 2,
//     name: "Jane Smith",
//   },
//   {
//     index: 3,
//     name: "Alice Johnson",
//   },
//   {
//     index: 2,
//     name: "Jane Smith",
//   },
// ];
// const beneficiaryDetails = [
//   {
//     label: "Title",
//     value: "Personal Property",
//   },
//   {
//     label: "Beneficiary",
//     value: "Doe",
//   },
//   {
//     label: "Description",
//     value:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with",
//   },
// ];
// const personalDetails = [
//   {
//     label: "First Name",
//     value: "John",
//   },
//   {
//     label: "Last Name",
//     value: "Doe",
//   },
//   {
//     label: "Relation",
//     value: "Son",
//   },
//   {
//     label: "Phone",
//     value: "+123-456-789",
//   },
//   {
//     label: "Phone#2",
//     value: "+123-456-789",
//   },
//   {
//     label: "Whatsapp",
//     value: "+123-456-789",
//   },
//   {
//     label: "Email",
//     value: "franciscojavier@gmail.com",
//   },
//   {
//     label: "Another Email",
//     value: "-",
//   },
//   {
//     label: "Address",
//     value:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     label: "Address#2",
//     value: "Same as above",
//   },
//   {
//     label: "Assigned Assets",
//     value: "John Xavier",
//   },
// ];

// const Assests = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="p-6">
//         <div className="flex justify-between">
//           <h1 className="text-3xl font-bold">Assets</h1>
//           <div className="flex items-center">
//             <Link
//               href="/AddAssets"
//               className="flex gap-2 font-semibold underline decoration-yellow-800 text-sm decoration-2"
//             >
//               {" "}
//               ADD ASSETS <Icon src={addCircle} className="w-4" />
//             </Link>
//             <span className="bg-white mx-3 p-3 rounded-full">
//               {" "}
//               <Icon src={back} className="w-3 h-3" />
//             </span>
//             <span className="bg-white p-3 rounded-full">
//               {" "}
//               <Icon src={back} className="w-3 h-3 rotate-180" />
//             </span>
//           </div>
//         </div>
//         <div className="flex gap-5 py-6">
//           {beneficiaries.map((data) => (
//             <div className={`p-4 py-7 rounded-xl w-full bg-[#FFF9EB]`}>
//               <h1 className="font-extrabold text-lg mb-2">
//                 #{data.index ?? "1"}
//               </h1>
//               <div className="grid gap-2">
//                 <div className="text-lg font-bold ">
//                   {data.name ?? "Francisco Javier"}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white my-7 p-4 rounded-2xl">
//           <div className="flex justify-between py-3">
//             <h2 className="text-3xl font-bold text-blue-900 ">
//               Personal Details
//             </h2>
//             <Link href="/" className="flex gap-2 py-3">
//               Edit Details <Icon src={pencil} className="w-4" />
//             </Link>
//           </div>

//           <div className="">
//             {beneficiaryDetails.map((detail, index) => (
//               <p key={index} className="pb-5">
//                 <span className="font-bold">{detail.label}:</span>{" "}
//                 {detail.value}
//               </p>
//             ))}
//           </div>

//           <div className="py-7">
//             <p className="font-bold mb-3">Attach Document/Images/Videos:</p>
//             <Attachments />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
//             {personalDetails.map((detail, index) => (
//               <p key={index}>
//                 <span className="font-bold">{detail.label}:</span>{" "}
//                 {detail.value}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Assests;



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
  const [activeAssests, setActiveAssests] = useState(null); // Will hold the currently selected Assests
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const savedData = localStorage.getItem("loginData");
  let converSaveData = JSON.parse(savedData);
  let token = converSaveData?.data?.token;

  useEffect(() => {
    const fetchAssests = async () => {
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
          setActiveAssests(response.data.data[0]);
          setLoading(false);
        }
      } catch (error) {
        setError("No Assests Found");
        setLoading(false);


      }
    };

    fetchAssests();
  }, [token]);

  const nextAssests = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    setActiveAssests(data[nextIndex]);
  };

  const prevAssests = () => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(prevIndex);
    setActiveAssests(data[prevIndex]);
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
          <p className="text-gray-500">Please add Assests to view them here.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Assests</h1>
          <div className="flex items-center">
            <Link
              href="/AddAssets"
              className="flex gap-2 font-semibold underline decoration-yellow-800 text-sm decoration-2"
            >
              ADD ASSESTS <Icon src={addCircle} className="w-4" />
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
          {data?.slice(0, 5).map((Assests, index) => (
            <BeneficiariesCard
              key={Assests._id}
              index={index + 1}
              name={`${Assests.firstName} ${Assests.lastName}`}
              email={Assests.email}
              phone={Assests.contactNumber}
              relation={Assests.relationShip}
              bg={false}
              onClick={() => {
                setActiveAssests(Assests);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>

        {/* Full details section */}
        {activeAssests && (
          <div className="bg-white my-7 p-4 rounded-2xl">
            <div className="flex justify-between py-3">
              <h2 className="text-3xl font-bold">
                {currentIndex + 1}. {`${activeAssests.firstName} ${activeAssests.lastName}`}
              </h2>
              <Link href="/" className="flex gap-2 py-3">
                Edit Details <Icon src={pencil} className="w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


              <p className="col-span-3" >
                <span className="font-bold">Title:</span> {activeAssests.lastName}
              </p>
              <p className="col-span-3" >
                <span className="font-bold">Beneficiary:</span> {activeAssests.lastName}
              </p>
              <p className="col-span-3" >
                <span className="font-bold">Description:</span> {activeAssests.lastName}
              </p>
              <p className="col-span-3" >
                <span className="font-bold">Document/Video/Image:</span> <br />
                <label className="border-2 border-dashed border-gray-400 w-20 h-24 flex items-center justify-center cursor-pointer">
                  Img
                </label>
              </p>











              <p>
                <span className="font-bold">First Name:</span>{" "}
                {activeAssests.firstName}
              </p>
              <p>
                <span className="font-bold">Last Name:</span> {activeAssests.lastName}
              </p>
              <p>
                <span className="font-bold">Relation:</span> {activeAssests.relationShip}
              </p>
              <p>
                <span className="font-bold">Phone:</span> {activeAssests.contactNumber}
              </p>
              <p>
                <span className="font-bold">Phone#2:</span> {activeAssests.whatsappNumber}
              </p>
              <p>
                <span className="font-bold">Whatsapp:</span> {activeAssests.whatsappNumber}
              </p>
              <p>
                <span className="font-bold">Email:</span> {activeAssests.email}
              </p>
              <p>
                <span className="font-bold">Another Email:</span>{" "}
                {activeAssests.anotherEmail}
              </p>
              <p>
                <span className="font-bold">Address:</span> {activeAssests.firstAddress}
              </p>
              <p>
                <span className="font-bold">Address#2:</span> {activeAssests.secondAddress}
              </p>
              <p>
                <span className="font-bold">Assigned Assets:</span>{" "}
                {activeAssests.assetsAssigned}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Assests;

