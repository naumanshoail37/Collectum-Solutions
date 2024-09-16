import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { TbSettingsCog } from "react-icons/tb";
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";





function SoftwareDevelopments() {
    

    const [software , setsoftware] = useState(false)
    const [software1 , setsoftware1] = useState(false)
    const [software2 , setsoftware2] = useState(false)
    const [software3 , setsoftware3] = useState(false)
    const [software4 , setsoftware4] = useState(false)
    const [software5 , setsoftware5] = useState(false)

    const toogleParagraph =  ()  => {
        setsoftware (!software)
    }

    const toogleParagraph1 =  () => {

        setsoftware1 (!software1)
    }
    const toogleParagraph2 =  () => {

        setsoftware2 (!software2)
    }
    const toogleParagraph3 =  () => {

        setsoftware3 (!software3)
    }
    const toogleParagraph4 =  () => {

        setsoftware4 (!software4)
    }
    const toogleParagraph5 =  () => {

        setsoftware5 (!software5)
    }

    return (
        <div className='Software Development page bg-white h-auto'>

            {/*Component one*/}
            <div className='pic'>

                <Header />

                <div className='relative'>
                    <img className='w-full  h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        Software Development
                    </h1>
                </div>
            </div>




            {/*Component two*/}

            <div className='flex flex-col mt-[50px] ml-[340px]'>

                <h1 className='font-bold text-[35px]'>Software Development</h1>
                <h1 className='font-bold text-[22px]'>Craft Software Solutions That Empower Your Business</h1>
                <p className='w-[930px]'>The digital landscape is ever-evolving, demanding innovative software solutions to keep your business competitive. At Collectum Solutions, we’re your trusted partner in crafting custom software that streamlines operations, empowers your workforce, and drives results.</p>

                <h1 className='mt-3 font-bold text-[22px]'>Tailored Software Development for Success</h1>
                <p className='w-[930px]'>Whether you require a robust web application, a user-friendly mobile app, a customer relationship management (CRM) system, or a powerful content management system (CMS), we deliver exceptional software development services. Our skilled developers take the time to understand your specific needs and challenges. We translate your vision into reality, building software that seamlessly integrates with your existing workflows and infrastructure.</p>
                <p className='mt-10'>The main services under the Software development:</p>

                <div className='mt-10  flex flex-col border-[1px] border-red-600 h-[330px] w-[930px]'>


                    <div className='flex flex-row gap-[180px]' >
                        <HiOutlineComputerDesktop size={50} className='m-10 text-red-700' />
                        <h1 className='mt-14 ml-[-200px] font-bold font-serif'>Web Development</h1>

                        <TbDeviceMobileMessage size={50} className='m-10 text-red-700' />
                        <h1 className='mt-14 ml-[-200px] font-bold font-serif'>Mobile App Development</h1>

                    </div>

                    <div className='flex flex-row'>
                        <p className='m-10 mt-[-20px] text-[14px] w-[400px]'>Streamline your sales process and boost customer engagement with our CRM implementation and customization expertise..</p>
                        <p className='mt-[-20px] text-[14px] w-[430px]' >Take control of your website content with user-friendly and powerful CMS solutions that simplify content creation and management.</p>
                    </div>

                    <div className='flex flex-row gap-[180px]' >
                        <FiSettings size={50} className='m-10 mt-[-10px] text-red-700' />
                        <h1 className=' ml-[-200px] font-bold font-serif'>CRM Made Easy</h1>

                        <TbSettingsCog size={50} className='m-10 ml-[55px] mt-[-10px] text-red-700' />
                        <h1 className=' ml-[-200px] font-bold font-serif'>Empowering Content Management (CMS)
                        </h1>
                    </div>

                    <div className='flex flex-row'>
                        <p className='m-10 mt-[-20px] text-[14px] w-[400px]'>Streamline your sales process and boost customer engagement with our CRM implementation and customization expertise..</p>
                        <p className='mt-[-20px] text-[14px] w-[430px]' >Take control of your website content with user-friendly and powerful CMS solutions that simplify content creation and management.</p>
                    </div>

                </div>

{/*Component four*/}

<h1  className='font-bold text-[22px] mt-5' >Beyond Functionality: A User-Centric Approach</h1>
<p className='w-[930px]'>Our focus goes beyond functionality. We create user-friendly interfaces that are intuitive, aesthetically pleasing, and accessible across all devices. This ensures a smooth user experience, keeping your audience engaged and driving conversions.</p>

<h1  className='font-bold text-[22px] mt-5' >Investing in the Right Software</h1>
<p className='w-[930px]'>Investing in custom software solutions can transform your business operations. Streamlined processes, empowered employees, and improved customer interactions ultimately lead to increased efficiency, growth, and a competitive edge.</p>

<h1  className='font-bold text-[22px] mt-5' >Ready to Build Software Solutions That Deliver?</h1>
<p className='w-[930px]'>Contact Collectum Solutions today for a free consultation! We’ll discuss your specific requirements and craft a customized software development plan that propels your business forward.</p>

{/*Component five question 1*/}


<div className={`border border-black transition-all duration-300 p-5 w-[930px] mt-10 ${software ? 'h-auto' : 'h-[70px]'} flex flex-col`}>   
 <div className='flex flex-row items start'>

    <h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>What types of software development services do you offer?</h1>
    <button className='ml-48 mt-[1px]' onClick={toogleParagraph}>
        <CiCirclePlus size={30} />
      </button>
    </div>

    {software && (
<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'>
Collectum Solutions offers a wide range of software development services. We can build robust web applications to fit your business needs, design and develop engaging mobile apps, implement or customize a CRM system to streamline your sales, and even create a user-friendly content management system (CMS) for easy website content management.
</p>
)}
</div>

{/* question 2*/}

 <div className={`border border-black transition-all duration-300 p-5 w-[930px] mt-4 ${setsoftware1 ? 'h-auto' : 'h[70px]'} `} >
 <div className='flex flex-row items-start '>

<h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>Can you integrate software with my existing systems?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph1}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software1 && (

<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'> Absolutely! Our experienced team can seamlessly integrate custom software solutions with your existing systems and workflows, ensuring a unified and efficient operation.</p>
 )}
 </div>

