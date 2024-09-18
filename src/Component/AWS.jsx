import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { BsGraphUp } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import img1 from '../Component/AWS1.webp'
import img2 from '../Component/AWS2.webp'

function AWS() {
    return (
        <div className='Software Development page bg-white h-auto '>
          {/* Component one */}
          <div className='pic'>
            <Header />
            <div className='relative'>
              <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
              <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
              AWS, Azure & GCP
              </h1>
            </div>
          </div>
    
          {/* Component two */}
          <div className='relative flex flex-col justify-center bg-white h-auto m-40'>
            <div>
              <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Multi-Cloud Expertise</h1>
            </div>
    
            <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'> 
                  <BsGraphUp size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 '>Platform Selection & Migration Strategy</h1>
                <p className='w-[350px] text-[18px] text-black ml-3'>We assess your specific needs and recommend the optimal cloud platform (AWS, Azure, GCP) for your business</p>
              </div>
    
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <FaLock size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 '>Seamless Cloud Migration & Integration</h1>
                <p className='w-[350px] text-[18px] text-black ml-4'>Our team guides you through the entire cloud migration process, ensuring a smooth transition with minimal disruption</p>
              </div>
       
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <RiCustomerService2Line  size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Hybrid & Multi-Cloud Solutions</h1>
                <p className='w-[350px] text-[18px] text-black ml-8'>Leverage our expertise to design and implement hybrid or multi-cloud solutions that seamlessly integrate with your existing infrastructure</p>
              </div>
            </div>
          </div>
    
          {/* Component three */}
          <div className='flex flex-col relative m-40 mt-[-150px]'>
            <div className='ml-[12px] flex flex-row '>
              <h1 className='text-[35px] font-bold font-serif mt-32'>Find the Right Cloud Platform</h1>
              <img className='h-[370px] mt-8 w-[350px] ml-[350px]' src={img1} alt="" />
            </div>
            <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Not all clouds are created equal. We assess your specific needs and recommend the optimal cloud platform (AWS, Azure, GCP) that best suits your business goals, infrastructure, and budget.</p>
            <hr className='border mt-[-30px] border-black w-[1240px] ml-4' />
    
            <div className='ml-4 flex flex-row gap-8'>
              <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
              <h1 className='text-[35px] font-bold font-serif mt-32'>Seamless Cloud Migration & Integration</h1>
            </div>
            <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Migrate to the cloud with confidence. Our team guides you through the entire process, ensuring a smooth transition with minimal disruption to your operations. We seamlessly integrate your cloud environment with your existing systems for a unified experience.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
          </div>
        </div>
      );

}

export default AWS
