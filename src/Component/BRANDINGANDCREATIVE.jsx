import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { IoMdBriefcase } from "react-icons/io";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import img1 from '../Component/BRANDING1.webp'
import img2 from '../Component/BRANDING2.webp'


function BrandingAndCreative() {
    return (
        <div className='Software Development page bg-white h-auto '>
          {/* Component one */}
          <div className='pic'>
            <Header />
            <div className='relative'>
              <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
              <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
              Branding & Creative Services


              </h1>
            </div>
          </div>
    
          {/* Component two */}
          <div className='relative flex flex-col justify-center bg-white h-auto m-40'>
            <div>
              <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Powerful Branding & Creative Services</h1>
            </div>
    
            <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'> 
                  <PiUsersFill size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Brand Identity Development</h1>
                <p className='w-[350px] text-[18px] text-black ml-4'>Craft a unique and memorable brand identity that sets you apart from the competition.</p>
              </div>
    
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <IoMdBriefcase size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 w-[400px] ml-7'>Compelling Visual Content Creation</h1>
                <p className='w-[350px] text-[18px] text-black scroll ml-14'>Develop high-quality visuals that resonate with your target audience and reinforce your brand message</p>
              </div>
       
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <FaMagnifyingGlassChart size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Messaging & Storytelling</h1>
                <p className='w-[350px] text-[18px] text-black ml-0'>Develop compelling brand messaging and storytelling that connects with your audience on an emotional level.</p>
              </div>
            </div>
          </div>
    
          {/* Component three */}
          <div className='flex flex-col relative m-40 mt-[-150px]'>
            <div className='ml-[12px] flex flex-row gap-[40px]'>
              <h1 className='text-[35px] font-bold font-serif mt-32'>Build Your Brand Identity</h1>
              <img className='h-[370px] mt-10 w-[350px] ml-[380px]' src={img1} alt="" />
            </div>
            <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Stand out from the crowd. We craft unique and memorable brand identities that resonate with your target audience. Our creative services will help you develop a strong brand voice and visual presence.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
    
            <div className='ml-4 flex flex-row gap-8'>
              <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
              <h1 className='text-[35px] font-bold font-serif mt-32'>Tell Your Story</h1>
            </div>
            <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Make a lasting impression. We develop compelling brand messaging and visuals that capture attention and tell your story in a way that resonates with your audience.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
          </div>
        </div>
      );
    }

export default BrandingAndCreative
