import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsFillPeopleFill } from "react-icons/bs";
import React from 'react'
import Banner from '../components/Banner'
import banner from '../images/banner.jpg'
import Footer from '../components/Footer'
import paris from '../images/paris.jpg'
import { useSelector } from "react-redux";

const Home = () => {
    const dest = useSelector(state => state.destinationsSlice.destinations)
    console.log(dest);

    return (
        <div className=''>
            <div>
                <Banner img={banner} h1={"Welcome To Karakalpakstan"} p={"Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit."} />
            </div>
            <div className='px-[4vw] py-[3vw] flex flex-col justify-center items-center'>
                <div className='w-[70vw] py-[1vw] text-[2vw] h-[10vw]  rounded-[1vw] gap-[2vw] bg-gray-200 flex justify-center items-center'>
                    <div className='flex-1 flex justify-center gap-[1vw] items-center'>
                        <span>Nukus</span>
                        <div className="flex items-center">
                            <p>+12</p>
                            <p><TiWeatherPartlySunny /></p>
                        </div>
                    </div>
                    <div className='flex-1 border-x-[.2vw] border-orange-600  flex justify-center items-center'>
                        <p><input type="date" className='text-black bg-gray-100 px-[1vw]' /></p>
                    </div>
                    <div className='flex-1 gap-[1vw] flex justify-center items-center'>
                        <span className="text-[3vw]"><BsFillPeopleFill /></span>
                        <span>281</span>
                    </div>
                </div>
                <div className="py-[10vw] grid w-full gap-[2vw] max-md:gap-y-[15vw] gap-y-[8vw] px-[2vw] grid-cols-3 max-md:grid-cols-2">
                    {dest.map((dest) => (
                        <div className="flex flex-col relative items-center rounded-[1vw]">
                            <div><img className="h-[40vw] rounded-[1vw] object-cover w-full" src={dest.image} alt="" /></div>
                            <div className="w-[30vw] absolute">11</div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
