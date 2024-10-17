"use client";
import React, { useState } from "react";
import {
  Button,
  Collapse,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Icon from "@root/src/components/Icon";
import { call, customerservice, mail, plus } from "@root/icons";
import Link from "next/link";
import Navbar from "@root/src/components/Navbar/page";

const HelpSupport = () => {
  const [open, setOpen] = useState(null);

  // Sample data array for FAQ with Lorem Ipsum
  const faqData = [
    {
      heading: "What is your return policy?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      heading: "How do I track my order?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      heading: "What payment methods are accepted?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      heading: "How can I change my password?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      heading: "What should I do if I encounter an error?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold mt-6 text-center">Help & Support</h1>
      <div className="flex justify-between bg-white p-4 m-7 rounded-xl">
        {/* FAQ Section */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-center">FAQ</h2>
          <div className="p-8">
            {faqData.map((item, index) => (
              <div key={index} className="mt-5">
                <Button
                  onClick={() => toggleOpen(index)}
                  className={`flex justify-between items-center gap-4 w-full ${
                    open === index ? "bg-blue-900 text-white" : "bg-white text-black border border-blue-900"
                  } capitalize rounded-md`}
                >
                  <span className="text-start">{item.heading}</span>
                  <Icon
                    src={plus}
                    className={`w-2.5 transition-transform ${
                      open === index ? "rotate-45" : ""
                    }`}
                  />
                </Button>
                <Collapse open={open === index}>
                  <Card className={`mx-auto rounded-none ${open === index ? "bg-blue-900 text-white" : "bg-white border border-blue-900"}`}>
                    <CardBody>
                      <Typography>{item.desc}</Typography>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-px bg-gray-300 mx-4"></div>

        {/* Support Section */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <div className="flex flex-col space-y-4 p-12">
            <Link
              href="#"
              className="w-full bg-white border-black border-[1px] text-black p-2 flex items-center gap-3 rounded-md"
            >
              <Icon src={customerservice} className="w-5" />
              Customer Service
            </Link>
            <Link
              href="#"
              className="w-full bg-white border-black border-[1px] text-black p-2 flex items-center gap-3 rounded-md"
            >
              <Icon src={mail} className="w-5" />
              support@miservo.com
            </Link>
            <Link
              href="#"
              className="w-full bg-white border-black border-[1px] text-black p-2 flex items-center gap-3 rounded-md"
            >
              <Icon src={call} className="w-5" />
              +123-456-7890
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpSupport;
