import React from 'react';
import { IoMdCheckboxOutline } from 'react-icons/io';


function HomeSoftwaredevelopment({ title, discription, services = [] ,  imgScr }) {


  

  return (
    <div className='bg-zinc-950 md:flex'>
      <div className='font-bold md:text-[50px] text-[35px] md:p-[150px] p-[50px] md:pl-[250px] pl-[50px] text-white font-serif'>
        {title}
        <div className='mb-5 text-slate-800 text-[19px] md:w-[700px] w-[250px]'>{discription}</div>
        <div className='grid grid-cols-2 gap-6 md:gap-12 mt-6'>
          {services.map((service, index) => (
            <div key={index} className='flex items-center gap-2'>
              <IoMdCheckboxOutline size={30} className='text-red-700' />
              <div className='text-[20px] text-slate-800'>{service}</div>
            </div>
          ))}
        </div>
        <hr className='md:w-[700px] w-[300px] mt-[60px] md:ml-0 ml-[-40px]' />
        <button className="bg-red-700 md:h-16 h-12 md:w-[190px] w-[150px] rounded-full md:text-[20px] text-[15px] md:mt-[70px] mt-[50px] md:ml-[-15px] ml-[-50px] text-white font-semibold">Learn More</button>
      </div>
      <div className='md:flex flex-1 justify-center items-center mr-[100px]'>
        <img src={imgScr} alt="Software Development" className='object-cover md:animate-slideUp animate-slideUp' />
      </div>
    </div>
  );
}

export default HomeSoftwaredevelopment;
