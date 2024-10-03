import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import { IoMdBriefcase } from "react-icons/io";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import img1 from '../Component/DIGITALSTRATEGY1.webp';
import img2 from '../Component/DIGITALSTRATEGY2.webp';

export default function DigitalStrategy() {
    return (
        <div className='Software Development page bg-white h-auto'>
            {/* Component one */}
            <div className='pic'>
                <Header />
                <div className='relative'>
                    <img className='w-full h-[300px] md:h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[30px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        Digital Strategy
                    </h1>
                </div>
            </div>

            {/* Component two */}
            <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
                <div>
                    <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>Comprehensive Digital Strategy</h1>
                </div>

                <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 md:mt-20 text-red-700'>
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <PiUsersFill size={50} />
                        </div>
                        <h1 className='font-medium text-[20px] md:text-[30px] font-serif text-black mt-5'>Target Audience Identification</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Define your ideal customer and tailor your online presence to resonate with them</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <IoMdBriefcase size={50} />
                        </div>
                        <h1 className='font-medium text-[20px] md:text-[30px] font-serif text-black mt-5'>Channel Selection & Integration</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Develop a cohesive strategy that leverages the most effective digital channels for your business goals</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <FaMagnifyingGlassChart size={50} />
                        </div>
                        <h1 className='font-medium text-[20px] md:text-[30px] font-serif text-black mt-5'>Performance Measurement & Optimization</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Continuously measure and refine your digital marketing strategy for optimal results</p>
                    </div>
                </div>
            </div>

            {/* Component three */}
            <div className='flex flex-col relative m-10 md:m-40 mt-[-150px]'>
                <div className=' flex flex-col md:flex-row gap-4 md:gap-[480px]'>
                    <h1 className='text-[25px] md:text-[35px] font-bold font-serif mt-32 md:mt-32'>Chart Your Course</h1>
                    <img className='h-[250px] md:h-[370px] mt-10 md:mt-10 w-full md:w-[350px] ' src={img1} alt="" />
                </div>
                <p className='w-full md:w-[800px]  relative text-[14px] md:text-[16px] mt-4 md:bottom-[200px]'>Don’t navigate the digital landscape blindly. We develop data-driven roadmaps that target your ideal audience and achieve your online marketing goals. Our strategic approach ensures your online presence is optimized for maximum return on investment.</p>
                <hr className='border mt-6 md:mt-[-40px] border-black w-full md:w-[1240px] ml-0 md:ml-4' />

                <div className=' flex flex-col md:flex-row gap-4 md:gap-12'>
                    <img className='h-[250px] md:h-[370px] mt-4 md:mt-10 w-full md:w-[350px] ' src={img2} alt="" />
                    <h1 className='text-[25px] md:text-[35px] font-bold font-serif mt-10 md:mt-32'>Maximize ROI</h1>
                </div>
                <p className='w-full md:w-[700px]  md:ml-[400px] relative mt-4 md:bottom-[220px] text-[14px] md:text-[16px]'>Every marketing dollar counts. We focus on maximizing the return on your investment by optimizing your online channels and campaigns. With our expertise, you’ll see tangible results that contribute to your bottom line.</p>
                <hr className='border mt-6 md:mt-[-40px] border-black w-full md:w-[1240px] ml-0 md:ml-4' />
            </div>
        </div>
    );
}
