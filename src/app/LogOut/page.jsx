"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@root/src/components/Loader";

const LogOut = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("loginData");

    router.push("/");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl">Logging out...</p> <br />
      <Loader/>
    </div>
  );
};

export default LogOut;
