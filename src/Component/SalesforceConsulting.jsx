
import React from 'react'
import { IoMdCheckboxOutline } from "react-icons/io";



function SalesforceConsulting({title, discription, services = [] ,  imgScr}) {


    return (
  
    <div className=' bg-white h-[550px] md:flex m-[10px] ml-[300px] gap-4'>

<div className='md:flex-row  '>
    <img src={imgScr}  alt="Sales Consulting" className='object-cover h-[450px] md:animate-slideUp animate-slideUp' />
  </div>

      <div className=' font-bold md:text-[35px] text-[25px] md:p-[50px] p-[50px] md:pl-[40px] pl-[50px] text-black  font-serif'>{title}
      <div className= 'mt-3 text-slate-800 text-[14px] md:w-[500px] w-[250px] '>{discription} </div>

      
      {services.map((services , index) => (
      <div key={index} className='flex mt-6'>
      <IoMdCheckboxOutline size={20} className='text-red-700 mr-2' />
      <div className='text-[12px] text-slate-800'>{services}</div>
      </div>
      )
      )}
     <button className="bg-red-700 md:h-12 h-12 md:w-[150px] w-[150px] rounded-full md:text-[14px] text-[15px] md:mt-[70px] mt-[50px] md:ml-[-15px] ml-[50px]   text-white font-semibold">Learn More</button>



      </div>

      
      

      
    





    </div>
    );
  
}


export default SalesforceConsulting









