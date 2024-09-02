
import React from 'react'
import { IoMdCheckboxOutline } from "react-icons/io";



function SalesforceConsulting({title, discription, services = [] ,  imgScr}) {


    return (
  
    <div className=' bg-white md:flex '>

<div className='md:flex-1 font-bold text-black font-serif mr-[-120px]  pt-[150px]  '>
    <img src={imgScr}  alt="Sales Consulting" className='object-cover md:animate-slideUp animate-slideUp' />
  </div>

      <div className=' font-bold md:text-[50px] text-[35px] md:p-[150px] p-[50px] md:pl-[250px] pl-[50px] text-black  font-serif'>{title}
      <div className= 'mt-1 text-slate-800 text-[19px] md:w-[700px] w-[250px]'>{discription} </div>

      
      {services.map((services , index) => (
      <div key={index} className='flex mt-10'>
      <IoMdCheckboxOutline size={20} className='text-red-700 mr-2' />
      <div className='text-[16px] text-slate-800'>{services}</div>
      </div>
      )
      )}
     <button className="bg-red-700 md:h-16 h-12 md:w-[190px] w-[150px] rounded-full md:text-[20px] text-[15px] md:mt-[70px] mt-[50px] md:ml-[-15px] ml-[-50px]   text-white font-semibold">Learn More</button>



      </div>

      
      

      
    





    </div>
    );
  
}


export default SalesforceConsulting









