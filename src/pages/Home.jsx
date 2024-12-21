import { CgDanger } from "react-icons/cg";
import { BiMusic } from "react-icons/bi";
import { MdVideoSettings } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";
import React from 'react'
import Banner from '../components/Banner'
import banner from '../images/banner.jpg'
import Footer from '../components/Footer'
import { useSelector } from "react-redux";
import Slick from '../components/Slick';
import Contact from './Contact';

const Home = () => {
    const dest = useSelector(state => state.destinationsSlice.destinations)

    return (
        <div>
            <div>
                <Banner img={banner} h1={"Welcome To Karakalpakstan"} p={"Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit."} />
            </div>
            <div className='py-[10vw] flex justify-center flex-col items-center gap-[5vw]'>
                <div className='text-[4vw] max-md:text-[6vw] text-center'>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p className='text-[1.5vw] max-md:text-[4vw]'>Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
                </div>
                <div className='w-full grid grid-cols justify-center items-center gap-[2vw] max-md:gap-[5vw] grid-cols-3 max-md:grid-cols-2  px-[10vw]'>
                    <div className='bg-white rounded-[2vw] shadow-[0px_5px_10px_2px_rgba(34,60,80,0.2)] hover:shadow-[0px_5px_10px_2px_rgba(34,60,80,0.3)] duration-300 p-[1vw] w-full flex flex-col gap-[.5vw] justify-center items-center h-[22vw] max-md:h-[40vw]'>
                        <span className="text-[5vw] max-md:text-[12vw]"><GiNewspaper /></span>
                        <p className="text-center max-md:text-[3vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-white rounded-[2vw] shadow-[0px_5px_10px_2px_rgba(34,60,80,0.2)] hover:shadow-[0px_5px_10px_2px_rgba(34,60,80,0.3)] duration-300 p-[1vw] w-full flex flex-col gap-[.5vw] justify-center items-center h-[22vw] max-md:h-[40vw]'>
                        <span className="text-[5vw] max-md:text-[12vw]"><MdVideoSettings /></span>
                        <p className="text-center max-md:text-[3vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-white rounded-[2vw] shadow-[0px_5px_10px_2px_rgba(34,60,80,0.2)] hover:shadow-[0px_5px_10px_2px_rgba(34,60,80,0.3)] duration-300 p-[1vw] w-full flex flex-col gap-[.5vw] justify-center items-center h-[22vw] max-md:h-[40vw]'>
                        <span className="text-[5vw] max-md:text-[12vw]"><BiMusic /></span>
                        <p className="text-center max-md:text-[3vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-white rounded-[2vw] shadow-[0px_5px_10px_2px_rgba(34,60,80,0.2)] hover:shadow-[0px_5px_10px_2px_rgba(34,60,80,0.3)] duration-300 p-[1vw] w-full flex flex-col gap-[.5vw] justify-center items-center h-[22vw] max-md:h-[40vw]'>
                        <span className="text-[5vw] max-md:text-[12vw]"><CgDanger /></span>
                        <p className="text-center max-md:text-[3vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-white rounded-[2vw] shadow-[0px_5px_10px_2px_rgba(34,60,80,0.2)] hover:shadow-[0px_5px_10px_2px_rgba(34,60,80,0.3)] duration-300 p-[1vw] w-full flex flex-col gap-[.5vw] justify-center items-center h-[22vw] max-md:h-[40vw]'>
                        <span className="text-[5vw] max-md:text-[12vw]"><GiNewspaper /></span>
                        <p className="text-center max-md:text-[3vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-white rounded-[2vw] shadow-[0px_5px_10px_2px_rgba(34,60,80,0.2)] hover:shadow-[0px_5px_10px_2px_rgba(34,60,80,0.3)] duration-300 p-[1vw] w-full flex flex-col gap-[.5vw] justify-center items-center h-[22vw] max-md:h-[40vw]'>
                        <span className="text-[5vw] max-md:text-[12vw]"><GiNewspaper /></span>
                        <p className="text-center max-md:text-[3vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div className='px-[4vw] py-[5vw]'>
                <div className='w-full flex-col items-center flex justify-center text-[4vw] py-[2vw]'>
                    <h1 className='max-md:text-[6vw]'>Our Destinations</h1>
                    <span className='text-center text-[2vw] max-md:text-[4vw]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                </div>
                <div className="px-[3vw]"><Slick dest={dest} /></div>
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
