import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import { BsGraphUp } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import img1 from '../Component/CLOUDOPS1.webp';
import img2 from '../Component/CLOUDOPS2.webp';

function CloudOps() {
    return (
        <div className='Software Development page bg-white h-auto'>
            {/* Component one */}
            <div className='pic'>
                <Header />
                <div className='relative'>
                    <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[50px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        CloudOps
                    </h1>
                </div>
            </div>

            {/* Component two */}
            <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
                <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>Cloud Operations Management</h1>

                <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 text-red-700'>
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <BsGraphUp size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Optimized Performance & Cost Control</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Streamline core business processes with a cloud-based ERP system, gaining real-time insights and improved efficiency.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <FaLock size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Enhanced Security & Monitoring</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Benefit from robust security measures and ongoing monitoring to safeguard your data and systems in the cloud.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <RiCustomerService2Line size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Ongoing Support & Expertise</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Receive ongoing support and access to our cloud expertise to ensure the continued success of your cloud environment.</p>
                    </div>
                </div>
            </div>

            {/* Component three */}
            <div className='flex flex-col relative m-10 md:m-40'>
                <div className='flex flex-col md:flex-row items-center gap-[400px] mb-10'>
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Optimize Your Cloud Environment</h1>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover md:mt-0 mt-[-320px]' src={img1} alt="Optimize Your Cloud Environment" />
                </div>
                <p className='w-full md:w-[800px] relative text-[14px] md:text-[16px] md:bottom-[160px] mb-5'>
                    Don’t go it alone in the cloud. Our CloudOps team takes the reins, optimizing performance, controlling costs, and securing your cloud infrastructure. We ensure your cloud environment runs smoothly, efficiently, and delivers the maximum value for your business.
                </p>
                <hr className='border border-black w-full' />

                <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover' src={img2} alt="Peace of Mind in the Cloud" />
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Peace of Mind in the Cloud</h1>
                </div>
                <p className='w-full md:w-[700px] md:ml-[380px] relative text-[14px] md:text-[16px] md:bottom-[160px] mt-5'>
                    Gain the confidence and expertise you need. We provide ongoing support and proactive management, ensuring your cloud environment continues to deliver optimal performance and security over the long term.
                </p>
                <hr className='border border-black w-full' />
            </div>

            <Footer />
        </div>
    );
}

export default CloudOps;
