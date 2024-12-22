import { AiOutlineClose, AiOutlineMenu, AiFillHome } from "react-icons/ai";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../features/pageActionSlice";
import Navbar from "./Navbar";
import Languages from "./Languages";
import { IoIosArrowUp } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const modal = useSelector((state) => state.pageActionSlice.modal);

    return (
        <div className={`${modal ? "shadow-none" : "shadow-md"} bg-white z-10 h-full flex justify-between items-center px-[4vw] duration-700`}>
            <div className="flex items-center text-[2vw] max-md:text-[5vw] gap-[.2vw]">
                <AiFillHome />
                <span>QaraUy</span>
            </div>
            <div className="flex items-center gap-[2vw]">
                <div className="flex items-center gap-[1vw] max-md:hidden">
                    <Navbar />
                    <button className="text-[1.2vw] font-medium flex items-center gap-[.2vw]">
                        <span>{t('categories')}</span>
                        <IoIosArrowUp className="rotate-180" />
                    </button>
                </div>
                <div className="relative max-md:hidden">
                    <Languages />
                </div>
                <div className="flex items-center gap-[1vw]">
                    <button className="border-[.1vw] max-md:text-[3vw] font-semibold rounded border-black active:scale-95 px-[2vw]">
                        Log In
                    </button>
                    <button className="border-[.1vw] max-md:text-[3vw] font-semibold rounded border-black active:scale-95 px-[2vw] text-white bg-black">
                        Sign Up
                    </button>
                </div>
                <button onClick={() => dispatch(showModal())} className="text-[1.5vw] max-md:text-[4vw] active:scale-95">
                    {modal ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>
        </div>
    );
};

export default Header;
