import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { VscGraphLeft } from "react-icons/vsc";
import { BsPersonFillLock } from "react-icons/bs";
import { VscLightbulbSparkle } from "react-icons/vsc";
import img1 from '../Component/CUSTOMIZATION1.webp'
import img2 from '../Component/CUSTOMIZATION2.webp'

function Customization() {
    return (
        <div className='Software Development page bg-white h-auto '>
    
        {/*Component one*/}
        <div className='pic'>
    
            <Header />
    
            <div className='relative'>
                <img className='w-full  h-[500px] object-cover' src={img} alt="Our-Clients" />
                <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                Customization And Development 
                </h1>
            </div>
        </div>
    
       {/*Component two*/}
    
       <div className=' relative flex flex-col justify-center bg-white h-auto m-40'>
    
    <div>
        <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Custom Development & Data Management</h1>
    </div>
    
    <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
    
        <div className='flex flex-col text-center'>
        <div className=' justify-center flex'> <   VscGraphLeft  size={50} /></div>
        <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Extend Salesforce Functionality</h1>
        <p className='w-[350px] text-[18px] text-black ml-3'>Develop custom objects, fields, and workflows to perfectly align Salesforce with your sales strategy</p>
        </div>
    
        <div className='flex flex-col text-center'>
       <div className=' justify-center flex'> <   BsPersonFillLock  size={50} /></div>
        <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Secure Data Migration & Management</h1>
        <p className='w-[350px] text-[18px] text-black ml-9'>Ensure data integrity and accessibility through secure migration and efficient data management within Salesforce</p>
        </div>
       
        <div className='flex flex-col text-center'>
        <div className=' justify-center flex'> <   VscLightbulbSparkle  size={50} /></div>
        <h1 className='font-medium text-[30px]  font-serif text-black mt-5'>Automation & Process Improvement</h1>
        <p className='w-[350px] text-[18px] text-black ml-8'>Automate key sales processes to free up valuable resources and improve efficiency</p>
        </div>
        </div>
        </div>
    {/*Component three*/}
    
         <div className='flex flex-col relative m-40 mt-[-150px]'>
    
        <div className='ml-[12px] flex flex-row gap-[40px]'>
        <h1 className='text-[35px]  font-bold font-serif mt-32  '>Extend Salesforce Functionality</h1>
        <img className='h-[370px] mt-10 w-[350px] ml-[268px] ' src={img1} alt="" />
        </div>
        <p className='w-[800px] ml-3 relative text-[16px] bottom-[175px]'>Salesforce is powerful, but sometimes you need more. We can extend the platform’s capabilities through custom objects, fields, and workflows, perfectly aligning it with your specific sales strategy. This ensures Salesforce caters to your unique needs and helps you achieve your sales goals.</p>
        <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
    
        <div className='ml-4 flex flex-row gap-8'>
        <img className='h-[370px] mt-10 w-[350px] ' src={img2} alt="" />
        <h1 className='text-[35px]  font-bold font-serif mt-32 '>Industry Best Practices Applied</h1>
        </div>
        <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Benefit from our expertise in industry-specific best practices. We know what works within your industry and can leverage this knowledge to configure Salesforce to optimize your sales process and drive success.</p>
        <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />

    
        </div>
        </div>
    
      )
    
}

export default Customization
