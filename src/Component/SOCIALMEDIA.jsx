import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { IoMdBriefcase } from "react-icons/io";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import img1 from '../Component/SOCIALMEDIA1.webp'
import img2 from '../Component/SOCIALMEDIA2.webp'

function SocialMedia() {
    return (
        <div className='Software Development page bg-white h-auto '>
          {/* Component one */}
          <div className='pic'>
            <Header />
            <div className='relative'>
              <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
              <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
              Social Media Management

              </h1>
            </div>
          </div>
    
          {/* Component two */}
          <div className='relative flex flex-col justify-center bg-white h-auto m-40'>
            <div>
              <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Social Media Management</h1>
            </div>
    
            <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'> 
                  <PiUsersFill size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Community Building & Brand Advocacy</h1>
                <p className='w-[350px] text-[18px] text-black ml-10'>Foster a vibrant online community around your brand and cultivate brand loyalty.</p>
              </div>
    
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <IoMdBriefcase size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 w-[300px] ml-7'>Content Calendar & Scheduling</h1>
                <p className='w-[350px] text-[18px] text-black mr-5'>Develop and schedule engaging social media content that aligns with your overall marketing strategy.</p>
              </div>
       
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <FaMagnifyingGlassChart size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Social Listening & Engagement</h1>
                <p className='w-[350px] text-[18px] text-black ml-0'>Monitor online conversations and actively engage with your audience on social media platforms.</p>
              </div>
            </div>
          </div>
    
          {/* Component three */}
          <div className='flex flex-col relative m-40 mt-[-150px]'>
            <div className='ml-[12px] flex flex-row gap-[40px]'>
              <h1 className='text-[35px] font-bold font-serif mt-32'>Connect & Engage</h1>
              <img className='h-[370px] mt-10 w-[350px] ml-[520px]' src={img1} alt="" />
            </div>
            <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Build a vibrant online community around your brand. We help you connect with your target audience on social media platforms, fostering meaningful connections and building brand loyalty.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
    
            <div className='ml-4 flex flex-row gap-8'>
              <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
              <h1 className='text-[35px] font-bold font-serif mt-32'>Amplify Your Voice</h1>
            </div>
            <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Don’t shout into the void. Leverage social media to amplify your brand message and reach new customers. We’ll help you develop engaging content and strategies to cut through the noise and get noticed.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
          </div>
        </div>
      );
    }

export default SocialMedia
