import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { SlScreenDesktop } from "react-icons/sl";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import img1 from '../Component/IMPLEMENTATION1.webp'
import img2 from '../Component/IMPLEMENTATION2.webp'

function Implementation() {
  return (
    <div className='Software Development page bg-white h-auto '>
      {/* Component one */}
      <div className='pic'>
        <Header />
        <div className='relative'>
          <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
          <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
            Implementation
          </h1>
        </div>
      </div>

      {/* Component two */}
      <div className='relative flex flex-col justify-center bg-white h-auto m-40'>
        <div>
          <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Seamless Implementation Services</h1>
        </div>

        <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
          <div className='flex flex-col text-center'>
            <div className='justify-center flex'> 
              <SlScreenDesktop size={50} />
            </div>
            <h1 className='font-medium text-[30px] font-serif text-black mt-5'>System Configuration & Customization</h1>
            <p className='w-[350px] text-[18px] text-black ml-3'>Configure SAP B1 to seamlessly integrate with your existing systems and workflows.</p>
          </div>

          <div className='flex flex-col text-center'>
            <div className='justify-center flex'>
              <FaMagnifyingGlassChart size={50} />
            </div>
            <h1 className='font-medium text-[30px] font-serif text-black mt-5 w-[300px] ml-12'>Data Migration & Integration</h1>
            <p className='w-[350px] text-[18px] text-black ml-9'>Migrate your data securely and efficiently into SAP B1, ensuring data integrity and accessibility.</p>
          </div>
   
          <div className='flex flex-col text-center'>
            <div className='justify-center flex'>
              <PiUsersFill size={50} />
            </div>
            <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Change Management & User Adoption</h1>
            <p className='w-[350px] text-[18px] text-black ml-8'>Foster user buy-in through comprehensive training and change management strategies to ensure successful implementation.</p>
          </div>
        </div>
      </div>

      {/* Component three */}
      <div className='flex flex-col relative m-40 mt-[-150px]'>
        <div className='ml-[12px] flex flex-row gap-[40px]'>
          <h1 className='text-[35px] font-bold font-serif mt-32'>Boost Efficiency & Value</h1>
          <img className='h-[370px] mt-10 w-[350px] ml-[392px]' src={img1} alt="" />
        </div>
        <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Uncover hidden potential within your current processes. Our consultants conduct a thorough analysis of your workflows to identify areas for improvement. By implementing SAP Business One (SAP B1) strategically, we help you maximize its value and streamline operations for increased efficiency.</p>
        <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />

        <div className='ml-4 flex flex-row gap-8'>
          <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
          <h1 className='text-[35px] font-bold font-serif mt-32'>Industry-Specific Solutions</h1>
        </div>
        <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Leverage our expertise to tailor SAP B1 to your specific business needs. We understand the unique challenges and opportunities within your industry. Our in-depth knowledge allows us to configure SAP B1 to perfectly fit your workflows, ensuring a solution that delivers maximum impact for your business.</p>
        <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
      </div>
    </div>
  );
}

export default Implementation;
