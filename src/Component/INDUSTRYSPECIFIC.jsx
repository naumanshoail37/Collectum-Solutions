import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import { FaPaintBrush } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import img1 from '../Component/CMS1.webp';
import img2 from '../Component/INDUSTRYSPECIFIC2.webp';

function IndustrySpecific() {
    return (
        <div className='Software Development page bg-white h-auto '>
    
            {/*Component one*/}
            <div className='pic'>
                <Header />
                <div className='relative'>
                    <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[40px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        Industry-Specific Solutions
                    </h1>
                </div>
            </div>
    
            {/*Component two*/}
            <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
                <div>
                    <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>Industry-Specific Expertise & Integration</h1>
                </div>
    
                <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 md:mt-20 text-red-700'>
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'><FaPaintBrush size={50} /></div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Tailored Functionality for Your Industry</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black ml-2 md:ml-3'>Adapt Salesforce to your unique business needs and workflows for maximized impact</p>
                    </div>
    
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'><IoStar size={50} /></div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Industry Best Practices & Benchmarking</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black ml-2 md:ml-4'>Implement industry-specific best practices to optimize Salesforce for your sales process</p>
                    </div>
       
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'><FaUserCog size={50} /></div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Seamless Integration with Existing Systems</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black ml-2 md:ml-8'>Integrate Salesforce with your existing systems for a unified data view and streamlined operations</p>
                    </div>
                </div>
            </div>
    
            {/*Component three*/}
            <div className='flex flex-col relative m-10 md:m-40 mt-[-150px]'>
                <div className='flex flex-col md:flex-row gap-56'>
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif mt-32 md:mt-32'>Tailored Solutions for Your Business</h1>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover md:mt-0 mt-[-140px]' src={img1} alt="" />
                </div>
                <p className='w-full md:w-[800px]  relative md:bottom-[160px] text-[14px] md:text-[16px] md:mt-0 mt-5'>
                    A one-size-fits-all approach doesn’t work for Salesforce. We have deep industry knowledge and can tailor Salesforce solutions to perfectly fit the unique needs of your business. This ensures your CRM seamlessly integrates with your existing workflows and maximizes its impact on your sales process.
                </p>
                <hr className='border mt-5 md:mt-[-40px] border-black w-full md:w-[1250px] ' />
    
                <div className='flex flex-col md:flex-row gap-8'>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover md:mt-10' src={img2} alt="" />
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif mt-10 md:mt-32'>Industry Best Practices Applied</h1>
                </div>
                <p className='w-full md:w-[700px] ml-0 md:ml-[380px] md:bottom-[160px] relative text-[14px] md:text-[16px]'>
                    Benefit from our expertise in industry-specific best practices. We know what works within your industry and can leverage this knowledge to configure Salesforce to optimize your sales process and drive success.
                </p>
                <hr className='border mt-5 md:mt-[-40px] border-black w-full md:w-[1250px] ' />
            </div>
            <Footer />
        </div>
    );
}

export default IndustrySpecific;
