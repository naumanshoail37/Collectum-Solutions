import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { TbDeviceMobileCog } from "react-icons/tb";
import { MdSettingsEthernet } from "react-icons/md";
import img1 from '../Component/MOBILEAPP1.jpg'
import img2 from '../Component/MOBILEAPP2.jpg'

function MobileApp() {
    return (
        <div className='Software Development page bg-white h-auto'>
    
        {/*Component one*/}
        <div className='pic'>
    
            <Header />
    
            <div className='relative'>
                <img className='w-full h-[300px] md:h-[500px] object-cover' src={img} alt="Our-Clients" />
                <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[40px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                    Mobile App Development
                </h1>
            </div>
        </div>
    
       {/*Component two*/}
    
       <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
    
            <div>
                <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>
                    Mobile App Development
                </h1>
            </div>
    
            <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-14 mt-10 md:mt-20 text-red-700'>
    
                <div className='flex flex-col text-center'>
                    <div className='justify-center flex'> 
                        <TbDeviceMobileCog size={40} md:size={50} />
                    </div>
                    <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>
                        Native App Development
                    </h1>
                    <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black'>
                        Create high-performance native apps for iOS and Android devices, delivering an exceptional user experience optimized for each platform
                    </p>
                </div>
    
                <div className='flex flex-col text-center'>
                    <div className='justify-center flex'>
                        <TbDeviceDesktopAnalytics size={40} md:size={50} />
                    </div>
                    <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>
                        Hybrid App Development
                    </h1>
                    <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black'>
                        Develop cost-effective hybrid apps that combine native and web technologies, offering a seamless user experience across platforms
                    </p>
                </div>
       
                <div className='flex flex-col text-center'>
                    <div className='justify-center flex'>
                        <MdSettingsEthernet size={40} md:size={50} />
                    </div>
                    <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5 w-[280px] md:w-[300px] ml-0 md:ml-6'>
                        Cross-Platform App Development
                    </h1>
                    <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black'>
                        Build a single codebase app that functions flawlessly on both iOS and Android devices, streamlining development and reducing costs
                    </p>
                </div>
            </div>
        </div>
    
        {/*Component three*/}
    
        <div className='flex flex-col relative m-10 md:m-40 mt-[-100px] md:mt-[-150px]'>
    
            <div className='ml-4 md:ml-12 flex flex-col md:flex-row gap-10 md:gap-[264px]'>
                <h1 className='text-[25px] md:text-[35px] font-bold font-serif mt-20 md:mt-38'>
                    Native or Cross-Platform Apps
                </h1>
                <img className='h-[250px] md:h-[370px] mt-10 w-[250px] md:w-[350px]' src={img1} alt="" />
            </div>
            <p className='w-[100%] md:w-[700px] ml-4 md:ml-12 relative text-[14px] md:text-[16px] bottom-[-20px] md:bottom-[200px]'>
                Develop feature-rich mobile apps for iOS, Android, or both, tailored to your target audience. We understand the unique needs of each platform and can create apps that leverage the full potential of each device, ensuring a flawless user experience for your customers.
            </p>
            <hr className='border mt-[40px] md:mt-[-40px] border-black w-full md:w-[1165px] ml-4 md:ml-12' />
    
            <div className='ml-4 md:ml-12 flex flex-col md:flex-row gap-10 md:gap-8'>
                <img className='h-[250px] md:h-[370px] mt-10 w-[250px] md:w-[350px]' src={img2} alt="" />
                <h1 className='text-[25px] md:text-[35px] font-bold font-serif mt-26 md:mt-32'>
                    Seamless Mobile User Experience
                </h1>
            </div>
            <p className='w-full md:w-[700px] ml-4 md:ml-[430px] relative bottom-[-10px] md:bottom-[220px]'>
                Create intuitive and engaging mobile apps that optimize user experience and drive engagement. Our focus is on user-centric design principles, crafting apps that are easy to navigate, visually appealing, and keep users coming back for more.
            </p>
            <hr className='border mt-[40px] md:mt-[-40px] border-black w-full md:w-[1165px] ml-4 md:ml-12' />
        </div>
        </div>
    )
}

export default MobileApp
