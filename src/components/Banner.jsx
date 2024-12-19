import { FaLocationArrow } from "react-icons/fa";
import { GiJerusalemCross } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";

import { TiWeatherPartlySunny } from "react-icons/ti";
import React from 'react'
import { useInView } from "react-intersection-observer";

const Banner = ({ img, h1, p }) => {
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref3, inView: inView3 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref4, inView: inView4 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div className='w-full h-[85vh] max-md:h-[90vh] flex justify-center items-center '>
            <div className='w-[85vw] max-md:w-[95%] max-md:p-[2vw] relative shadow-[0px_5px_10px_2px_rgba(34,60,80,0.2)] h-[80vh] max-md:h-[82vh] bg-white justify-between flex rounded-[1vw]'>
                <img className='w-full max-md:hidden h-full object-cover rounded-[1vw]' src={img} alt="" />
                <div className='md:absolute w-full h-full  items-center flex max-md:flex-col md:justify-between'>
                    <div className='w-[40%] max-md:w-full max-md:flex-1 md:bg-black md:h-full rounded-[1vw] opacity-60 flex justify-center text-white items-center'>
                        <div className='flex flex-col gap-[1vw] max-md:text-black w-[80%] max-md:w-full'>
                            <h1 ref={ref1} className={`${inView1 ? "opacity-100 top-0" : "opacity-0 top-[5vw]"} transition-all duration-1000 relative text-[3vw] max-md:text-[10vw]`}>{h1}</h1>
                            <p ref={ref2} className={`${inView1 ? "opacity-100 top-0" : "opacity-0 top-[6vw]"} transition-all duration-1000 relative text-[1.4vw] max-md:text-[4vw]`}>{p}</p>
                        </div>
                    </div>
                    <div className='w-[60%] max-md:w-full  max-md:flex-1  flex flex-col md:h-full gap-[1vw] items-center md:justify-center max-md:justify-start'>
                        <div ref={ref3} className={`${inView3 ? "opacity-100 top-0" : "opacity-0 top-[5vw]"} transition-all duration-1000 relative flex text-[10vw] max-md:text-[15vw] items-center gap-[1vw] rounded-[10vw]`}>
                            <span className={`flex items-center`}>+12 <p>C</p> </span>
                            <span><TiWeatherPartlySunny /></span>
                        </div>
                        <div ref={ref4} className={`${inView1 ? "opacity-100 top-0" : "opacity-0 top-[2vw]"} transition-all duration-1000 relative md:w-[80%] max-md:w-[90%]  justify-center max-md:shadow-md flex p-[1vw] max-md:py-[2vw] bg-white rounded-[1vw]`}>
                            <div className="flex-1 flex justify-center items-center text-[2vw] max-md:text-[6vw] text-black">
                                <span className="text-[3vw] max-md:text-[6vw]"><MdPeopleAlt /></span>
                                <span>123</span>
                            </div>
                            <div className="flex items-center gap-[.5vw] flex-1 text-[2vw] max-md:text-[5vw] justify-center">
                                <span>Nukus</span>
                                <span><FaLocationArrow /></span>
                            </div>
                            <div className="flex-1 flex text-[1.4vw] max-md:text-[4vw] items-center gap-[1vw]">
                                <span className="flex gap-[.3vw] items-center">
                                    <span><GiJerusalemCross /></span>
                                    <p>USD</p>
                                </span>
                                <span>12850.90</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
