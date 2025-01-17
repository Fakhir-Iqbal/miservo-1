"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import CustomTextField from "@components/CustomTextField";
import googleIcon from "@images/svgs/google-icon.svg";
import facebookIcon from "@images/svgs/facebook-icon.svg";
import appleIcon from "@images/svgs/apple-icon.svg";
import { Checkbox, Button } from "@material-tailwind/react";
import axios from "axios";
import Loader from "@root/src/components/Loader";

const Login = () => {
  return (
    <section className="grid grid-cols-2 min-h-[100vh] py-[8vh] bg-custom-image">
      <div className="border-r-2 border-purple-1000 flex justify-center items-center">
        <h1 className="text-5xl text-purple-1000 font-extrabold uppercase">
          Miservo
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <LoginFormComponent />
      </div>
    </section>
  );
};

const LoginFormComponent = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); 

  //Save Data To LocalStorage
  const saveToLocalStorage = (key, data) => {
    const extendedData = { ...data, timestamp: Date.now() }; // Add timestamp
    typeof window !== "undefined"
      ? window.localStorage.setItem(key, JSON.stringify(extendedData))
      : false;
  };

  //Form Validation
  const validateInputs = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!loginData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(loginData.email)) {
      newErrors.email = "Please Input Valid Email";
      valid = false;
    }

    // Password validation
    if (!loginData.password || loginData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLoginData = async () => {
    if (!validateInputs()) {
      return; // Prevent the login attempt if validation fails
    }

    setLoading(true); 
    try {
      const response = await axios.post(
        "https://miservo-api.vercel.app/api/user/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        saveToLocalStorage("loginData", response.data);
        Swal.fire({
          title: "Successfully Logged In!",
          text: "Thank You",
          icon: "success",
        });
        window.location.href = "/Dashboard";
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid User or Password!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 min-w-[500px]">
      <h1 className="text-4xl font-extrabold">Welcome</h1>
      <h2 className="text-xl mb-2 font-normal">Please login to continue</h2>

      <div className="w-full mt-4">
        <CustomTextField
          label="Enter Your Email"
          type="email"
          placeholder="abc@gmail.com"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          value={loginData.email}
          error={errors.email}
        />
        <br />
        <CustomTextField
          label="Enter Your Password"
          placeholder="******"
          type="password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          value={loginData.password}
          error={errors.password}
        />
      </div>

      <div className="flex justify-between items-center w-full">
        <Checkbox
          className="rounded-none border-gray-900/20 bg-gray-900/10"
          label={<p className="flex font-medium text-black">Remember Me</p>}
        />
        <Link
          href="/ForgetPassword"
          className="text-sm font-bold cursor-pointer"
        >
          Forget Password?
        </Link>
      </div>

      {loading ? <Loader/> : <Button
        className="w-full font-inter shadow-none hover:shadow-none text-black bg-yellow-800"
        onClick={handleLoginData}
        disabled={loading} // Disable button while loading
      >
        LOGIN
      </Button> }

      <div className="w-full flex items-center mt-4">
        <div className="flex-1 border-b h-2 border-gray-500"></div>
        <span className="text-gray-600 mx-4">or Sign Up with</span>
        <div className="flex-1 border-b h-2 border-gray-500"></div>
      </div>

      <div className="flex my-2">
        <div className="cursor-pointer">
          <Image src={facebookIcon} alt="Facebook" className="h-12" />
        </div>
        <div className="cursor-pointer">
          <Image src={appleIcon} alt="Apple" className="h-12" />
        </div>
        <div className="cursor-pointer">
          <Image src={googleIcon} alt="Google" className="h-12" />
        </div>
      </div>

      <p>
        {" "}
        Don&#39;t have an account?{" "}
        <Link href="/SignUp" className="font-bold">
          Sign Up
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
