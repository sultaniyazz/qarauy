import React from 'react'

const Banner = ({ h1, p, img }) => {
    return (
        <div className='w-full h-[80vh]  flex justify-center items-center'>
            <div className='rounded-[2vw] relative flex justify-start items-center w-[90%] h-[75vh]'>
                <div className='w-full h-full'><img className='object-cover h-full w-full rounded-[2vw]' src={img} alt="" /></div>
                <div className='bg-black w-[40%] flex justify-center items-center flex-col  text-white  rounded-[2vw] opacity-70 h-full absolute'>
                    <div className='w-[80%] flex flex-col gap-[1vw]'>
                        <span className='text-[4vw] w-[80%]'>{h1}</span>
                        <div>{p}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
