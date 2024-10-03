import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import { SlScreenDesktop } from "react-icons/sl";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import img1 from '../Component/TRAINING1.webp';
import img2 from '../Component/TRAINING2.webp';

function Training() {
    return (
        <div className='Software Development page bg-white h-auto'>
            {/* Component one */}
            <div className='pic'>
                <Header />
                <div className='relative'>
                    <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[50px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        Training
                    </h1>
                </div>
            </div>

            {/* Component two */}
            <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
                <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>Comprehensive Training & Support</h1>

                <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 text-red-700'>
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <SlScreenDesktop size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>End-User Training & Certification</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Equip your team with the necessary skills and knowledge to utilize SAP B1 effectively through comprehensive training and certification programs.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <FaMagnifyingGlassChart size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Ongoing Support & Maintenance</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Benefit from our ongoing support and expertise to address any challenges, answer questions, and ensure the long-term success of your SAP B1 investment.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <PiUsersFill size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>System Optimization & Reporting</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Continuously optimize your SAP B1 system for peak performance and generate valuable reports to gain insights into your business operations.</p>
                    </div>
                </div>
            </div>

            {/* Component three */}
            <div className='flex flex-col relative m-10 md:m-40'>
                <div className='flex flex-col md:flex-row items-center gap-[480px] mb-10'>
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Empower Your Team</h1>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover md:mt-0 mt-[-400px]' src={img1} alt="Empower Your Team" />
                </div>
                <p className='w-full md:w-[800px] relative md:bottom-[160px] text-[14px] md:text-[16px] mb-5'>
                    Invest in your team’s success with comprehensive training and certification programs. We equip your team with the skills and knowledge they need to utilize SAP B1 effectively through a combination of classroom training, hands-on exercises, and ongoing support.
                </p>
                <hr className='border border-black w-full' />

                <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover' src={img2} alt="Continued Optimization" />
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Continued Optimization & Success</h1>
                </div>
                <p className='w-full md:w-[700px] md:ml-[380px] relative text-[14px] md:text-[16px] md:bottom-[160px] mt-5'>
                    Benefit from ongoing support and expertise. We don’t stop after implementation. Our ongoing support ensures you can continuously optimize your SAP B1 system, maximizing its potential and ensuring its long-term success within your business. Our team is always available to answer your questions, address any challenges, and help you get the most out of your SAP B1 investment.
                </p>
                <hr className='border border-black w-full' />
            </div>

            <Footer />
        </div>
    );
}

export default Training;
