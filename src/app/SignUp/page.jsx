"use client"

import React, { useState } from 'react'

import { Button } from "@material-tailwind/react";
import { backArrow, bankIcon, debitCard } from "@root/icons.js"
import Icon from '@components/Icon';
import CustomTextField from '@components/CustomTextField';
import CustomDropdown from '@components/CustomDropdown';
import Link from 'next/link';

function SignUpFormStep_1({ navigate }) {
    return (
        <>
            <div className='d-flex-between-y-center w-full gap-4'>
                <CustomTextField label='First name' placeholder='abc' classs='' />
                <CustomTextField label='Last name' placeholder='abc' classs='' />
            </div>

            <CustomTextField label='Enter You Email' placeholder='abc@gmail.com' classs='' />
            <CustomTextField label='Enter your cell number' placeholder='+123-456-7890' classs='' />
            <CustomTextField label='Enter password' placeholder='******' type='password' classs='' />
            <CustomTextField label='Re-wirte password' placeholder='******' type='password' classs='' />

            <Button className='w-full font-inter shadow-none hover:shadow-none text-black bg-yellow-800' onClick={navigate}>CONTINUE</Button>
        </>
    )
}






function SignUpFormStep_2({ navigate }) {
    return (
        <>
            <CustomTextField label='Your Birthdate' type='date' placeholder='abc' classs='' />
            <CustomDropdown label="Select Gender" menuItems={['Male', "Female", "Prefer not to say"]} />

            <div className='d-flex-between-y-center max-w-full gap-4 main'>
                <CustomDropdown label="City" menuItems={['USA', "PAK", "IND"]} />
                <CustomDropdown label="State" menuItems={['Punjab', "Sindh", "Balochispan"]} />
                <CustomTextField label='Zip' placeholder='123465' classs='' />
            </div>

            <CustomTextField label='Address #1' placeholder='xyz street' classs='' />
            <CustomTextField label='Address #2' placeholder='xyz street' classs='' />

            <Button className='w-full font-inter shadow-none hover:shadow-none text-black bg-yellow-800' onClick={navigate}>CONTINUE</Button>
        </>
    )
}






function SignUpFormStep_3({ navigate }) {
    return (
        <>
            <CustomDropdown label="Maritial Status" menuItems={['Single', "Married", "Prefer not to say"]} />
            <CustomDropdown label="Check-In Duration" menuItems={['Male', "Female", "Prefer not to say"]} />
            <Button className='w-full font-inter shadow-none hover:shadow-none text-black bg-yellow-800' onClick={navigate}>CONTINUE</Button>
        </>
    )
}







function SignUpFormStep_4({ navigate }) {
    const [selectedDiv, setSelectedDiv] = useState(null);

    return (
        <>
            <div className='w-[550px] d-flex-column-center gap-4'>

                <h1 className='w-full mb-4 text-4xl font-extrabold capitalize'>lets get started</h1>
                <p className='w-full mb-4'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>

                <div className="d-flex-between-y-center w-full gap-4">
                    <div
                        className={`w-full p-4 rounded-2xl cursor-pointer ${selectedDiv === 'monthly' ? 'bg-yellow-800 text-white' : "bg-white text-black"}`}
                        onClick={() => setSelectedDiv('monthly')}>
                        <h4 className='text-xl font-bold'>Monthly</h4>
                        <p className='text-sm py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        <div className='text-xl font-bold mb-4'>$230.00/<span className='text-sm font-light'>month</span></div>
                        <Button className={`w-full font-inter rounded-sm shadow-none hover:shadow-none ${selectedDiv === 'monthly' ? 'bg-white text-black' : "text-black bg-yellow-800"}`}>CONTINUE</Button>
                    </div>
                    <div
                        className={`w-full p-4 rounded-2xl cursor-pointer ${selectedDiv === 'year' ? 'bg-yellow-800 text-white' : "bg-white text-black"}`}
                        onClick={() => setSelectedDiv('year')}>
                        <h4 className='text-xl font-bold'>Yearly</h4>
                        <p className='text-sm py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        <div className='text-xl font-bold mb-4'>$230.00/<span className='text-sm font-light'>year</span></div>
                        <Button className={`w-full font-inter rounded-sm shadow-none hover:shadow-none ${selectedDiv === 'year' ? 'bg-white text-black' : "text-black bg-yellow-800"}`}>CONTINUE</Button>
                    </div>
                </div>

                <Button className='w-full font-inter shadow-none hover:shadow-none text-black bg-yellow-800' onClick={navigate}>CONTINUE</Button>
            </div>
        </>
    )
}







