"use client"

import React from 'react'

import { Checkbox, Button } from "@material-tailwind/react";
import CustomTextField from '@components/CustomTextField';
import googleIcon from "@images/svgs/google-icon.svg"
import facebookIcon from "@images/svgs/facebook-icon.svg"
import appleIcon from "@images/svgs/apple-icon.svg"
import Image from 'next/image';
import Link from 'next/link';


const Login = () => {
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


function LoginFormComponent() {
    return (
        <div className='d-flex-column-center gap-2 min-w-[500px]'>
            <h1 className='text-4xl mb-2 font-extrabold'>Welcome</h1>
            <h1 className='text-2xl mb-2 font-normal'>Please login to continue</h1>
            <div className='w-full mt-4'>
                <CustomTextField label='Enter You Email' placeholder='abc@gmail.com' classs='' />
                <CustomTextField label='Enter You Password' placeholder='******' type='password' />
            </div>

            <div className='d-flex-between-y-center w-full '>
                <Checkbox
                    className="rounded-none border-gray-900/20 bg-gray-900/10"
                    label={
                        <p className="flex font-medium text-black">Remember Me</p>
                    }
                />
                <div className='text-sm font-bold'>Forget Password?</div>
            </div>
            <Button className='w-full font-inter shadow-none hover:shadow-none text-black bg-yellow-800'>
                <Link href='/OTP' >LOGIN</Link>
            </Button>

            <div className='w-full d-flex-center my-4 mt-6'>
                <div className='flex-1 border-b h-2 border-gray-500'></div>
                <span className='text-gray-600 mx-4'>or Sign Up with</span>
                <div className='flex-1 border-b h-2 border-gray-500'></div>
            </div>

            <div className='flex gap-2 my-4'>
                <div className='cursor-pointer'>
                    <Image src={facebookIcon} alt='social-icon' className='h-full w-full' />
                </div>
                <div className='cursor-pointer'>
                    <Image src={appleIcon} alt='social-icon' className='h-full w-full' />
                </div>
                <div className='cursor-pointer'>
                    <Image src={googleIcon} alt='social-icon' className='h-full w-full' />
                </div>
            </div>

            <p>
                Don&#39;t have an account? <Link href='/SignUp' className='font-bold'>Sign Up</Link>
            </p>
        </div>
    )
}
export default Login