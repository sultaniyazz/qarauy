import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { showModal } from '../features/pageActionSlice';
import Languages from '../components/Languages';
import { GoArrowRight } from 'react-icons/go';

const RootLayout = () => {
    const dispatch = useDispatch();
    const dest = useSelector((state) => state.destinationsSlice.destinations);
    const modal = useSelector((state) => state.pageActionSlice.modal);

    return (
        <div className="w-[100vw] select-none overflow-hidden duration-300 h-[100vh] text-[1.1vw]">
            <div className="h-[12vh] max-sm:h-[10vh] relative z-50"><Header /></div>
            <div className={`absolute bg-white px-[4vw] flex-col gap-[2vw] flex items-center w-full max-h-full py-[1vw] duration-500 z-40 ${modal ? "translate-y-0 border-b-[.1vw] border-gray-300" : "-translate-y-[100%]"}`} >
                <div className='w-full'>
                    <div className='flex items-start  flex-col max-md:gap-[2vw] gap-[1vw]'>
                        <h1 className="font-semibold text-[1.5vw] max-md:text-[3vw]">Company</h1>
                        <div className='flex  max-md:gap-[2vw] gap-[1vw] text-[1.3vw] max-md:text-[2.5vw]'>
                            <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'>About Us</span>
                            <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'>Contact Us</span>
                            <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'>Privacy Policy</span>
                            <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'>Term & Condition</span>
                            <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'>FAQ & Help</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div onClick={() => dispatch(showModal())} className='md:hidden text-[2vw] '><Navbar /></div>
                    <div className='md:hidden'><Languages /></div>
                </div>
            </div>
            <div className="h-[88vh] relative z-30 overflow-y-auto"><Outlet /></div>
        </div>
    );
};

export default RootLayout;
