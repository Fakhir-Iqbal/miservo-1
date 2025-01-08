"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@root/src/components/Loader";

const LogOut = () => {
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(false);

  const handleLogout = () => {
    setShowLoader(true);

    setTimeout(() => {
      localStorage.removeItem("loginData");
      router.push("/");
    }, 1000); // Optional timeout for better UX with loader
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!showLoader ? (
        <>
          <p className="text-xl mb-4">Are you sure you want to log out?</p>
          <p>
            Click here to <span className="text-red-500 cursor-pointer" onClick={handleLogout} >log out</span>
          </p>
        </>
      ) : (
        <>
          <p className="text-xl mb-4">Logging out...</p>
          <Loader />
        </>
      )}
    </div>
  );
};

export default LogOut;
