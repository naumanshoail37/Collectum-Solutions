import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { IoMdBriefcase } from "react-icons/io";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import img1 from '../Component/DIGITALSTRATEGY1.webp'
import img2 from '../Component/DIGITALSTRATEGY2.webp'

export default function DigitalStrategy() {
    return (
        <div className='Software Development page bg-white h-auto '>
          {/* Component one */}
          <div className='pic'>
            <Header />
            <div className='relative'>
              <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
              <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
              Digital Strategy

              </h1>
            </div>
          </div>
    
          {/* Component two */}
          <div className='relative flex flex-col justify-center bg-white h-auto m-40'>
            <div>
              <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Comprehensive Digital Strategy</h1>
            </div>
    
            <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'> 
                  <PiUsersFill size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Target Audience Identification</h1>
                <p className='w-[350px] text-[18px] text-black ml-3'>Define your ideal customer and tailor your online presence to resonate with them</p>
              </div>
    
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <IoMdBriefcase size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 w-[300px] ml-12'>Channel Selection & Integration</h1>
                <p className='w-[350px] text-[18px] text-black ml-6'>Develop a cohesive strategy that leverages the most effective digital channels for your business goals</p>
              </div>
       
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <FaMagnifyingGlassChart size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Performance Measurement & Optimization</h1>
                <p className='w-[350px] text-[18px] text-black ml-10'>Continuously measure and refine your digital marketing strategy for optimal results</p>
              </div>
            </div>
          </div>
    
          {/* Component three */}
          <div className='flex flex-col relative m-40 mt-[-150px]'>
            <div className='ml-[12px] flex flex-row gap-[40px]'>
              <h1 className='text-[35px] font-bold font-serif mt-32'>Chart Your Course</h1>
              <img className='h-[370px] mt-10 w-[350px] ml-[475px]' src={img1} alt="" />
            </div>
            <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Don’t navigate the digital landscape blindly. We develop data-driven roadmaps that target your ideal audience and achieve your online marketing goals. Our strategic approach ensures your online presence is optimized for maximum return on investment.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
    
            <div className='ml-4 flex flex-row gap-8'>
              <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
              <h1 className='text-[35px] font-bold font-serif mt-32'>Maximize ROI</h1>
            </div>
            <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Every marketing dollar counts. We focus on maximizing the return on your investment by optimizing your online channels and campaigns. With our expertise, you’ll see tangible results that contribute to your bottom line.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
          </div>
        </div>
      );
    }
