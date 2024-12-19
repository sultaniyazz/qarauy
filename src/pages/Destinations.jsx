import React from 'react'
import Banner from '../components/Banner'
import dest from '../images/dest1.jpg'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'

const Destinations = () => {
    const destinations = useSelector(state => state.destinationsSlice.destinations)
    console.log(destinations);

    return (
        <div className='overflow-x-hidden'>
            <div><Banner img={dest} h1={"Lorem ipsum dolor sit."} p={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, architecto?"} /></div>
            <div className='flex flex-col gap-[2vw] max-md:gap-[4vw] justify-center items-center w-full px-[4vw] py-[5vw]'>
                <div className='text-[1.5vw] max-md:text-[2vw] text-center'>
                    <span className='max-md:text-[8vw] text-[4vw]'>All Destinations</span>
                    <p className='text-[2.5vw] max-md:text-[5vw]'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='p-[1vw] w-full gap-[2vw] max-md:gap-[10vw] grid grid-cols-4 max-md:grid-cols-1'>
                    {destinations.map((dest) => (
                        <div key={dest.id} className='w-full flex flex-col  bg-red-500 justify-cente rounded-[1vw]'>
                            <div>
                                <img className='w-full h-[25vw] max-md:h-[100vw] object-cover rounded-t-[1vw]' src={dest.image} alt="" />
                            </div>
                            <div className='py-[1vw] max-md:py-[2vw] px-[2vw] justify-between h-full gap-[.8vw] max-md:gap-[3vw] flex flex-col bg-white border-b-black border-[.1vw] rounded-b-[1vw]'>
                                <div>
                                    <h1 className='text-[2vw] max-md:text-[10vw]'>{dest.country}</h1>
                                    <p className='max-md:text-[5vw]'>{dest.description}</p>
                                </div>
                                <div className='w-full flex justify-end'>
                                    <button className='bg-orange-500 active:scale-95 max-md:text-[6vw] max-md:px-[10vw] px-[2vw] py-[.3vw] text-white font-bold rounded-full'>view</button>
                                </div>
                            </div>

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

export default Destinations
