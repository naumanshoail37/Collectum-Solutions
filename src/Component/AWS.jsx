import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import { BsGraphUp } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import img1 from '../Component/AWS1.webp';
import img2 from '../Component/AWS2.webp';

function AWS() {
    return (
        <div className='Software Development page bg-white h-auto'>
            {/* Component one */}
            <div className='pic'>
                <Header />
                <div className='relative'>
                    <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[50px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        AWS, Azure & GCP
                    </h1>
                </div>
            </div>

            {/* Component two */}
            <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
                <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>Multi-Cloud Expertise</h1>

                <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 text-red-700'>
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <BsGraphUp size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Platform Selection & Migration Strategy</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>We assess your specific needs and recommend the optimal cloud platform (AWS, Azure, GCP) for your business.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <FaLock size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Seamless Cloud Migration & Integration</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Our team guides you through the entire cloud migration process, ensuring a smooth transition with minimal disruption.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <RiCustomerService2Line size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Hybrid & Multi-Cloud Solutions</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Leverage our expertise to design and implement hybrid or multi-cloud solutions that seamlessly integrate with your existing infrastructure.</p>
                    </div>
                </div>
            </div>

            {/* Component three */}
            <div className='flex flex-col relative m-10 md:m-40'>
                <div className='flex flex-col md:flex-row items-center gap-[360px] mb-10'>
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Find the Right Cloud Platform</h1>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover md:mt-0 mt-[-300px]' src={img1} alt="Find the Right Cloud Platform" />
                </div>
                <p className='w-full md:w-[800px] relative text-[14px] md:text-[16px] mb-5 md:bottom-[160px]'>
                    Not all clouds are created equal. We assess your specific needs and recommend the optimal cloud platform (AWS, Azure, GCP) that best suits your business goals, infrastructure, and budget.
                </p>
                <hr className='border border-black w-full' />

                <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover' src={img2} alt="Seamless Cloud Migration & Integration" />
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Seamless Cloud Migration & Integration</h1>
                </div>
                <p className='w-full md:w-[700px] md:ml-[380px] relative text-[14px] md:text-[16px] mt-5 md:bottom-[160px]'>
                    Migrate to the cloud with confidence. Our team guides you through the entire process, ensuring a smooth transition with minimal disruption to your operations. We seamlessly integrate your cloud environment with your existing systems for a unified experience.
                </p>
                <hr className='border border-black w-full' />
            </div>

            <Footer />
        </div>
    );
}

export default AWS;
