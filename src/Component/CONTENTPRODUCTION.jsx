import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { IoMdBriefcase } from "react-icons/io";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import img1 from '../Component/PRODUCTION1.webp'
import img2 from '../Component/PRODUCTION2.webp'


function ContentProduction() {
    return (
        <div className='Software Development page bg-white h-auto '>
          {/* Component one */}
          <div className='pic'>
            <Header />
            <div className='relative'>
              <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
              <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
              Content Production


              </h1>
            </div>
          </div>
    
          {/* Component two */}
          <div className='relative flex flex-col justify-center bg-white h-auto m-40'>
            <div>
              <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Content Production for All Platforms</h1>
            </div>
    
            <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'> 
                  <PiUsersFill size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Search Engine Optimized Content</h1>
                <p className='w-[350px] text-[18px] text-black ml-4'>Create informative and engaging content optimized for search engines to improve organic visibility</p>
              </div>
    
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <IoMdBriefcase size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 w-[400px] ml-7'>Website Content & Blog Development</h1>
                <p className='w-[350px] text-[18px] text-black scroll ml-14'>Develop engaging website content and blog posts that educate your audience and establish brand authority</p>
              </div>
       
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <FaMagnifyingGlassChart size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Email Marketing & Lead Generation</h1>
                <p className='w-[350px] text-[18px] text-black ml-0'>Craft compelling email campaigns that nurture leads and drive conversions.</p>
              </div>
            </div>
          </div>
    
          {/* Component three */}
          <div className='flex flex-col relative m-40 mt-[-150px]'>
            <div className='ml-[12px] flex flex-row gap-[40px]'>
              <h1 className='text-[35px] font-bold font-serif mt-32'>Engage & Inform</h1>
              <img className='h-[370px] mt-10 w-[350px] ml-[530px]' src={img1} alt="" />
            </div>
            <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Educate your audience and establish thought leadership. We create high-quality content across various platforms, keeping your audience engaged and informed.</p>
            <hr className='border mt-[-30px] border-black w-[1240px] ml-4' />
    
            <div className='ml-4 flex flex-row gap-8'>
              <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
              <h1 className='text-[35px] font-bold font-serif mt-32'>Drive Results</h1>
            </div>
            <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Content that converts is key. We don’t just create content, we develop content strategies that drive results. Our content will help you attract, engage, and convert visitors into leads and customers.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
          </div>
        </div>
      );
    }


export default ContentProduction
