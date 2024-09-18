import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { MdScreenSearchDesktop } from "react-icons/md";
import { MdOutlineSegment } from "react-icons/md";
import img1 from '../Component/CMS1.webp'
import img2 from '../Component/CMS2.webp'

function CMS() {
    return (
        <div className='Software Development page bg-white h-auto '>
    
        {/*Component one*/}
        <div className='pic'>
    
            <Header />
    
            <div className='relative'>
                <img className='w-full  h-[500px] object-cover' src={img} alt="Our-Clients" />
                <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                    CMS
                </h1>
            </div>
        </div>
    
       {/*Component two*/}
    
       <div className=' relative flex flex-col justify-center bg-white h-auto m-40'>
    
    <div>
        <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Content Management System</h1>
    </div>
    
    <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
    
        <div className='flex flex-col text-center'>
        <div className=' justify-center flex'> <   MdScreenSearchDesktop  size={50} /></div>
        <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Open-Source CMS Solutions</h1>
        <p className='w-[350px] text-[18px] text-black'>Leverage popular open-source CMS platforms like WordPress or Drupal, offering a flexible and cost-effective solution for managing your website content.</p>
        </div>
    
        <div className='flex flex-col text-center'>
       <div className=' justify-center flex'> <   TbDeviceDesktopAnalytics  size={50} /></div>
        <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Headless CMS Development</h1>
        <p className='w-[350px] text-[18px] text-black'>Implement a headless CMS for greater flexibility and scalability, allowing you to manage content independently of your front-end presentation layer</p>
        </div>
       
        <div className='flex flex-col text-center'>
        <div className=' justify-center flex'> <   MdOutlineSegment  size={50} /></div>
        <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Enterprise CMS Solutions</h1>
        <p className='w-[350px] text-[18px] text-black'>Explore robust enterprise CMS platforms designed to handle complex content management needs for large organizations</p>
        </div>
        </div>
        </div>
    {/*Component three*/}
    
         <div className='flex flex-col relative m-40 mt-[-150px]'>
    
        <div className='ml-[42px] flex flex-row gap-[77px]'>
        <h1 className='text-[35px]  font-bold font-serif mt-32  '>Effortless Content Management</h1>
        <img className='h-[370px] mt-10 w-[350px] ml-[180px] ' src={img1} alt="" />
        </div>
        <p className='w-[800px] ml-12 relative text-[16px] bottom-[200px]'>Implement a user-friendly CMS that empowers you to easily manage and update your website content. We can help you choose the right CMS platform based on your needs and budget, ensuring a user-friendly interface that allows you to make content edits and updates without any technical expertise.</p>
        <hr className='border mt-[-40px] border-black w-[1165px] ml-12' />
    
        <div className='ml-12 flex flex-row gap-8'>
        <img className='h-[370px] mt-10 w-[350px] ' src={img2} alt="" />
        <h1 className='text-[35px]  font-bold font-serif mt-32 '>Flexible Content Solutions</h1>
        </div>
        <p className='w-[700px] ml-[430px] relative bottom-[220px]'>Choose from open-source, headless, or enterprise CMS platforms to suit your specific needs and budget. We offer a variety of CMS solutions to cater to different requirements. Whether you need a cost-effective open-source platform or a robust enterprise solution with advanced features, we can help you find the perfect fit.</p>
        <hr className='border mt-[-40px] border-black w-[1165px] ml-12' />

    
        </div>
        </div>
    
      )
    }
export default CMS
