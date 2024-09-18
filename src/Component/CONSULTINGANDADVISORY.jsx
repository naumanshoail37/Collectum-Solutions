
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { TbBulb } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import img1 from '../Component/CONSULTINGANDADVISORY1.webp'
import img2 from '../Component/CONSULTINGANDADVISORY2.webp'

function ConsultingAndAdvisory() {
    return (
        <div className='Software Development page bg-white h-auto '>
    
        {/*Component one*/}
        <div className='pic'>
    
            <Header />
    
            <div className='relative'>
                <img className='w-full  h-[500px] object-cover' src={img} alt="Our-Clients" />
                <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                Consulting And Advisory

                </h1>
            </div>
        </div>
    
       {/*Component two*/}
    
       <div className=' relative flex flex-col justify-center bg-white h-auto m-40'>
    
    <div>
        <h1 className='text-[50px] text-center font-bold font-serif mt-10 '>Strategic Consulting & Advisory</h1>
    </div>
    
    <div className='flex flex-row justify-center gap-10 mt-20 text-red-700'>
    
        <div className='flex flex-col text-center'>
        <div className=' justify-center flex'> <   TbBulb  size={50} /></div>
        <h1 className='font-medium text-[30px] font-serif text-black mt-5'>Business Process Optimization</h1>
        <p className='w-[350px] text-[18px] text-black ml-3'>Identify areas for improvement and optimize your workflows to maximize the value of SAP Business One</p>
        </div>
    
        <div className='flex flex-col text-center'>
       <div className=' justify-center flex'> <   FaPeopleGroup  size={50} /></div>
        <h1 className='font-medium text-[30px] font-serif text-black mt-5 w-[300px] ml-12'>Industry-Specific Expertise</h1>
        <p className='w-[350px] text-[18px] text-black ml-9'>Leverage our deep understanding of your industry to tailor SAP B1 to your unique needs and challenges</p>
        </div>
       
        <div className='flex flex-col text-center'>
        <div className=' justify-center flex'> <   HiOutlineBookOpen  size={50} /></div>
        <h1 className='font-medium text-[30px]  font-serif text-black mt-5'>Roadmap Development & Gap Analysis</h1>
        <p className='w-[350px] text-[18px] text-black ml-8'>Develop a clear roadmap for successful SAP B1 implementation, identifying any gaps between your current processes and the system's capabilities</p>
        </div>
        </div>
        </div>
    {/*Component three*/}
    
         <div className='flex flex-col relative m-40 mt-[-150px]'>
    
        <div className='ml-[12px] flex flex-row gap-[40px]'>
        <h1 className='text-[35px]  font-bold font-serif mt-32  '>Boost Efficiency & Value</h1>
        <img className='h-[370px] mt-10 w-[350px] ml-[392px] ' src={img1} alt="" />
        </div>
        <p className='w-[800px] ml-3 relative text-[16px] bottom-[200px]'>Uncover hidden potential within your current processes. Our consultants conduct a thorough analysis of your workflows to identify areas for improvement. By implementing SAP Business One (SAP B1) strategically, we help you maximize its value and streamline operations for increased efficiency.</p>
        <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />
    
        <div className='ml-4 flex flex-row gap-8'>
        <img className='h-[370px] mt-10 w-[350px] ' src={img2} alt="" />
        <h1 className='text-[35px]  font-bold font-serif mt-32 '>Industry-Specific Solutions</h1>
        </div>
        <p className='w-[700px] ml-[400px] relative bottom-[220px]'>Leverage our expertise to tailor SAP B1 to your specific business needs. We understand the unique challenges and opportunities within your industry. Our in-depth knowledge allows us to configure SAP B1 to perfectly fit your workflows, ensuring a solution that delivers maximum impact for your business.</p>
        <hr className='border mt-[-40px] border-black w-[1240px] ml-4' />

    
        </div>
        </div>
    
      )
    
}

export default ConsultingAndAdvisory
