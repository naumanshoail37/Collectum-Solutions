import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { IoMdTrendingDown } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import img1 from '../Component/CLOUDMIGRATION1.webp'
import img2 from '../Component/CLOUDMIGRATION2.webp'


function CloudMigration() {
    return (
        <div className='Software Development page bg-white h-auto '>
          {/* Component one */}
          <div className='pic'>
            <Header />
            <div className='relative'>
              <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
              <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
              Cloud Migration
              </h1>
            </div>
          </div>
    
          {/* Component two */}
          <div className='relative flex flex-col justify-center bg-white h-auto m-40 '>
            <div>
              <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Secure Cloud Migration Strategy</h1>
            </div>
    
            <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'> 
                  <FaLock size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 '>Data Security & Compliance</h1>
                <p className='w-[350px] text-[18px] text-black ml-3'>Our secure data migration techniques ensure the integrity and confidentiality of your sensitive information.</p>
              </div>
    
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <IoMdTrendingDown size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 '>Minimized Downtime & Disruption</h1>
                <p className='w-[350px] text-[18px] text-black ml-9'>We employ a proven methodology to minimize downtime and disruption during cloud migration.</p>
              </div>
       
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <MdScreenShare  size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Customized Migration Plan</h1>
                <p className='w-[350px] text-[18px] text-black ml-8'>Collaborate with our experts to develop a customized migration plan that aligns with your specific business goals.</p>
              </div>
            </div>
          </div>
    
          {/* Component three */}
          <div className='flex flex-col relative m-40 mt-[-150px]'>
            <div className='ml-[12px] flex flex-row '>
              <h1 className='text-[35px] font-bold font-serif mt-32'>Migrate with Confidence</h1>
              <img className='h-[370px] mt-8 w-[350px] ml-[447px]' src={img1} alt="" />
            </div>
            <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Security is our top priority. Our secure data migration techniques ensure the integrity and confidentiality of your sensitive information throughout the entire process. We take all necessary precautions to safeguard your data during migration.</p>
            <hr className='border mt-[-30px] border-black w-[1240px] ml-4' />
    
            <div className='ml-4 flex flex-row gap-8'>
              <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
              <h1 className='text-[35px] font-bold font-serif mt-32'>Minimize Downtime & Disruption</h1>
            </div>
            <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Keep your business running smoothly. We employ a proven methodology to minimize downtime and disruption during cloud migration. You can focus on your core business activities while we handle the technical aspects of the transition.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
          </div>
        </div>
      );

}
export default CloudMigration