{/* question 3*/}

<div className={`border border-black transition-all duration-300 p-5 w-[930px] mt-4 ${setsoftware2 ? 'h-auto' : 'h[70px]'} `} >
 <div className='flex flex-row items-start '>

<h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>How do you ensure the security of my software?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph2}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software2 && (

<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'> Security is our top priority. We use industry-standard security practices throughout the development lifecycle, including secure coding, data encryption, and ongoing vulnerability assessments to protect your software and data.</p>
 )}
 </div>


{/* question 4*/}

<div className={`border border-black transition-all duration-300 p-5 w-[930px] mt-4 ${setsoftware3 ? 'h-auto' : 'h[70px]'} `} >
 <div className='flex flex-row items-start '>

<h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>What is your software development process?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph3}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software3 && (

<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'> We believe in collaboration and client involvement. Our process typically involves an initial consultation, detailed requirement gathering, design and development phases, rigorous testing, and ongoing maintenance.

</p>
 )}
 </div>

 {/* question 5*/}

<div className={`border border-black transition-all duration-300 p-5 w-[930px] mt-4 ${setsoftware4 ? 'h-auto' : 'h[70px]'} `} >
 <div className='flex flex-row items-start '>

<h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>How much does software development cost?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph4}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software4 && (

<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'> The cost depends on the project's scope, complexity, and features. We offer free consultations to discuss your needs and provide a tailored project estimate.

</p>
 )}
 </div>What are the benefits of custom software development?

 {/* question 6*/}

 <div className={`border border-black transition-all duration-300 p-5 mb-5 w-[930px] mt-4 ${setsoftware5 ? 'h-auto' : 'h[70px]'} `} >
 <div className='flex flex-row items-start '>

<h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>What are the benefits of custom software development?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph5}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software5 && (

<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'> Custom software solutions offer several benefits. You can streamline processes with automation, create user-friendly interfaces for better engagement, and develop unique solutions that give you a competitive advantage.


</p>
 )}
 </div>






            </div>
            <Footer/>
        </div>
        
    )
}

export default SoftwareDevelopments
