"Use client"
import React from 'react'
import "./dropdown.css"
import { Select, Option } from "@material-tailwind/react";
import Icon from './Icon';
import { arrowDropdown } from "@root/icons"

function CustomDropdown({ label = "dropdown", menuItems = [], hideLabel = false, value = "", onChange = () => { } }) {

    return (
        <div className='w-full'>
            {
                !hideLabel && <label className='font-bold text-sm'>{label}</label>
            }
            <div className='dropdown'>
                <Select
                    variant='static'
                    size="md"
                    className={`bg-white outline-none border-none`}
                    arrow={<Icon src={arrowDropdown} />}
                    placeholder={label}
                    onChange={(selectedValue) => {onChange(selectedValue);}}
                    value={value}
                    selected={(element) =>
                        element &&
                        React.cloneElement(element, {
                            disabled: true,
                            className:
                                "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
                        })
                    }
                >
                    {menuItems.length > 0 && menuItems.map((name, i) => (
                        <Option key={i} value={name} className="flex items-center gap-2">
                            {name}
                        </Option>
                    ))}
                </Select>
            </div>
        </div>
    )
}


export default CustomDropdown