import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { MdScreenSearchDesktop } from "react-icons/md";
import { MdOutlineSegment } from "react-icons/md";
import img1 from '../Component/CRM1.webp'
import img2 from '../Component/CRM2.webp'

function CRM() {
    return (
        <div className='Software Development page bg-white h-auto'>
    
        {/*Component one*/}
        <div className='pic'>
    
            <Header />
    
            <div className='relative'>
                <img className='w-full h-[300px] md:h-[500px] object-cover' src={img} alt="Our-Clients" />
                <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[40px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                    CRM
                </h1>
            </div>
        </div>
    
       {/*Component two*/}
    
       <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
    
            <div>
                <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>
                    Customer Relationship Management
                </h1>
            </div>
    
            <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-14 mt-10 md:mt-20 text-red-700'>
    
                <div className='flex flex-col text-center'>
                    <div className='justify-center flex'>
                        <MdScreenSearchDesktop size={40} md:size={50} />
                    </div>
                    <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>
                        CRM System Integration
                    </h1>
                    <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black'>
                        Integrate seamlessly with your existing CRM system or implement a new one, streamlining your sales process and fostering stronger customer relationships.
                    </p>
                </div>
    
                <div className='flex flex-col text-center'>
                    <div className='justify-center flex'>
                        <TbDeviceDesktopAnalytics size={40} md:size={50} />
                    </div>
                    <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>
                        Custom CRM Development
                    </h1>
                    <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black'>
                        Develop bespoke CRM solutions tailored to your unique business needs, automating tasks, improving lead management, and boosting sales productivity.
                    </p>
                </div>
       
                <div className='flex flex-col text-center'>
                    <div className='justify-center flex'>
                        <MdOutlineSegment size={40} md:size={50} />
                    </div>
                    <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>
                        CRM Analytics & Reporting
                    </h1>
                    <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black'>
                        Leverage data generated within your CRM system to gain valuable insights into customer behavior, identify trends, and optimize your sales strategy.
                    </p>
                </div>
            </div>
        </div>
    
        {/*Component three*/}
    
        <div className='flex flex-col relative m-10 md:m-40 mt-[-100px] md:mt-[-150px]'>
    
            <div className='ml-4 md:ml-12 flex flex-col md:flex-row gap-8 md:gap-[77px]'>
                <h1 className='text-[25px] md:text-[35px] font-bold font-serif mt-24 md:mt-32'>
                    Centralize Customer Data & Interactions
                </h1>
                <img className='h-[250px] md:h-[370px] mt-10 w-[250px] md:w-[350px] mr-14' src={img1} alt="" />
            </div>
            <p className='w-full md:w-[800px] ml-4 md:ml-12 relative text-[14px] md:text-[16px] bottom-[-30px] md:bottom-[200px]'>
                Implement a CRM system to streamline your sales process, manage customer relationships, and boost sales productivity. A centralized CRM system allows you to track all customer interactions, identify sales opportunities, and nurture leads more effectively, ultimately leading to increased sales and customer satisfaction.
            </p>
            <hr className='border mt-[50px] md:mt-[-40px] border-black w-full md:w-[1165px] ml-4 md:ml-12' />
    
            <div className='ml-4 md:ml-12 flex flex-col md:flex-row gap-10 md:gap-8'>
                <img className='h-[250px] md:h-[370px] mt-10 w-[250px] md:w-[350px]' src={img2} alt="" />
                <h1 className='text-[25px] md:text-[35px] font-bold font-serif mt-[-10px] md:mt-32'>
                    Data-Driven Sales Strategy
                </h1>
            </div>
            <p className='w-full md:w-[700px] ml-4 md:ml-[430px] relative bottom-[-10px] md:bottom-[220px]'>
                Gain valuable insights from customer data to optimize your sales strategy and make informed decisions. By leveraging the data collected within your CRM system, you can identify sales trends, understand customer behavior, and tailor your sales approach for maximum effectiveness.
            </p>
            <hr className='border mt-[50px] md:mt-[-40px] border-black w-full md:w-[1165px] ml-4 md:ml-12' />
        </div>
        </div>
    )
}

export default CRM
