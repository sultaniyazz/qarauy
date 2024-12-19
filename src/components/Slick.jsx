import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { ImLocation2 } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

function Slick({ dest }) {
    const load = useSelector(state => state.destinationsSlice.isDestLoad);
    const skeleton = [1, 2, 3];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider {...settings} className="flex items-center gap-[1vw]">
                {load
                    ?
                    skeleton.map((_, index) => (
                        <div key={index} className="h-[38vw] max-md:h-[100vw] animate-pulse flex gap-[10vw] p-[1vw]">
                            <div className="w-full h-full bg-gray-400 relative rounded-[1vw]">
                                <div className="bg-gray-400 w-full h-full"></div>
                                <div className="w-full bg-black opacity-60 h-[6vw] max-md:h-[20vw] absolute bottom-0 rounded-b-[1vw]">
                                    <span className="text-white px-[1vw] flex-col gap-[1vw] max-md:gap-[2vw] flex items-start justify-center h-full">
                                        <p className="w-[10vw] max-md:w-[50vw] max-md:h-[2vw] bg-white h-[1vw] rounded"></p>
                                        <p className="w-[20vw] max-md:w-[70vw] max-md:h-[2vw] bg-white h-[1vw] rounded"></p>
                                        <p className="w-[10vw] max-md:w-[40vw] max-md:h-[2vw] bg-white h-[1vw] rounded"></p>
                                    </span>
                                </div>
                                <div className="absolute right-[1vw] bg-black max-md:h-[2vw] opacity-60 top-[1vw] p-[.5vw] rounded">
                                    <span className="bg-white">
                                        <p className="w-[10vw] max-md:w-[30vw]  bg-white"></p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    dest.map((item) => (
                        <div key={item.id} className="h-[38vw] max-md:h-[100vw] flex gap-[10vw] p-[1vw]">
                            <div className="w-full h-full bg-gray-400 relative rounded-[1vw]">
                                <img className="w-full h-full object-cover rounded-[1vw]" src={item.image} alt="" />
                                <div className="w-full bg-black opacity-60 h-[6vw] max-md:h-[20vw] absolute bottom-0 rounded-b-[1vw]">
                                    <span className="text-white px-[1vw] flex max-md:text-[5vw] items-center justify-center h-full">{item.description}</span>
                                </div>
                                <div className="absolute right-[1vw] bg-black opacity-60 top-[1vw] p-[.5vw] rounded">
                                    <span className="text-white max-md:text-[4vw] px-[2vw]">{item.country}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </Slider>
        </div>
    );
}

export default Slick;