function SignUpFormStep_5({ navigate }) {
    const [selectedDiv, setSelectedDiv] = useState(null);

    return (
        <>
            <div className='w-[550px] d-flex-column-center gap-2'>
                <h1 className='w-full mb-2 font-extrabold text-2xl d-flex-start-center gap-4 cursor-pointer'><Icon src={backArrow} className='w-5' /> Payment</h1>
                <p className='w-full text-sm font-bold'>
                    Yearly subscription
                </p>
                <h1 className='w-full font-extrabold text-2xl'>$ 230.00</h1>
                <p className='w-full mb-2 text-sm font-bold text-gray-800'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                <CustomTextField label='Bill to pay' placeholder='Miservo' type='text' classs='' />

                <h5 className='w-full text-sm font-bold mb-2'>Payment Details</h5>
                <div className="d-flex-between-y-center w-full -mt-3 gap-4">
                    <div
                        className={`w-full p-4 rounded-2xl cursor-pointer  text-black ${selectedDiv === 'monthly' ? 'bg-orange-100' : "bg-white text-black"}`}
                        onClick={() => setSelectedDiv('monthly')}>
                        <Icon src={debitCard} />
                        <h4 className='text-xl mt-6 font-bold'>Debit/Credit</h4>
                    </div>
                    <div
                        className={`w-full p-4 rounded-2xl cursor-pointer  text-black ${selectedDiv === 'year' ? 'bg-orange-100' : "bg-white text-black"}`}
                        onClick={() => setSelectedDiv('year')}>
                        <Icon src={bankIcon} />
                        <h4 className='text-xl mt-6 font-bold'>Bank Transfer</h4>
                    </div>
                </div>
                <div className='w-full grid gap-x-2 mt-2 grid-cols-6'>
                    <div className='col-span-6'>
                        <CustomTextField hideLabel={true} placeholder='Card Number' type='text' classs='' />
                    </div>
                    <div className='col-span-3'>
                        <CustomTextField hideLabel={true} placeholder='Expiration' type='text' classs='' />
                    </div>
                    <div className='col-span-3'>
                        <CustomTextField hideLabel={true} placeholder='Cvc' type='text' classs='' />
                    </div>
                    <div className='col-span-3'>
                        <CustomDropdown hideLabel={true} menuItems={['Single', "Married", "Prefer not to say"]} />
                    </div>
                    <div className='col-span-3'>
                        <CustomTextField hideLabel={true} placeholder='Zip' type='text' classs='' />
                    </div>
                    <div className='col-span-2'>
                        <Button className='w-full font-inter shadow-none hover:shadow-none text-black bg-gray-400'>Cancel</Button>
                    </div>
                    <div className='col-span-4'>
                        <Button className='w-full font-inter shadow-none hover:shadow-none text-gray-700 bg-orange-200' onClick={navigate}>SUBSCRIBE</Button>
                    </div>
                </div>
                <p className='w-full mb-2 text-sm mt-4 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
        </>
    )
}









function GoToLoginSection({ navigate }) {
    return (
        <div className='w-[550px] d-flex-column-center gap-6'>
            <h1 className='w-full mb-2 font-extrabold text-2xl cursor-pointer'>
                you have successfully subscribed to
                our yearly package
            </h1>
            <h1 className='w-full mb-2 font-extrabold text-2xl cursor-pointer'>
                Thanks for your subscription
            </h1>
            <p className='w-full text-sm font-bold'>
                Go To <Link href='/Login' className='border-b-2 border-yellow-800 pb-2'>Login Page</Link> and Continue
            </p>
        </div>
    )
}








const SignUp = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageNavigation = () => {
        if (currentPage >= 6) return
        setCurrentPage((prev) => prev + 1)
    }

    return (
        <section className='grid grid-cols-2 min-h-[100vh]'>
            <div className='border-r-2 border-purple-1000 d-flex-center my-[8vh]'>
                <h1 className='text-5xl text-purple-1000 font-extrabold uppercase'>Miservo</h1>
            </div>
            <div className='d-flex-column-center'>
                <div className='w-[550px] d-flex-column-center gap-4'>

                    {
                        currentPage < 4 && (
                            <div className='d-flex-between-y-center w-full mb-8 ps-4'>
                                <h1 className='text-4xl font-extrabold capitalize'>lets get started</h1>
                                <div className='font-bold text-sm'>step {currentPage}/3</div>
                            </div>
                        )
                    }

                    {currentPage === 1 && <SignUpFormStep_1 navigate={handlePageNavigation} />}
                    {currentPage === 2 && <SignUpFormStep_2 navigate={handlePageNavigation} />}
                    {currentPage === 3 && <SignUpFormStep_3 navigate={handlePageNavigation} />}
                    {currentPage === 4 && <SignUpFormStep_4 navigate={handlePageNavigation} />}
                    {currentPage === 5 && <SignUpFormStep_5 navigate={handlePageNavigation} />}
                    {currentPage === 6 && <GoToLoginSection navigate={handlePageNavigation} />}

                </div>
            </div>
        </section>
    )
}



export default SignUp