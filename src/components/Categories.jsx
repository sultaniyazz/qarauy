import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io';
import { CatNav } from '../constant/Category';

const Categories = () => {

    const [isHover, setIsHover] = useState(false);

    const handleOnMouseEnter = () => {
        setIsHover(true);
    };
    const handleOnMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className={`${isHover ? "shadow-md" : ""} max-md:w-full relative`}>
            <button className={`${isHover ? "rounded-t-[.5vw]" : "rounded"} duration-100 max-md:w-full  flex items-center text-[1.2vw] max-md:text-[4vw] max-md:px-[3vw]  py-[.2vw]  px-[1.2vw] max-md:gap-[1vw] gap-[.2vw]`}>
                <span className="flex items-center gap-[.2vw]">
                    <span>Categories</span>
                    <IoIosArrowUp className="rotate-180" />
                </span>
            </button>
            {isHover && (
                <div className="absolute bg-white rounded-b-[.5vw] shadow-md w-full py-[.5vw] max-md:py-[2vw] flex flex-col gap-[1vw]">
                    {CatNav.map((lang) => (
                        <button key={lang.id} onClick={() => changeLangBtn(lang.title)} className="text-[1.2vw] max-md:text-[4vw] py-[.4vw] px-[1.2vw] active:scale-95 w-full flex items-center gap-[.2vw]">
                            <span>{lang.title}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Categories
