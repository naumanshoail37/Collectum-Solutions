import React, { useState , useEffect } from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";


const slides = [
  { name: 'Asad I Mumtaz', description: 'This is to certify that M/S Collectum Solutions has provided us the consultancy and I.T services for the period 2006 – 2008. During the Consultancy period we found their consultation services satisfactory and up to mark.', rank: "Ganeral Menager LCPW" },
  { name: 'Taimoor Farooq', description: 'This is to certify that Collectum Solutions are liable to provide us the following services Business and other application software installation and deployment, Wired and wireless networking solutions, Surveillance solutions', rank: "Admin Office FDPP" },
  { name: 'Naeem A.Mobasher', description: 'this is to certify that M/S Collectum Solutions provides I.T consultancy and is a supplier of I.T equipment to Airblue . The period of services is from 2004 till date and during this period we found their services very satisfactory and up to the standard. Their compliance to our proposal was immaculate and helped us substantially in renovating the procedures in all the departments of our official undertakings.', rank:"Manager IT airBlue"},
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 3000);
  
  return () => clearInterval(interval);
}, []);


  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="md:relative w-full md:h-[400px] h-[300px] bg-black text-white md:flex flex-col items-center justify-center overflow-hidden p-4 ">
      <div className="md:flex flex-col items-center text-center">
       
        <p className="md:text-[24px] text-[15px] font-serif md:w-[1000px] mb-4">{slides[currentSlide].description}</p>
        <div className='md:flex'>
        <div className=' absolute md:mt-0 mt-[15px] md:ml-[-60px] ml-[30px] container md:h-[50px] h-[40px] md:w-[50px] w-[40px]   bg-red-600'><div className='md:m-3 m-[8px] text-black'><RiDoubleQuotesL size={25} /></div></div>
        <h2 className="text-[20px] font-bold mb-2 md:mt-[-5px] m-2">{slides[currentSlide].name}</h2>
        </div>
        <div className=" text-[13px] text-red-600 md:mt-[-5px] md:pl-[-30px]"> {slides[currentSlide].rank}</div>

      </div>
      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 md:mt-0 mt-5 md:ml-0 ml-[140px] rounded-full cursor-pointer ${
              currentSlide === index ? ' bg-red-600 h-4 w-4' : 'bg-gray-500'
            }`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
