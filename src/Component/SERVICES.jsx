import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import img2 from '../Component/SERVICES1.jpg';
import img3 from '../Component/SERVICES2.jpg';
import img4 from '../Component/SERVICES3.jpg';
import img5 from '../Component/SERVICES4.jpg';
import img6 from '../Component/SERVICES5.jpg';
import img7 from '../Component/homepic2.jpg';
import img9 from '../Component/SERVICES7.png';
import img10 from '../Component/SERVICES8.png';
import img11 from '../Component/SERVICES9.png';
import img12 from '../Component/SERVICES10.png';
import img13 from '../Component/SERVICES11.png';
import { RiCheckboxCircleLine } from "react-icons/ri";

function Services() {
  const data = [img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the second image (center)
  const sliderRef = useRef(null);
  const totalSlides = data.length;

  // Function to handle next slide
  const handleNext = () => {
    if (currentIndex === totalSlides + 1) {
      sliderRef.current.style.transition = "none"; // Remove transition for smooth reset
      setCurrentIndex(1); // Instantly reset to the second image (center of the original set)
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1); // Move forward
      sliderRef.current.style.transition = "transform 0.5s ease"; // Apply transition
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Move every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentIndex]);

  const getTranslateXValue = () => {
    return -(currentIndex * (100 / 3)); // Move by 1/3 of the container width
  };

  return (
    <div className='Our clients'>
      <Header />

      {/* First component */}
      <div className='relative'>
        <img className='w-full md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
        <h1 className='absolute inset-0 flex items-center justify-center font-bold md:text-[70px] text-[40px] text-center font-serif text-white bg-black bg-opacity-50'>
          Services
        </h1>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden mt-10">
        <div
          className="slider-container flex"
          style={{
            transform: `translateX(${getTranslateXValue()}%)`,
          }}
          ref={sliderRef}
        >
          {/* Original Images */}
          {data.map((imageSrc, index) => (
            <div
              key={index}
              className={`slider-img inline-block w-[33.33%] flex-shrink-0 transition-transform duration-300 ease-in-out ${currentIndex === index + 1 ? 'scale-105' : ''}`}
            >
              <img src={imageSrc} alt="" className="w-full h-[400px] object-cover" />
            </div>
          ))}

          {/* Cloned Images for Seamless Looping */}
          {data.map((imageSrc, index) => (
            <div
              key={index + totalSlides}
              className={`slider-img inline-block w-[33.33%] flex-shrink-0 transition-transform duration-300 ease-in-out ${currentIndex === index + 1 ? 'scale-105' : ''}`}
            >
              <img src={imageSrc} alt="" className="w-full h-[400px] object-cover" />
            </div>
          ))}
        </div>

        {/* Numbered Indicators */}
        <div className="flex justify-center mt-5 space-x-5">
          {data.map((_, index) => (
            <button
              key={index}
              className={`text-[35px] ml-[20px] md:ml-[1000px] font-bold ${currentIndex === index + 1 ? 'text-red-600' : 'text-black'}`}
              onClick={() => setCurrentIndex(index + 1)} // Set the clicked index as current
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Component three */}
      <div className='flex flex-col md:ml-[240px] ml-[20px] md:mt-48 mt-10'>

        <div className='flex flex-row font-bold font-serif'>
          <img src={img7} alt="" className='w-[100px]' />
          <p className='ml-[-65px] mt-[-1px]'>BENEFITS OF US</p>
        </div>

        <div className='flex flex-col md:flex-row'>
          <h1 className='md:text-[50px] text-[30px] font-bold md:w-[500px] mt-[-40px] font-serif'>
            Why You Should Choose Collectum Solutions
          </h1>
          <img className='h-[350px] md:h-[500px] md:w-[550px] w-full relative bottom-8 md:left-20 rounded-bl-[200px]' src={img} alt="" />
        </div>

        <p className='text-[14px] md:text-[16px] w-full md:w-[550px] relative md:bottom-[300px]'>
          In today's competitive digital landscape, navigating the complexities of web design, marketing, and ERP systems can be overwhelming. That's where Collectum Solutions comes in. By partnering with our experienced agency, you gain access to a multitude of benefits:
        </p>

        <div className='flex flex-col mt-2 md:flex-row md:gap-10 gap-5 md:relative md:bottom-[270px]'>
          <div className='flex flex-row'>
            <RiCheckboxCircleLine size={20} className='text-red-700' />
            <p className='font-semibold ml-2'>Streamlined Expertise</p>
          </div>
          <div className='flex flex-row'>
            <RiCheckboxCircleLine size={20} className='text-red-700' />
            <p className='font-semibold ml-2'>Seamless Project Execution</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:gap-10 gap-5 md:relative md:bottom-[270px] mt-5'>
          <div className='flex flex-row'>
            <RiCheckboxCircleLine size={20} className='text-red-700' />
            <p className='font-semibold ml-2'>Data-Driven Optimization</p>
          </div>
          <div className='flex flex-row md:ml-[-30px]'>
            <RiCheckboxCircleLine size={20} className='text-red-700' />
            <p className='font-semibold ml-2'>24/7 Support</p>
          </div>
        </div>

        <hr className='border-[1px] border-slate-200 w-full md:w-[550px] md:relative md:bottom-[250px]' />

        <div className='flex justify-center md:justify-start '>
          <button className='relative bg-red-600 md:bottom-[220px] p-2 text-[16px] font-semibold text-white hover:bg-white hover:border-black border-2 hover:text-rose-600 rounded-full h-[50px] w-[140px]'>
            Learn More
          </button>
        </div>

        <h1 className='relative text-[40px] md:bottom-[150px] font-bold'>Our Clients</h1>
        <p className='relative md:bottom-[130px] w-full md:w-[450px]'>
          Unlock boundless possibilities with our tailored solutions, crafted to elevate your success. Experience excellence, redefine your standards, and thrive with our comprehensive services.
        </p>

        <div className='relative md:bottom-[270px]  md:left-[700px]'>
          <div className='flex flex-row space-x-4'>
            <img src={img9} alt="" className='w-[100px] h-[100px]' />
            <img src={img10} alt="" className='w-[100px] h-[100px]' />
            <img src={img11} alt="" className='w-[100px] h-[100px]' />
          </div>
          <div className='flex flex-row space-x-4 mt-10'>
            <img src={img12} alt="" className='w-[100px] h-[100px]' />
            <img src={img13} alt="" className='w-[100px] h-[100px]' />
            <img src={img10} alt="" className='w-[100px] h-[100px]' />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
