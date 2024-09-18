import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { BsGraphUp } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import img1 from '../Component/CLOUDOPS1.webp'
import img2 from '../Component/CLOUDOPS2.webp'


function CloudOps() {
    return (
        <div className='Software Development page bg-white h-auto '>
          {/* Component one */}
          <div className='pic'>
            <Header />
            <div className='relative'>
              <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
              <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
              CloudOps
              </h1>
            </div>
          </div>
    
          {/* Component two */}
          <div className='relative flex flex-col justify-center bg-white h-auto m-40'>
            <div>
              <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Cloud Operations Management</h1>
            </div>
    
            <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'> 
                  <BsGraphUp size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 '>Optimized Performance & Cost Control</h1>
                <p className='w-[350px] text-[18px] text-black ml-3'>Streamline core business processes with a cloud-based ERP system, gaining real-time insights and improved efficiency.</p>
              </div>
    
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <FaLock size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 '>Enhanced Security & Monitoring</h1>
                <p className='w-[350px] text-[18px] text-black ml-2'>Benefit from robust security measures and ongoing monitoring to safeguard your data and systems in the cloud</p>
              </div>
       
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <RiCustomerService2Line  size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Ongoing Support & Expertise</h1>
                <p className='w-[350px] text-[18px] text-black ml-8'>Receive ongoing support and access to our cloud expertise to ensure the continued success of your cloud environment</p>
              </div>
            </div>
          </div>
    
          {/* Component three */}
          <div className='flex flex-col relative m-40 mt-[-150px]'>
            <div className='ml-[12px] flex flex-row '>
              <h1 className='text-[35px] font-bold font-serif mt-32'>Optimize Your Cloud Environment</h1>
              <img className='h-[370px] mt-10 w-[350px] ml-[265px]' src={img1} alt="" />
            </div>
            <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Don’t go it alone in the cloud. Our CloudOps team takes the reins, optimizing performance, controlling costs, and securing your cloud infrastructure. We ensure your cloud environment runs smoothly, efficiently, and delivers the maximum value for your business.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
    
            <div className='ml-4 flex flex-row gap-8'>
              <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
              <h1 className='text-[35px] font-bold font-serif mt-32'>Peace of Mind in the Cloud</h1>
            </div>
            <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Gain the confidence and expertise you need. We provide ongoing support and proactive management, ensuring your cloud environment continues to deliver optimal performance and security over the long term.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
          </div>
        </div>
      );

}

export default CloudOps
