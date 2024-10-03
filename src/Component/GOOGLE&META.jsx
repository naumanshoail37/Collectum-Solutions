import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import { IoMdBriefcase } from "react-icons/io";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import img1 from '../Component/GOOGLE1.webp';
import img2 from '../Component/GOOGLE2.webp';

function GoogleAndMeta() {
    return (
        <div className='Software Development page bg-white h-auto'>
            {/* Component one */}
            <div className='pic'>
                <Header />
                <div className='relative'>
                    <img className='w-full h-[300px] md:h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[30px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        Google & Meta Ads
                    </h1>
                </div>
            </div>

            {/* Component two */}
            <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
                <div>
                    <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>Targeted Google & Meta Ads Management</h1>
                </div>

                <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 md:mt-20 text-red-700'>
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <PiUsersFill size={50} />
                        </div>
                        <h1 className='font-medium text-[20px] md:text-[30px] font-serif text-black mt-5'>Paid Search Advertising</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Design and manage targeted Google Ads campaigns to reach potential customers actively searching for your products or services.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <IoMdBriefcase size={50} />
                        </div>
                        <h1 className='font-medium text-[20px] md:text-[30px] font-serif text-black mt-5'>Social Media Advertising</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Develop targeted social media advertising campaigns to reach your ideal audience on platforms like Facebook and Instagram.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <FaMagnifyingGlassChart size={50} />
                        </div>
                        <h1 className='font-medium text-[20px] md:text-[30px] font-serif text-black mt-5'>Conversion Tracking & Optimization</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Track campaign performance and optimize ad spend to maximize return on investment (ROI).</p>
                    </div>
                </div>
            </div>

            {/* Component three */}
            <div className='flex flex-col relative m-10 md:m-40 mt-[-150px]'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-[270px]'>
                    <h1 className='text-[25px] md:text-[35px] font-bold font-serif mt-40 md:mt-32'>Reach Your Target Audience</h1>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] mx-auto' src={img1} alt="" />
                </div>
                <p className='w-full md:w-[800px]  relative text-[14px] md:text-[16px] mt-4 md:bottom-[200px]'>Get seen by the right people at the right time. We launch targeted advertising campaigns on Google and Meta platforms, ensuring your message reaches your ideal audience.</p>
                <hr className='border mt-6 md:mt-[-40px] border-black w-full md:w-[1240px] ml-0 md:ml-4' />

                <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] mt-5' src={img2} alt="" />
                    <h1 className='text-[25px] md:text-[35px] font-bold font-serif mt-10 md:mt-32'>Maximize Ad Spend</h1>
                </div>
                <p className='w-full md:w-[700px]  md:ml-[385px] relative mt-8 md:bottom-[220px] text-[14px] md:text-[16px]'>Don’t waste your advertising budget. We optimize your ad campaigns to deliver the best possible results for your investment. Our goal is to maximize your return on ad spend and achieve your desired outcomes.</p>
                <hr className='border mt-6 md:mt-[-40px] border-black w-full md:w-[1240px] ml-0 md:ml-4' />
            </div>
        </div>
    );
}

export default GoogleAndMeta;
