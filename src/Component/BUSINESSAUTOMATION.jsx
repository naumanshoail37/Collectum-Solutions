import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { FaSortAmountUpAlt } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowUpRightDots } from "react-icons/fa6";
import img1 from '../Component/BUSINESSAUTOMATION1.webp'
import img2 from '../Component/BUSINESSAUTOMATION2.webp'
function BusinessAutomation() {
    return (
        <div className='Software Development page bg-white h-auto '>
          {/* Component one */}
          <div className='pic'>
            <Header />
            <div className='relative'>
              <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
              <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
              Business Process Automation
              </h1>
            </div>
          </div>
    
          {/* Component two */}
          <div className='relative flex flex-col justify-center bg-white h-auto m-40 '>
            <div>
              <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Business Process Automation (BPA) in the Cloud</h1>
            </div>
    
            <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'> 
                  <FaSortAmountUpAlt size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 '>Increased Efficiency & Productivity</h1>
                <p className='w-[350px] text-[18px] text-black ml-7'>Automate key business processes within your cloud environment to free up valuable staff resources and improve efficiency.</p>
              </div>
    
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <BsGraphUpArrow size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5 '>Improved Accuracy & Reduced Errors</h1>
                <p className='w-[350px] text-[18px] text-black ml-9'>Automate tasks to minimize human error and ensure consistent execution of business processes.</p>
              </div>
       
              <div className='flex flex-col text-center'>
                <div className='justify-center flex'>
                  <FaArrowUpRightDots  size={50} />
                </div>
                <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Enhanced Scalability & Agility</h1>
                <p className='w-[350px] text-[18px] text-black '>Scaling your cloud-based automated processes is easier, allowing your business to adapt and grow with ease.</p>
              </div>
            </div>
          </div>
    
          {/* Component three */}
          <div className='flex flex-col relative m-40 mt-[-150px]'>
            <div className='ml-[12px] flex flex-row '>
              <h1 className='text-[35px] font-bold font-serif mt-32'>Boost Efficiency & Productivity</h1>
              <img className='h-[370px] mt-8 w-[350px] ml-[330px]' src={img1} alt="" />
            </div>
            <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Free up your team and get more done. Automate key business processes within your cloud environment to streamline workflows and improve efficiency. Let us handle repetitive tasks, allowing your team to focus on high-value activities.</p>
            <hr className='border mt-[-30px] border-black w-[1240px] ml-4' />
    
            <div className='ml-4 flex flex-row gap-8'>
              <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
              <h1 className='text-[35px] font-bold font-serif mt-32'>Enhanced Accuracy & Scalability</h1>
            </div>
            <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Eliminate errors and adapt with ease. Automation minimizes human error and ensures consistent execution of business processes. Cloud-based automation also allows you to easily scale your operations up or down as your business grows.</p>
            <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
          </div>
        </div>
      );

}

export default BusinessAutomation
