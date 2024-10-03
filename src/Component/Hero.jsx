import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import slider1 from '../Component/slider1.webp';
import slider2 from '../Component/slider2.webp';
import slider3 from '../Component/slider3.webp';
import slider4 from '../Component/slider4.webp';

const imageSlider = [
    {
        id: 1,
        title1: "Digital ",
        title2:'Marketing',
        subtitle: "Full Solutions",
        url: slider1,
    },
    {
        id: 2,
        title1: "Software",
        title2: "Development",
        subtitle: "Custom Software",
        url: slider2,
    },
    {
        id: 3,
        title1: "SalesForce ",
        title2 :"Consulting",
        subtitle: "Professional Services",
        url: slider3,
    },
    {
        id: 4,
        title1: "SAP-BI ",
        title2: 'Consulting',
        subtitle: "Data Analytics",
        url: slider4,
    },
];

const Hero = () => {
    const [currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentState((prev) => (prev === imageSlider.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentState]);

    const handlePrevClick = () => {
        setCurrentState((prev) => (prev === 0 ? imageSlider.length - 1 : prev - 1));
    };

    const handleNextClick = () => {
        setCurrentState((prev) => (prev + 1) % imageSlider.length);
    };

    const bgImageStyle = {
        backgroundImage: `url(${imageSlider[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        transition: 'background-image 1s ease-in-out',
        position: 'relative',
    };

    return (
        <div className='md:Container w-screen'>
            <div style={bgImageStyle} className='relative'>

                <div className='absolute text-center top-[35%] left-[65%] transform -translate-x-1/2'>
                    <h1 className='md:text-6xl text-[40px] font-bold font-serif bg-red-700 text-black'>
                        {imageSlider[currentState].title1}
                    </h1>

                    <h1 className='md:text-6xl text-[40px] font-bold font-serif bg-white text-black'>
                        {imageSlider[currentState].title2}
                    </h1>
                
                </div>
            </div>

            <button
                onClick={handlePrevClick}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black md:px-8 px-2 md:py-8 py-2 rounded-full"
                aria-label="Previous Slide"
            >
                <FaLongArrowAltLeft size={30} />
            </button>

            <button
                onClick={handleNextClick}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black md:px-8 px-2 md:py-8 py-2 rounded-full"
                aria-label="Next Slide"
            >
                <FaLongArrowAltRight size={30} />
            </button>
        </div>
    );
};

export default Hero;
