import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { MdScreenSearchDesktop } from "react-icons/md";
import { MdOutlineSegment } from "react-icons/md";
import img1 from '../Component/CMS1.webp'
import img2 from '../Component/CONSULTAION2.webp'

function ConsultingAndAdvisor() {
    return (
        <div className='Software Development page bg-white h-auto '>
    
        {/*Component one*/}
        <div className='pic'>
    
            <Header />
    
            <div className='relative'>
                <img className='w-full  h-[500px] object-cover' src={img} alt="Our-Clients" />
                <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                Consulting And Advisor

                </h1>
            </div>
        </div>
    
       {/*Component two*/}
    
       <div className=' relative flex flex-col justify-center bg-white h-auto m-40'>
    
    <div>
        <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Strategic Implementation & User Enablement</h1>
    </div>
    
    <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
    
        <div className='flex flex-col text-center'>
        <div className=' justify-center flex'> <   MdScreenSearchDesktop  size={50} /></div>
        <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Salesforce Implementation Roadmap</h1>
        <p className='w-[350px] text-[18px] text-black ml-8'>Craft a customized plan for a smooth and successful Salesforce implementation</p>
        </div>
    
        <div className='flex flex-col text-center'>
       <div className=' justify-center flex'> <   TbDeviceDesktopAnalytics  size={50} /></div>
        <h1 className='font-medium text-[30px] font-serif text-black mt-5'>User Adoption Strategy & Training</h1>
        <p className='w-[350px] text-[18px] text-black ml-5'>Foster user buy-in through comprehensive training and adoption strategies</p>
        </div>
       
        <div className='flex flex-col text-center'>
        <div className=' justify-center flex'> <   MdOutlineSegment  size={50} /></div>
        <h1 className='font-medium text-[30px] mr-6 font-serif text-black mt-5'>Ongoing Support & Optimization</h1>
        <p className='w-[350px] text-[18px] text-black ml-2'>Provide ongoing guidance to refine your CRM strategy and optimize Salesforce for long-term success</p>
        </div>
        </div>
        </div>
    {/*Component three*/}
    
         <div className='flex flex-col relative m-40 mt-[-150px]'>
    
        <div className='ml-[42px] flex flex-row gap-[77px]'>
        <h1 className='text-[35px]  font-bold font-serif mt-32  '>Navigate Your Salesforce Journey</h1>
        <img className='h-[370px] mt-10 w-[350px] ml-[165px] ' src={img1} alt="" />
        </div>
        <p className='w-[800px] ml-10 relative text-[16px] bottom-[200px]'>Our expert consultants guide you through every step of the Salesforce implementation process, ensuring a smooth transition and maximizing user adoption. We work closely with you to understand your specific needs and goals, and develop a customized implementation plan that sets you up for success.

</p>
        <hr className='border mt-[-40px] border-black w-[1165px] ml-12' />
    
        <div className='ml-12 flex flex-row gap-8'>
        <img className='h-[370px] mt-10 w-[350px] ' src={img2} alt="" />
        <h1 className='text-[35px]  font-bold font-serif mt-32 '>Maximize Your CRM Investment</h1>
        </div>
        <p className='w-[700px] ml-[430px] relative bottom-[220px]'>Don’t just implement Salesforce, optimize it! We help you leverage the full potential of the platform to achieve your business goals. Our ongoing guidance and expertise ensure your Salesforce implementation continues to deliver value over the long term.</p>
        <hr className='border mt-[-40px] border-black w-[1165px] ml-12' />

    
        </div>
        </div>
    
      )
    
}

export default ConsultingAndAdvisor
