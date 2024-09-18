import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { BsPencilSquare } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import img1 from '../Component/ERP1.webp'
import img2 from '../Component/ERP2.webp'

function ERP() {
    return (
        <div className='Software Development page bg-white h-auto '>
          {/* Component one */}
          <div className='pic'>
            <Header />
            <div className='relative'>
              <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
              <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
              ERP
              </h1>
            </div>
          </div>
    
          {/* Component two */}
          <div className='relative flex flex-col justify-center bg-white h-auto m-40'>
            <div>
              <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Cloud ERP Solutions</h1>
            </div>
    
            <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'> 
                  <BsPencilSquare size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 '>Modernize Your Operations</h1>
                <p className='w-[350px] text-[18px] text-black ml-3'>Streamline core business processes with a cloud-based ERP system, gaining real-time insights and improved efficiency.</p>
              </div>
    
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <FaMagnifyingGlassChart size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 '>Scalability & Flexibility</h1>
                <p className='w-[350px] text-[18px] text-black ml-9'>Easily adapt your cloud ERP to changing business needs by scaling resources up or down as required.</p>
              </div>
       
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <FaMedal  size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Reduced IT Costs</h1>
                <p className='w-[350px] text-[18px] text-black ml-8'>Eliminate upfront hardware expenses and simplify IT management with a cloud-based ERP solution</p>
              </div>
            </div>
          </div>
    
          {/* Component three */}
          <div className='flex flex-col relative m-40 mt-[-150px]'>
            <div className='ml-[12px] flex flex-row '>
              <h1 className='text-[35px] font-bold font-serif mt-32'>Modernize Your Business</h1>
              <img className='h-[370px] mt-10 w-[350px] ml-[420px]' src={img1} alt="" />
            </div>
            <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Move beyond outdated systems. Cloud-based ERP solutions offer real-time insights, improved efficiency, and scalability. Gain instant access to critical data for informed decision-making, streamline operations, and easily adapt your system to meet your growing business needs.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
    
            <div className='ml-4 flex flex-row gap-8'>
              <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
              <h1 className='text-[35px] font-bold font-serif mt-32'>Reduce IT Burden</h1>
            </div>
            <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Cut hardware costs and free up your IT team. Cloud ERP eliminates the need for expensive on-premise infrastructure and simplifies IT management. Our team handles system maintenance and updates, allowing your IT team to focus on strategic initiatives.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
          </div>
        </div>
      );
    }
export default ERP
