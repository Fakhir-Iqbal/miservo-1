"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Home from "./Home/page";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check token on page load
    const checkAuth = () => {
      const savedData = localStorage.getItem("loginData");
      if (savedData) {
        const { timestamp } = JSON.parse(savedData);
        const isExpired = Date.now() - timestamp > 24 * 60 * 60 * 1000; // 24 hours

        if (isExpired) {
          localStorage.removeItem("loginData");
          setLoading(false);
          return;
        }

        router.push("/Dashboard");
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen max-w-screen-2xl mx-auto">
      <Home />
    </main>
  );
}
