"use client";

import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import Swal from 'sweetalert2'; // Import SweetAlert for success and error alerts

import Image from 'next/image';
import { Button } from "@material-tailwind/react";
import CustomTextField from '@components/CustomTextField';
import guardIcon from "@images/svgs/auth-guard.svg";

const ForgetPassword = () => {
    const [loginData, setLoginData] = useState({
        email: '',
    });

    const handleSubmit = async () => {
        if (!validateInputs()) {
            return;
        }

        try {
            const response = await axios.post('https://miservo-api.vercel.app//api/user/forget', loginData);

            if (response.status === 200) {
                Swal.fire({
                    title: "Password Reset Link Sent!",
                    text: "Please check your email to reset your password.",
                    icon: "success"
                });
                // window.location.href = '/Login';
            }
        } catch (error) {
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
        if (!loginData.email) {
            Swal.fire({
                icon: 'warning',
                title: 'Please enter an email address!',
            });
            return false;
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(loginData.email)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid email address!',
            });
            return false;
        }
        return true;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
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
                    <h1 className='text-4xl font-extrabold mb-4 text-center'>Reset Your Password</h1>
                    <h6 className='text-lg font-bold my-4 text-center'>Thanks for keeping your account secure.</h6>

                    <div className='w-full my-4 mb-8'>
                        <CustomTextField
                            label='Enter Your Email'
                            type='email'
                            placeholder='abc@gmail.com'
                            name='email'
                            value={loginData.email}
                            onChange={handleInputChange}
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

export default ForgetPassword;
