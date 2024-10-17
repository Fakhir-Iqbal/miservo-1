import React from "react"

const BeneficiariesCard = ({ index, name, email, phone, relation, bg = false }) => {
    return (
        <div className={`p-4 h-[80%] rounded-xl w-full bg-[#FFF9EB] ${bg && `bg-[url("/images/transparent-bg.png")] bg-no-repeat bg-right-bottom bg-cover`}`}>
            <h1 className='font-extrabold text-lg mb-2'>#{index ?? "1"}</h1>
            <div className='grid gap-2'>
                <div className="text-sm"><span className='font-bold'>Name: </span>{name ?? "Francisco Javier"}</div>
                <div className="text-sm"><span className='font-bold'>email: </span>{email ?? "franciscojavier@gmail.com"}</div>
                <div className="text-sm"><span className='font-bold'>phone: </span>{phone ?? "+987-654-3210"}</div>
                <div className="text-sm"><span className='font-bold'>Relationship: </span>{relation ?? "Friend"}</div>
            </div>
        </div>
    )
}

export default BeneficiariesCard