import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { languages } from "../constant/Languages";
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import { showLanguage } from '../features/pageActionSlice';

const Languages = () => {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState("English");
    const [isHover, setIsHover] = useState(false);

    const handleOnMouseEnter = () => {
        setIsHover(true);
    };
    const handleOnMouseLeave = () => {
        setIsHover(false);
    };

    const changeLangBtn = (title) => {
        handleOnMouseLeave();
        dispatch(showLanguage());
        setCurrentLanguage(title);
        i18n.changeLanguage(title.toLowerCase())
    };

    return (
        <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className={`${isHover ? "shadow-md" : ""} `}>
            <button className={`${isHover ? "rounded-t-[.5vw] bg-white" : "rounded bg-gray-50"} duration-100 flex items-center text-[1.2vw] max-md:text-[3vw] max-md:px-[3vw] w-[11.5vw] py-[.2vw]  px-[1.2vw] gap-[.2vw]`}>
                <TbWorld />
                <span className="font-semibold">{currentLanguage}</span>
                <IoIosArrowDown />
            </button>
            {isHover && (
                <div className="absolute bg-white rounded-b-[.5vw] w-full flex flex-col gap-[1vw]">
                    {languages.map((lang) => (
                        <button key={lang.id} onClick={() => changeLangBtn(lang.title)} className="text-[1.2vw] py-[.4vw] px-[1.2vw] active:scale-95 w-full flex items-center gap-[.2vw]">
                            <span>{lang.title}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Languages
