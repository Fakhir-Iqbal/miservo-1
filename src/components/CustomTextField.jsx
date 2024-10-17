import React from 'react'
import { Input } from "@material-tailwind/react";

const CustomTextField = ({
  label = "",
  type = "text",
  placeholder = "Type text...",
  classs = "",
  error = "",
  hideLabel = false
}) => {
  
  return (
    <div className='w-full'>
      {
        !hideLabel && <label className='font-bold text-sm'>{label}</label>
      }
      <Input
        type={type}
        placeholder={placeholder}
        className={`bg-white border-none outline-none text-gray-900 placeholder:opacity-100 rounded-sm  ${classs} ${!hideLabel && "mt-1"}`}
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
      <div className='text-red-900 text-sm mt-2'>{error}</div>
    </div>
  )
}

export default CustomTextField