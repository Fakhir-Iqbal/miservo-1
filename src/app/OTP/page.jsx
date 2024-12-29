"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";
import guardIcon from "@images/svgs/auth-guard.svg"

const Otp = () => {
    return (
        <section className='grid grid-cols-2 min-h-[100vh] py-[15vh] bg-custom-image'>
            <div className='border-r-2 border-purple-1000 d-flex-center'>
                <h1 className='text-5xl text-purple-1000 font-extrabold uppercase'>Miservo</h1>
            </div>
            <div className='d-flex-column-center'>
                <LoginFormComponent />
            </div>
        </section>
    )
}

function LoginFormComponent({ length = 6, onSubmit }) {
    const [otp, setOtp] = useState(Array(length).fill(''));

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input
            if (value && index < length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }

        // Handle backspace
        if (value === '' && index > 0) {
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const handleSubmit = () => {
        if (otp.join('').length === length) {
            onSubmit(otp.join(''));
        }
    };

    return (
        <div className='d-flex-column-center gap-2 min-w-[500px]'>
            <div className='cursor-pointer h-20 mb-8'>
                    <Image src={guardIcon} alt='social-icon' className='h-full w-full' />
                </div>
            <h1 className='text-4xl font-extrabold mb-4 text-center'>Authenticate your account</h1>
            <h6 className='text-lg font-bold my-4 text-center'>Thanks for keeping your account secure.</h6>
            <p className='text-md font-bold my-4 max-w-sm text-center'>Please confirm your account by entering the authentication code sent to you</p>
            
            <div className='flex gap-2 my-4 mb-8'>
                {otp.map((value, index) => (
                    <input
                        key={index}
                        id={`otp-input-${index}`}
                        type='text'
                        maxLength='1'
                        value={value}
                        onChange={(e) => handleChange(e, index)}
                        className='w-12 h-12 outline-none border-b-2 bg-transparent text-center text-xl border-gray-800'
                    />
                ))}
            </div>

            <Button className='w-full font-inter shadow-none hover:shadow-none text-black bg-yellow-800'>
                <Link href='/Dashboard' > LOGIN SECURELY </Link>    
            </Button>
        </div>
    )
}
export default Otp