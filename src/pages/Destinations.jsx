import React from 'react'
import Banner from '../components/Banner'
import dest from '../images/dest1.jpg'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'

const Destinations = () => {
    const destinations = useSelector(state => state.destinationsSlice.destinations)
    const load = useSelector(state => state.destinationsSlice.isDestLoad)
    console.log(load);
    const newArr = [1, 2, 3, 4]

    return (
        <div className='overflow-x-hidden'>
            <div><Banner img={dest} h1={"Lorem ipsum dolor sit."} p={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, architecto?"} /></div>
            <div className='flex flex-col gap-[2vw] max-md:gap-[4vw] justify-center items-center w-full px-[4vw] py-[5vw]'>
                <div className='text-[1.5vw] max-md:text-[2vw] text-center'>
                    <span className='max-md:text-[8vw] text-[4vw]'>All Destinations</span>
                    <p className='text-[2.5vw] max-md:text-[5vw]'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='p-[1vw] w-full gap-[2vw] max-md:gap-[10vw] grid grid-cols-4 max-md:grid-cols-2'>
                    {load ?
                        newArr.map((_, index) => (
                            <div key={index} className='w-full flex flex-col  justify-cente rounded-[1vw]'>
                                <div>
                                    <p className='w-full h-[25vw] bg-gray-300 animate-pulse max-md:h-[100vw] object-cover rounded-t-[1vw]' />
                                </div>
                                <div className='py-[1vw] max-md:py-[2vw] px-[2vw] justify-between h-full gap-[.8vw] max-md:gap-[3vw] flex flex-col bg-white border-b-black border-[.1vw] rounded-b-[1vw]'>
                                    <div className='flex flex-col max-md:gap-[3vw] gap-[1vw]'>
                                        <h1 className='text-[2vw] max-md:text-[10vw] max-md:w-[50vw] w-[10vw] bg-gray-300 max-md:h-[4vw] h-[1.2vw] rounded-full'></h1>
                                        <h1 className='text-[1.2vw] max-md:text-[10vw] max-md:w-[80vw] w-[15vw] bg-gray-300 max-md:h-[4vw] h-[1.2vw] rounded-full'></h1>
                                    </div>
                                    <div className='w-full flex justify-end'>
                                        <button className='bg-gray-300 active:scale-95 max-md:text-[6vw] max-md:px-[10vw] px-[3vw] py-[.3vw] text-white font-bold rounded-full max-md:h-[5vw] h-[1.5vw]'></button>
                                    </div>
                                </div>

                            </div>
                        ))

                        :

                        destinations.map((dest) => (
                            <div key={dest.id} className='w-full flex flex-col  bg-red-500 justify-cente rounded-[1vw]'>
                                <div>
                                    <img className='w-full h-[25vw] max-md:h-[60vw] object-cover rounded-t-[1vw]' src={dest.image} alt="" />
                                </div>
                                <div className='py-[1vw] max-md:py-[2vw] px-[2vw] justify-between h-full gap-[.8vw] max-md:gap-[3vw] flex flex-col bg-white border-b-black border-[.1vw] rounded-b-[1vw]'>
                                    <div>
                                        <h1 className='text-[2vw] max-md:text-[5vw]'>{dest.country}</h1>
                                        <p className='max-md:text-[3vw]'>{dest.description}</p>
                                    </div>
                                    <div className='w-full flex justify-end'>
                                        <button className='bg-orange-500 active:scale-95 max-md:text-[3vw] max-md:px-[5vw] px-[2vw] py-[.3vw] text-white font-bold rounded-full'>view</button>
                                    </div>
                                </div>

                            </div>
                        ))

                    }
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Destinations
