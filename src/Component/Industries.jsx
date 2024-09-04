import React from 'react'
import img from '../Component/homepic2.jpg'
import { BiSolidInjection } from "react-icons/bi";
import { MdLibraryBooks } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { FaBookOpen } from "react-icons/fa";
import { FaCar } from "react-icons/fa";



function Industries() {
  return (

    <div className='industries bg-white'>
    <div className=' md:flex'>

        <div className='md:m-[50px] m-14 md:ml-[250px]'>
<img src={img} alt=""  />
       
        <div className='md:ml-[20px] ml-[40px] md:mt-[-67px] mt-[-65px] font-bold text-[18px] text-slate-800'>Industries</div>
        <div className='mt-2 font-bold md:text-[50px] text-[35px] font-serif'>Industries we Deal with</div>
        </div>
        </div>

        <div className='container md:flex md:mt-5 m-[17px]'>

        <div className='container1  bg-white border h-[200px] w-[270px] text-center md:ml-[200px] ml-[30px] md:pt-[10px] font-bold text-[25px] flex flex-col items-center justify-center '>
  <BiSolidInjection 
   size={50}
 className='hover:animate-pulse' 
 />
  <div className='text-[25px] mt-[10px] hover:bg-black hover:text-red-700'>
    Healthcare
  </div>
</div>
<div className='container2 bg-white border h-[200px] w-[270px] text-center ml-[30px] pt-[10px] font-bold text-[25px] flex flex-col items-center justify-center'>
<MdLibraryBooks size={50} className='hover:animate-pulse' />
  <div className='text-[25px] mt-[10px] hover:bg-black hover:text-red-700'>
    Financial Service
  </div>
</div>
<div className='container3 bg-white border h-[200px] w-[270px] text-center ml-[30px] pt-[10px] font-bold text-[25px] flex flex-col items-center justify-center'>
<FaLaptop  size={50} className='hover:animate-pulse' />
  <div className='text-[25px] mt-[10px] hover:bg-black hover:text-red-700'>
    Technology
  </div>
</div>
<div className='container4 bg-white border h-[200px] w-[270px] text-center ml-[30px] pt-[10px] font-bold text-[25px] flex flex-col items-center justify-center'>
  <FaShoppingBasket size={50} className='hover:animate-pulse' />
  <div className='text-[25px] mt-[10px] hover:bg-black hover:text-red-700'>
    Retail
  </div>
</div>
</div>

<div className='container md:flex md:mt-5 m-[17px]'>

<div className='container1 bg-white border h-[200px] w-[270px] text-center md:ml-[200px] ml-[30px] md:pt-[50px] font-bold text-[25px] flex flex-col items-center justify-center'>
<FaPhone  size={50} className='hover:animate-pulse' />
  <div className='text-[25px] mt-[10px] hover:bg-black hover:text-red-700'>
    Telecome
  </div>
</div>
<div className='container2 bg-white border h-[200px] w-[270px] text-center ml-[30px] pt-[50px] font-bold text-[25px] flex flex-col items-center justify-center'>
<SlEnergy size={50} className='hover:animate-pulse' />
  <div className='text-[25px] mt-[10px] hover:bg-black hover:text-red-700'>
    Energy
  </div>
</div>
<div className='container3 bg-white border h-[200px] w-[270px] text-center ml-[30px] pt-[50px] font-bold text-[25px] flex flex-col items-center justify-center'>
  <FaBookOpen size={50} className='hover:animate-pulse' />
  <div className='text-[25px] mt-[10px] hover:bg-black hover:text-red-700 '>
    Education
  </div>
</div>
<div className='container4 bg-white border h-[200px] w-[270px] text-center ml-[30px] pt-[50px] font-bold text-[25px] flex flex-col items-center justify-center'>
  < FaCar  size={50} className='hover:animate-pulse' />
  <div className='text-[25px] mt-[10px] hover:bg-black hover:text-red-700'>
    Transportation
  </div>
</div>






  
</div>


        







    </div>
   
  )
}

export default Industries
