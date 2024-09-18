import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { TbDeviceDesktopStar } from "react-icons/tb";
import img1 from '../Component/WEBDEVELOPMENT1.jpg'
import img2 from '../Component/WEBDEVELOPMENT2.jpg'


function WebDevelopment() {
  return (
    <div className='Software Development page bg-white h-auto '>

    {/*Component one*/}
    <div className='pic'>

        <Header />

        <div className='relative'>
            <img className='w-full  h-[500px] object-cover' src={img} alt="Our-Clients" />
            <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                Web Development
            </h1>
        </div>
    </div>

   {/*Component two*/}

   <div className=' relative flex flex-col justify-center bg-white h-auto m-40'>

<div>
    <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Web Development</h1>
</div>

<div className='flex flex-row justify-center gap-14 mt-20 text-red-700'>

    <div className='flex flex-col text-center'>
    <div className=' justify-center flex'> <   TbDeviceDesktopAnalytics  size={50} /></div>
    <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Custom Web Applications</h1>
    <p className='w-[350px] text-[18px] text-black'>Craft powerful and scalable web applications that meet your specific business needs, fostering collaboration and driving online success</p>
    </div>

    <div className='flex flex-col text-center'>
   <div className=' justify-center flex'> <   TbDeviceDesktopAnalytics  size={50} /></div>
    <h1 className='font-medium text-[30px] font-serif text-black mt-5'>E-commerce Development</h1>
    <p className='w-[350px] text-[18px] text-black'>Build user-friendly and secure online stores that streamline your sales process and enhance your customer experience</p>
    </div>
   
    <div className='flex flex-col text-center'>
    <div className=' justify-center flex'> <   TbDeviceDesktopAnalytics  size={50} /></div>
    <h1 className='font-medium text-[30px] font-serif text-black mt-5'>CMS Development</h1>
    <p className='w-[350px] text-[18px] text-black'>Implement a user-friendly CMS tailored to your needs, empowering you to manage your website content easily and efficiently</p>
    </div>
    </div>
    </div>
{/*Component three*/}

     <div className='flex flex-col relative m-40 mt-[-150px]'>

    <div className='ml-12 flex flex-row gap-56'>
    <h1 className='text-[35px]  font-bold font-serif mt-32 '>Bring Your Website Ideas to Life</h1>
    <img className='h-[370px] mt-10 w-[350px]' src={img1} alt="" />
    </div>
    <p className='w-[700px] ml-12 relative text-[16px] bottom-[200px]'>Transform your vision into a user-friendly and high-performing website. We craft websites that are not only visually appealing but also technically sound, ensuring a seamless user experience and optimal website speed. </p>
    <hr className='border mt-[-40px] border-black w-[1165px] ml-12' />

    <div className='ml-12 flex flex-row gap-8'>
    <img className='h-[370px] mt-10 w-[350px]' src={img2} alt="" />
    <h1 className='text-[35px]  font-bold font-serif mt-32 '>Streamline Online Presence</h1>
    </div>
    <p className='w-[700px] ml-[430px] relative bottom-[220px]'>Build custom web applications or e-commerce platforms to meet your specific business needs. Whether you require a complex application for internal use or a user-friendly online store to boost sales, our team has the expertise to deliver exceptional results.</p>
    <hr className='border mt-[-40px] border-black w-[1165px] ml-12' />


    </div>
    </div>

  )
}

export default WebDevelopment
