import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { SlScreenDesktop } from "react-icons/sl";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import img1 from '../Component/BESPOKE1.webp'
import img2 from '../Component/BESPOKE1.webp'

function Bespoke() {
  return (
    <div className='Software Development page bg-white h-auto '>
    
    {/*Component one*/}
    <div className='pic'>

        <Header />

        <div className='relative'>
            <img className='w-full  h-[500px] object-cover' src={img} alt="Our-Clients" />
            <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
            Bespoke Add-on Development


            </h1>
        </div>
    </div>

   {/*Component two*/}

   <div className=' relative flex flex-col justify-center bg-white h-auto m-40'>

<div>
    <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Bespoke Add-on Development</h1>
</div>

<div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>

    <div className='flex flex-col text-center'>
    <div className=' justify-center flex'> <   SlScreenDesktop  size={50} /></div>
    <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Extend Functionality for Your Needs</h1>
    <p className='w-[350px] text-[18px] text-black ml-3'>Develop custom add-ons that perfectly align SAP B1 with your specific business requirements</p>
    </div>

    <div className='flex flex-col text-center'>
   <div className=' justify-center flex'> <   FaMagnifyingGlassChart  size={50} /></div>
    <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Enhanced User Experience</h1>
    <p className='w-[350px] text-[18px] text-black'>Create a user-friendly experience by tailoring the system's functionalities to your unique workflows</p>
    </div>
   
    <div className='flex flex-col text-center'>
    <div className=' justify-center flex'> <   PiUsersFill  size={50} /></div>
    <h1 className='font-medium text-[30px]  font-serif text-black mt-5'>Integration with Third-Party Applications</h1>
    <p className='w-[350px] text-[18px] text-black ml-8'>Integrate SAP B1 with other business-critical applications for a unified data view and streamlined operations</p>
    </div>
    </div>
    </div>
{/*Component three*/}

     <div className='flex flex-col relative m-40 mt-[-150px]'>

    <div className='ml-[12px] flex flex-row gap-20'>
    <h1 className='text-[35px]  font-bold font-serif mt-32  '>Extend Functionality, Enhance Experience</h1>
    <img className='h-[370px] mt-10 w-[350px] ml-[32px] ' src={img1} alt="" />
    </div>
    <p className='w-[800px] ml-3 relative text-[16px] bottom-[190px]'>Go beyond the basic features. We develop custom add-ons that perfectly fit your unique business requirements. These add-ons extend SAP B1’s functionality to cater to your specific needs, automating complex tasks and streamlining your workflows.</p>
    <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />

    <div className='ml-4 flex flex-row gap-8'>
    <img className='h-[370px] mt-10 w-[350px] ' src={img2} alt="" />
    <h1 className='text-[35px]  font-bold font-serif mt-32 '>Tailored User Experience</h1>
    </div>
    <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Increase user satisfaction and efficiency. We create a user-friendly system experience that is tailored to your specific workflows. This ensures your team can navigate SAP B1 intuitively, find the information they need quickly, and complete tasks efficiently.</p>
    <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />


    </div>
    </div>

  
    );
}


export default Bespoke
