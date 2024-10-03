import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import { FaSortAmountUpAlt } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowUpRightDots } from "react-icons/fa6";
import img1 from '../Component/BUSINESSAUTOMATION1.webp';
import img2 from '../Component/BUSINESSAUTOMATION2.webp';

function BusinessAutomation() {
    return (
        <div className='Software Development page bg-white h-auto'>
            {/* Component one */}
            <div className='pic'>
                <Header />
                <div className='relative'>
                    <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[50px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        Business Process Automation
                    </h1>
                </div>
            </div>

            {/* Component two */}
            <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
                <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>Business Process Automation (BPA) in the Cloud</h1>

                <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 text-red-700'>
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <FaSortAmountUpAlt size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Increased Efficiency & Productivity</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Automate key business processes within your cloud environment to free up valuable staff resources and improve efficiency.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <BsGraphUpArrow size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Improved Accuracy & Reduced Errors</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Automate tasks to minimize human error and ensure consistent execution of business processes.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <FaArrowUpRightDots size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Enhanced Scalability & Agility</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Scaling your cloud-based automated processes is easier, allowing your business to adapt and grow with ease.</p>
                    </div>
                </div>
            </div>

            {/* Component three */}
            <div className='flex flex-col relative m-10 md:m-40'>
                <div className='flex flex-col md:flex-row items-center gap-[360px] mb-10'>
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Boost Efficiency & Productivity</h1>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover md:mt-0 mt-[-300px]' src={img1} alt="Boost Efficiency" />
                </div>
                <p className='w-full md:w-[800px] relative text-[14px] md:text-[16px] mb-5 md:bottom-[160px]'>
                    Free up your team and get more done. Automate key business processes within your cloud environment to streamline workflows and improve efficiency. Let us handle repetitive tasks, allowing your team to focus on high-value activities.
                </p>
                <hr className='border border-black w-full' />

                <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover' src={img2} alt="Enhanced Accuracy" />
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Enhanced Accuracy & Scalability</h1>
                </div>
                <p className='w-full md:w-[700px] md:ml-[380px] relative text-[14px] md:text-[16px] mt-5 md:bottom-[160px]'>
                    Eliminate errors and adapt with ease. Automation minimizes human error and ensures consistent execution of business processes. Cloud-based automation also allows you to easily scale your operations up or down as your business grows.
                </p>
                <hr className='border border-black w-full' />
            </div>

            <Footer />
        </div>
    );
}

export default BusinessAutomation;
