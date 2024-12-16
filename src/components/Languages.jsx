import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'

const Languages = () => {
    return (
        <div>
            <button className="flex items-center text-[1.2vw] max-md:text-[3vw] max-md:px-[3vw] py-[.2vw] bg-gray-100 px-[1.2vw] rounded gap-[.2vw]">
                <span><TbWorld /></span>
                <span className="font-semibold">English</span>
                <span><IoIosArrowDown /></span>
            </button>
        </div>
    )
}

export default Languages
