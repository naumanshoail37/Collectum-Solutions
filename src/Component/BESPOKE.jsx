import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import { SlScreenDesktop } from "react-icons/sl";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import img1 from '../Component/BESPOKE1.webp';
import img2 from '../Component/BESPOKE2.webp'; // Changed to a different image for variety

function Bespoke() {
  return (
    <div className='Software Development page bg-white h-auto'>
      {/* Component one */}
      <div className='pic'>
        <Header />
        <div className='relative'>
          <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
          <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[50px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
            Bespoke Add-on Development
          </h1>
        </div>
      </div>

      {/* Component two */}
      <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
        <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>Bespoke Add-on Development</h1>

        <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 text-red-700'>
          <div className='flex flex-col text-center'>
            <div className='justify-center flex'>
              <SlScreenDesktop size={50} />
            </div>
            <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Extend Functionality for Your Needs</h1>
            <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Develop custom add-ons that perfectly align SAP B1 with your specific business requirements</p>
          </div>

          <div className='flex flex-col text-center'>
            <div className='justify-center flex'>
              <FaMagnifyingGlassChart size={50} />
            </div>
            <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Enhanced User Experience</h1>
            <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Create a user-friendly experience by tailoring the system's functionalities to your unique workflows</p>
          </div>

          <div className='flex flex-col text-center'>
            <div className='justify-center flex'>
              <PiUsersFill size={50} />
            </div>
            <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Integration with Third-Party Applications</h1>
            <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Integrate SAP B1 with other business-critical applications for a unified data view and streamlined operations</p>
          </div>
        </div>
      </div>

      {/* Component three */}
      <div className='flex flex-col relative m-10 md:m-40'>
        <div className='flex flex-col md:flex-row items-center gap-[120px] mb-10'>
          <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Extend Functionality, Enhance Experience</h1>
          <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover md:mt-0 mt-[-70px]' src={img1} alt="Extend Functionality" />
        </div>
        <p className='w-full md:w-[800px] md:bottom-[160px] relative text-[14px] md:text-[16px] mb-5'>
          Go beyond the basic features. We develop custom add-ons that perfectly fit your unique business requirements. These add-ons extend SAP B1’s functionality to cater to your specific needs, automating complex tasks and streamlining your workflows.
        </p>
        <hr className='border border-black w-full' />

        <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
          <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover' src={img2} alt="Tailored User Experience" />
          <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Tailored User Experience</h1>
        </div>
        <p className='w-full md:w-[700px] md:ml-[380px] relative text-[14px] md:text-[16px] md:bottom-[160px] mt-5'>
          Increase user satisfaction and efficiency. We create a user-friendly system experience that is tailored to your specific workflows. This ensures your team can navigate SAP B1 intuitively, find the information they need quickly, and complete tasks efficiently.
        </p>
        <hr className='border border-black w-full' />
      </div>

      <Footer />
    </div>
  );
}

export default Bespoke;
