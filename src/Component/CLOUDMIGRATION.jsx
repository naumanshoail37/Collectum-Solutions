import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import { IoMdTrendingDown } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import img1 from '../Component/CLOUDMIGRATION1.webp';
import img2 from '../Component/CLOUDMIGRATION2.webp';

function CloudMigration() {
    return (
        <div className='Software Development page bg-white h-auto'>
            {/* Component one */}
            <div className='pic'>
                <Header />
                <div className='relative'>
                    <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[50px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        Cloud Migration
                    </h1>
                </div>
            </div>

            {/* Component two */}
            <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
                <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>Secure Cloud Migration Strategy</h1>

                <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 text-red-700'>
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <FaLock size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Data Security & Compliance</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Our secure data migration techniques ensure the integrity and confidentiality of your sensitive information.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <IoMdTrendingDown size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Minimized Downtime & Disruption</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>We employ a proven methodology to minimize downtime and disruption during cloud migration.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <MdScreenShare size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Customized Migration Plan</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Collaborate with our experts to develop a customized migration plan that aligns with your specific business goals.</p>
                    </div>
                </div>
            </div>

            {/* Component three */}
            <div className='flex flex-col relative m-10 md:m-40'>
                <div className='flex flex-col md:flex-row items-center gap-[450px] mb-10'>
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Migrate with Confidence</h1>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover md:mt-0 mt-[-300px]' src={img1} alt="Migrate with Confidence" />
                </div>
                <p className='w-full md:w-[800px] relative text-[14px] md:text-[16px] mb-5 md:bottom-[160px]'>
                    Security is our top priority. Our secure data migration techniques ensure the integrity and confidentiality of your sensitive information throughout the entire process. We take all necessary precautions to safeguard your data during migration.
                </p>
                <hr className='border border-black w-full' />

                <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover' src={img2} alt="Minimize Downtime & Disruption" />
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Minimize Downtime & Disruption</h1>
                </div>
                <p className='w-full md:w-[700px] md:ml-[380px] relative text-[14px] md:text-[16px] mt-5 md:bottom-[160px]'>
                    Keep your business running smoothly. We employ a proven methodology to minimize downtime and disruption during cloud migration. You can focus on your core business activities while we handle the technical aspects of the transition.
                </p>
                <hr className='border border-black w-full' />
            </div>

            <Footer />
        </div>
    );
}

export default CloudMigration;
