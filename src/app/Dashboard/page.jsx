"use client";

import React from "react";
import noteWritingAvatar from "@images/write-note.png";
import bar from "@images/bar.png";
import Image from "next/image";
// import Chart from "react-apexcharts";
import CustomButton from "@components/CustomButton";
import BeneficiariesCard from "@components/Cards/BeneficiariesCard";
// import { Card, Typography } from "@material-tailwind/react";
import Navbar from "@root/src/components/Navbar/page";

function CustomChart() {
  const chartConfig = {
    type: "pie",
    width: 180,
    height: 180,
    series: [44, 55],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#D338EE", "#3280F4", "#00897b", "#1e88e5", "#d81b60"],
      legend: {
        show: false,
      },
    },
  };
  return (
    <div className="relative d-flex-center h-36 w-36">
      <div
        className="absolute inset-0 border-4 border-orange-900 rounded-full"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 80%)" }}
      ></div>
      <div className="h-20 w-20 absolute rounded-full z-10 text-xs d-flex-center border-2 border-white bg-yellow-800 ">
        Yearly
      </div>
      {/* <Chart {...chartConfig} /> */}
    </div>
  );
}

const TABLE_HEAD = ["S.No", "Title", "Description", "Beneficiary"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export function AssetsTable() {
  return (
    <div className="h-full w-full max-h-72 overflow-y-scroll shadow-none">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <p className="text-sm text-blue-gray-500 font-normal">{head}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <p className="text-sm text-blue-gray-500 font-normal">
                    {index}
                  </p>
                </td>
                <td className={classes}>
                  <p className="text-sm text-blue-gray-500 font-normal">
                    {name}
                  </p>
                </td>
                <td className={classes}>
                  <p className="text-sm text-blue-gray-500 font-normal">
                    {job}
                  </p>
                </td>
                <td className={classes}>
                  <p className="text-sm text-blue-gray-500 font-normal">
                    {date}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const ViewAllLayout = ({ children, heading }) => {
  return (
    <div className="h-full bg-white p-4 rounded-xl">
      <div className="d-flex-between-y-center mb-2">
        <h1 className="text-xl font-extrabold capitalize">{heading}</h1>
        <CustomButton title={"view all"} />
      </div>
      {children}
    </div>
  );
};

const Dashboard = () => {

  const savedData = localStorage.getItem("loginData");
  const converSaveData = JSON.parse(savedData);
  const token = converSaveData?.data?.token;
  const userFirstName = converSaveData?.data?.firstName;
  const userLastName = converSaveData?.data?.lastName;

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-12 gap-4 max-w-screen-xl mx-auto my-12">
        <div className="col-span-12 grid grid-cols-7 px-8 py-6 bg-gradient-to-r from-gray-100/100 to-purple-500/20 rounded-xl">
          <div className="col-span-2 d-flex-column-item-center">
            <h3 className="text-sm font-bold capitalize">welcome back</h3>
            <h1 className="text-xl font-bold uppercase">{userFirstName} {userLastName}</h1>
          </div>
          <div className="col-span-3 d-flex-column-item-center">
            <p className="text-xs">
              We are not liable for any decisions made based on outdated
              information regarding Attorney details, Beneficiaries, or Assets.
              Please ensure all information is reviewed and updated regularly to
              reflect the most current and accurate details
            </p>
          </div>
          <div className="col-span-2 md:relative">
            <Image
              className={"md:absolute -top-8 right-0"}
              alt={"note writing png"}
              src={noteWritingAvatar}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="col-span-4">
          <div className="rounded-xl p-4 h-full shadow-md grid grid-cols-12 gap-4 bg-yellow-800">
            <h2 className="col-span-12 mb-4 text-lg font-bold">Subscription</h2>
            <div className="col-span-6 d-flex-column-item-end">
              <p className="text-xs mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>

              <button className="py-2 px-4 rounded w-max-content text-xs  bg-gray-200 hover:bg-gray-300 ">
                Renew
              </button>
            </div>

            <div className="col-span-6 h-44 relative">
              <div className="text-[8px] absolute -top-2">12 months</div>
              <Image
                className={"ms-12 p-0"}
                alt={"bar png"}
                src={bar}
                width={20}
                height={30}
              />
              <CustomChart />
            </div>
          </div>
        </div>

        <div className="h-full col-span-8 bg-white p-4 rounded-xl">
          <ViewAllLayout heading={"beneficiaries"}>
            <div className="h-full grid grid-cols-2 gap-4">
              <div>
                <BeneficiariesCard
                  index={2}
                  name="John Doe"
                  email="johndoe@gmail.com"
                  phone="+123-456-7890"
                  relation="Brother"
                  bg={true}
                />
              </div>
              <div>
                <BeneficiariesCard
                  index={2}
                  name="John Doe"
                  email="johndoe@gmail.com"
                  phone="+123-456-7890"
                  relation="Brother"
                  bg={true}
                />
              </div>
            </div>
          </ViewAllLayout>
        </div>
        <div className="col-span-8">
          <ViewAllLayout heading={"assets"}>
            <AssetsTable />
          </ViewAllLayout>
        </div>
        <div className="col-span-4">
          <ViewAllLayout heading={"attorney"}>
            <div className={`p-4 h-[80%] rounded-xl w-full bg-red-200/10`}>
              <h1 className="font-extrabold text-lg mb-2">#1</h1>
              <div className="grid gap-2">
                <div className="text-sm">
                  <span className="font-bold">Name: </span>
                  {"Francisco Javier"}
                </div>
                <div className="text-sm">
                  <span className="font-bold">email: </span>
                  {"franciscojavier@gmail.com"}
                </div>
                <div className="text-sm">
                  <span className="font-bold">phone: </span>
                  {"+987-654-3210"}
                </div>
                <div className="text-sm">
                  <span className="font-bold">Relationship: </span>
                  {"Friend"}
                </div>
                <div className="text-sm">
                  <span className="font-bold">Relationship: </span>
                  {"Friend"}
                </div>
                <div className="text-sm">
                  <span className="font-bold">Relationship: </span>
                  {"Friend"}
                </div>
                <div className="text-sm">
                  <span className="font-bold">Relationship: </span>
                  {"Friend"}
                </div>
              </div>
            </div>
          </ViewAllLayout>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
