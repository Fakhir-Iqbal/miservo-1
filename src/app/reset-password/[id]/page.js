"use client";

import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import Swal from 'sweetalert2'; // Import SweetAlert for success and error alerts
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@material-tailwind/react";
import CustomTextField from '@components/CustomTextField';
import guardIcon from "@images/svgs/auth-guard.svg";

const ResetPassword = () => {

  const { id } = useParams()
  const [newPassword, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/api/user/reset-password/${id}`, newPassword);

      if (response.status === 200) {
        Swal.fire({
          title: "Password Successfully Changed",
          icon: "success"
        });
        // window.location.href = '/Login';
      }
    } catch (error) {
      console.error("Error during password reset", error);
      if (error.response && error.response.status === 404) {
        Swal.fire({
          icon: "error",
          title: "User not found",
          text: "No account exists with this email address.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "There was an error processing your request. Please try again later.",
        });
      }
    }
  };

  const validateInputs = () => {
    if (!newPassword) {
      Swal.fire({
        icon: 'warning',
        title: 'Please enter a Password!',
      });
      return false;
    }

    return true;
  };

  return (
    <section className='grid grid-cols-2 min-h-[100vh] py-[15vh] bg-custom-image'>
      <div className='border-r-2 border-purple-1000 d-flex-center'>
        <h1 className='text-5xl text-purple-1000 font-extrabold uppercase'>Miservo</h1>
      </div>
      <div className='d-flex-column-center'>
        <div className='d-flex-column-center gap-2 min-w-[500px]'>
          <div className='cursor-pointer h-20 mb-8'>
            <Image src={guardIcon} alt='social-icon' className='h-full w-full' />
          </div>
          <h1 className='text-4xl font-extrabold mb-4 text-center'>Enter Your New Password</h1>
          <h6 className='text-lg font-bold my-4 text-center'>Thanks for keeping your account secure.</h6>

          <div className='w-full my-4 mb-8'>
            <CustomTextField
              label='Enter Your New Password'
              type='password'
              placeholder='*******'
              name='password'
              value={newPassword}
              onChange={(e) => setPassword(e.target.value)}
              classs='rounded-md'
            />
          </div>

          <Button onClick={handleSubmit} className='w-full font-inter shadow-none hover:shadow-none text-black bg-yellow-800'>
            Reset Password
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
