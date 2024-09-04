import React, { useEffect, useState } from 'react';
import imageSlider from '../data';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


const Hero = () => {
    const [currentState, setCurrentState] = useState(0);
    useEffect(()=>{

        const timer = setTimeout(()=>{
if(currentState ===2){
    setCurrentState(0)
}
else {
    setCurrentState(currentState +1 )
}


        }, 5000)
        return () => clearTimeout(timer)
    })

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
        <div className='Container w-screen '>
            <div style={bgImageStyle} className='md:relative '>
                <h1 className='md:absolute text-6xl md:top-[35%] top-[500px] left-[55%] md:h-[150px] h-[150] w-[450px] font-bold bg-red-700 font-serif' > {imageSlider[currentState].title} </h1>
            </div>

            <div className=''>
                {

                    imageSlider.map((imageSlider, currentState) => {

                        <span key={currentState} onClick={() => goToNext(currentState)} ></span>
                    }

                    )

                }


            </div>

            <button
                onClick={handlePrevClick}
                className="absolute left-4 top-1/2 transform -translate-y-1/2  bg-white text-black md:px-8 px-2 md:py-8 py-2  rounded-full"
                aria-label="Previous Slide"
            >
                <FaLongArrowAltLeft size={30} />
            </button>

            <button
                onClick={handleNextClick}
                className="absolute right-4 top-1/2 transform -translate-y-1/2  bg-white text-black md:px-8 px-2 md:py-8 py-2 rounded-full"
                aria-label="Next Slide"
            >
                <FaLongArrowAltRight size={30} />

            </button>
        </div>
    );
};

export default Hero;
