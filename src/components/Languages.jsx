import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import { showLanguage } from '../features/pageActionSlice';
import { langNav } from '../constant/Langs';

const Languages = () => {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();



    const [currentLanguage, setCurrentLanguage] = useState(langNav[0].title);
    const [isHover, setIsHover] = useState(false);

    const handleOnMouseEnter = () => {
        setIsHover(true);
    };
    const handleOnMouseLeave = () => {
        setIsHover(false);
    };

    const changeLangBtn = (title) => {
        console.log(title);
        handleOnMouseLeave();
        dispatch(showLanguage());
        setCurrentLanguage(title);
        i18n.changeLanguage(title.toLowerCase());
    };

    return (
        <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className={`${isHover ? "shadow-md" : ""} max-md:w-full relative`}>
            <button className={`${isHover ? "rounded-t-[.5vw] bg-white" : "rounded bg-gray-100"} duration-100 max-md:w-full  flex items-center text-[1.2vw] max-md:text-[4vw] max-md:px-[3vw]  py-[.2vw]  px-[1.2vw] max-md:gap-[1vw] gap-[.2vw]`}>
                <TbWorld />
                <span className="">{currentLanguage}</span>
                <IoIosArrowDown />
            </button>
            {isHover && (
                <div className="absolute bg-white rounded-b-[.5vw] shadow-md w-full py-[.5vw] max-md:py-[2vw] flex flex-col gap-[1vw]">
                    {langNav.map((lang) => (
                        <button key={lang.id} onClick={() => changeLangBtn(lang.title)} className="text-[1.2vw] max-md:text-[4vw] py-[.4vw] px-[1.2vw] active:scale-95 w-full flex items-center gap-[.2vw]">
                            <span>{lang.title}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Languages
