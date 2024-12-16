import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../features/pageActionSlice";
import Navbar from "./Navbar";
import Languages from "./Languages";

const Header = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.pageActionSlice.modal);
    console.log(modal);


    return (
        <div className={`${modal ? "shadow-none" : "shadow-md duration-700"} bg-white z-10 h-full flex justify-between items-center px-[4vw]`}>
            <div className='flex items-center text-[2vw] max-md:text-[5vw] gap-[.2vw]'>
                <span><AiFillHome /></span>
                <span>QaraUy</span>
            </div>
            <div className="flex items-center gap-[2vw]">
                <div className="flex items-center gap-[1vw] max-md:hidden">
                    <Navbar />
                    <button className="text-[1.2vw] font-medium flex items-center gap-[.2vw]">
                        <span>Categories</span>
                        <span className="rotate-180"><IoIosArrowUp /></span>
                    </button>
                </div>
                <div className="max-md:hidden">
                    <Languages />
                </div>
                <div className="flex items-center gap-[1vw]">
                    <button className="border-[.1vw] max-md:text-[3vw] font-semibold rounded border-black active:scale-95 px-[2vw]">Log In</button>
                    <button className="border-[.1vw] max-md:text-[3vw] font-semibold rounded border-black active:scale-95 px-[2vw] text-white bg-black">Sign Up</button>
                </div>
                <div>
                    <button onClick={() => dispatch(showModal())} className="text-[1.5vw] max-md:text-[4vw] active:scale-95">{modal ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
