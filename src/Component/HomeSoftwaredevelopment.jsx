import React from 'react';
import { IoMdCheckboxOutline } from 'react-icons/io';


function HomeSoftwaredevelopment({ title, discription, services = [] ,  imgScr }) {


  

  return (
    <div className='bg-zinc-950 md:flex'>
      <div className='font-bold md:text-[40px] text-[35px] md:p-[150px] p-[50px] md:pl-[250px] pl-[50px] text-white font-serif'>
        {title}
        <div className='mb-5 text-gray-500 text-[16px] md:w-[700px] w-[300px] font-normal'>{discription}</div>
        <div className='md:grid grid-cols-2 gap-2 md:gap-2 mt-6'>
          {services.map((service, index) => (
            <div key={index} className='md:flex items-center md:gap-[5px]'>
              <IoMdCheckboxOutline md:size={30} size={25} className='text-red-700' />
              <div className=' md:mt-0 mt-[-25px] md:ml-0 ml-[50px] md:text-[15px] text-[16px] text-white font-sans'>{service}</div>
            </div>
          ))}
        </div>
        <hr className='md:w-[700px] w-[350px] mt-[60px] md:ml-0 ml-[-40px]' />
        <button className="bg-red-700 md:h-16 h-12 md:w-[190px] w-[150px] rounded-full md:text-[20px] text-[15px] md:mt-[70px] mt-[50px] md:ml-[-15px] ml-[50px] text-white font-semibold">Learn More</button>
      </div>
      <div className='md:flex flex-1 justify-center items-center '>
        <img src={imgScr} alt="Software Development" className='object-cover md:animate-slideUp animate-slideUp mr-[280px]' />
      </div>
    </div>
  );
}

export default HomeSoftwaredevelopment;
