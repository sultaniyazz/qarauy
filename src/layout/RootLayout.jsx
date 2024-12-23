import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { showModal } from '../features/pageActionSlice';
import Languages from '../components/Languages';
import Categories from '../components/Categories';

const RootLayout = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.pageActionSlice.modal);

    return (
        <div className="w-[100vw] select-none overflow-hidden duration-300 h-[100vh] text-[1.1vw]">
            <div className="h-[12vh] max-sm:h-[10vh] relative z-50"><Header /></div>
            <div className={`absolute bg-white px-[4vw] flex-col gap-[2vw] flex items-center w-full max-h-full py-[1vw] duration-500 z-40 ${modal ? "translate-y-0 border-b-[.1vw] border-gray-300" : "-translate-y-[100%]"}`} >
                <div className='w-full'>
                    <div className='flex max-md:flex-col justify-between w-full md:hidden max-md:py-[3vw] max-md:gap-[3vw] border-b-[.1vw]'>
                        <div className='flex items-center gap-[1vw]'>
                            <div onClick={() => dispatch(showModal())} className='md:hidden flex items-center gap-[1vw]'><Navbar /></div>
                            <div><Categories /></div>
                        </div>
                        <div className='md:hidden w-max max-md:py-[2vw]'><Languages /></div>
                    </div>
                    <div className='flex items-start max-md:py-[2vw]  flex-col max-md:gap-[2vw] gap-[1vw]'>
                        <h1 className="font-semibold text-[1.5vw] max-md:text-[5vw]">Company</h1>
                        <div className='flex flex-col max-md:gap-[1vw] gap-[.5vw] text-[1.3vw] max-md:text-[4vw]'>
                            <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'>About Us</span>
                            <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'>Contact Us</span>
                            <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'>Privacy Policy</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="h-[88vh] max-md:h-[90vh] relative z-30 overflow-y-auto"><Outlet /></div>
        </div>
    );
};

export default RootLayout;
