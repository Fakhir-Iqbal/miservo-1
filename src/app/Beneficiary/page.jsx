
"use client"
import React from 'react'
import CustomTextField from '@components/CustomTextField';
import CustomDropdown from '@components/CustomDropdown';
import Navbar from '@root/src/components/Navbar/page';
import Link from 'next/link';

const Beneficiary = () => {
    return (

        <>
        <Navbar/>
        <section className='p-4'>
            <h2 className='text-2xl font-extrabold mb-4'>Add New Beneficiary</h2>
            <h2 className='text-2xl font-extrabold mb-4'>#1</h2>
            <div className='grid grid-cols-10 gap-6'>
                <div className='col-span-2'>
                    <CustomTextField label='First Name' placeholder='Francisco' classs='' />
                </div>
                <div className='col-span-2'>
                    <CustomTextField label='Last Name' placeholder='Javier' classs='' />
                </div>
                <div className='col-span-2'>
                    <CustomTextField label='Phone#1' placeholder='+123-746-7890' classs='' />
                </div>
                <div className='col-span-2'>
                    <CustomTextField label='Phone#1' placeholder='+123-746-7890' classs='' />
                </div>
                <div className='col-span-2'>
                    <CustomTextField label='WhatsApp' placeholder='+123-746-7890' classs='' />
                </div>
                <div className='col-span-3'>
                    <CustomTextField label='Relationship' placeholder='franciscojavier@gmail.com' classs='' />
                </div>
                <div className='col-span-3'>
                    <CustomTextField label='Email' placeholder='-' classs='' />
                </div>
                <div className='col-span-3'>
                    <CustomTextField label='Another Email' placeholder='-' classs='' />
                </div>
                <div className='col-span-10'>
                    <CustomTextField label='Address#1' placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' classs='' />
                </div>
                <div className='col-span-10'>
                    <CustomTextField label='Address#2' placeholder='Same as Above' classs='' />
                </div>
                <div className='col-span-10'>
                    <CustomTextField label='Assigned Assets' placeholder='Asset Tittle' classs='' />
                </div>
            </div>
            {/* Neeed button here */}
            <Link
            href="/Beneficiaries"
            className="bg-yellow-700 px-5 py-2 text-black text-xs font-bold flex gap-2 justify-center items-center w-72 mt-5"
          >
            ADD BENEFICIARY
          </Link>
        </section>
        </>
    )
}

export default Beneficiary