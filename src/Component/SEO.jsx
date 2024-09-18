import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { TbSettingsCog } from "react-icons/tb";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import img1 from '../Component/SEO1.webp'
import img2 from '../Component/SEO2.webp'

function SEO() {
    return (
        <div className='Software Development page bg-white h-auto '>
          {/* Component one */}
          <div className='pic'>
            <Header />
            <div className='relative'>
              <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
              <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
              SEO



              </h1>
            </div>
          </div>
    
          {/* Component two */}
          <div className='relative flex flex-col justify-center bg-white h-auto m-40'>
            <div>
              <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Effective Search Engine Optimization</h1>
            </div>
    
            <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'> 
                  <FaMagnifyingGlassChart  size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Keyword Research & Strategy</h1>
                <p className='w-[350px] text-[18px] text-black ml-5'>Identify relevant keywords that your target audience is searching for and optimize your website content accordingly</p>
              </div>
    
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <TbSettingsCog size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 w-[400px] ml-7'>On-Page & Off-Page Optimization</h1>
                <p className='w-[350px] text-[18px] text-black scroll ml-12'>Implement a comprehensive SEO strategy that includes both on-page optimization and link building to improve your website's search engine ranking</p>
              </div>
       
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <BsGraphUpArrow size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Analytics & Reporting</h1>
                <p className='w-[350px] text-[18px] text-black ml-4'>Track your website's SEO performance and identify areas for improvement to achieve long-term organic growth.</p>
              </div>
            </div>
          </div>
    
          {/* Component three */}
          <div className='flex flex-col relative m-40 mt-[-150px]'>
            <div className='ml-[12px] flex flex-row gap-[40px]'>
              <h1 className='text-[35px] font-bold font-serif mt-32'>Increase Organic Visibility</h1>
              <img className='h-[370px] mt-10 w-[350px] ml-[365px]' src={img1} alt="" />
            </div>
            <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Get found organically. We improve your website’s ranking in search engine results pages (SERPs) to attract more organic traffic. This leads to a sustainable increase in website visits and brand awareness.</p>
            <hr className='border mt-[-30px] border-black w-[1240px] ml-4' />
    
            <div className='ml-4 flex flex-row gap-8'>
              <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
              <h1 className='text-[35px] font-bold font-serif mt-32'>Drive Sustainable Growth</h1>
            </div>
            <p className='w-[700px] ml-[400px] relative bottom-[220px]'>SEO is a marathon, not a sprint. We implement long-term SEO strategies that deliver sustainable organic growth and keep your brand visible in search results over time.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
          </div>
        </div>
      );
    }


export default SEO
