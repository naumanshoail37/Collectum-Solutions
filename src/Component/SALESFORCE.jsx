import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { PiUsersThreeFill } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";

function SalesForce() {
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
                    Salesforce Consulting                    </h1>
                </div>
            </div>




            {/*Component two*/}

            <div className='flex flex-col mt-[50px] ml-[340px]'>

                <h1 className='font-bold text-[35px]'>Salesforce Consulting</h1>
                <h1 className='font-bold text-[22px]'>Unleash the Power of Salesforce: Your Trusted Consulting Partner</h1>
                <p className='w-[930px]'>Salesforce offers immense potential, but maximizing its impact requires expert guidance. At Collectum Solutions, we’re your one-stop shop for Salesforce consulting, empowering your sales team and optimizing your CRM strategy.</p>

                
                <p className='w-[930px] mt-8'>Captivate Your Audience with Award-Winning Graphic Design from Collectum Solutions
In today's visually driven world, first impressions matter more than ever. Powerful graphic design is an essential tool for grabbing attention, establishing brand identity, and effectively communicating your message. At Collectum Solutions, we're a passionate team of graphic design experts dedicated to crafting visually stunning and strategically sound creative solutions that elevate your brand and propel your business forward.</p>
                <p className='mt-5 font-bold'>Bespoke Solutions for Salesforce Success</p>
                <p className='mt-5 '>Our comprehensive consulting services encompass three core areas:</p>

                <div className='mt-10  flex flex-col border-[1px] border-red-600 h-[360px] w-[930px]'>


                    <div className='flex flex-row gap-[180px]' >
                        <PiUsersThreeFill size={50} className='m-10 text-red-700' />
                        <h1 className='mt-14 ml-[-200px] font-bold font-serif'>Consulting & Advisory Services</h1>

                        <FaMagnifyingGlass size={50} className='m-10 ml-[-70px] text-red-700' />
                        <h1 className='mt-14 ml-[-210px] font-bold font-serif'>Industry-Specific Solutions</h1>

                    </div>

                    <div className='flex flex-row'>
                        <p className='m-10 mt-[-20px] text-[14px] w-[400px]'>We guide you through every step, from Salesforce implementation to optimization, maximizing your CRM investment.</p>
                        <p className='mt-[-20px] text-[14px] w-[430px]' >Leverage our expertise to tailor Salesforce to your unique industry needs, ensuring a perfect fit for your business.</p>
                    </div>

                    <div className='flex flex-row gap-[180px]' >
                        <AiOutlineFundProjectionScreen size={50} className='m-10 mt-[-10px] text-red-700' />
                        <h1 className=' ml-[-200px] font-bold font-serif'>Customization & Development</h1>

                       
                    </div>

                    <div className='flex flex-row'>
                        <p className='m-10 mt-[-20px] text-[14px] w-[450px]'>Extend Salesforce functionality with custom development. We craft solutions that seamlessly integrate with your existing workflows.</p>
                        
                    </div>

                </div>

{/*Component four*/}

<h1  className='font-bold text-[22px] mt-5' >Data-Driven Insights for Sales Transformation</h1>
<p className='w-[930px]'>We go beyond implementation. We harness the power of Salesforce data to drive tangible results. We help you analyze sales trends, identify key performance indicators (KPIs), and continuously improve your CRM strategy. These data-driven insights empower your sales team to close more deals, build stronger client relationships, and ultimately achieve your business goals.</p>

<h1  className='font-bold text-[22px] mt-5' >Invest in Your Salesforce Journey</h1>
<p className='w-[930px]'>Partnering with Collectum Solutions equips you with a powerful toolset and the expertise to unlock its full potential. We optimize your Salesforce implementation, empower your sales team, and propel your business towards long-term growth.</p>

<h1  className='font-bold text-[22px] mt-5' >Ready to Supercharge Your Sales with Salesforce?</h1>
<p className='w-[930px]'>Contact Collectum Solutions today for a free consultation! Let’s assess your needs, discuss your goals, and craft a customized Salesforce strategy that propels your sales success to new heights.</p>

{/*Component five question 1*/}


<div className={`border border-black transition-all duration-300 p-5 w-[930px] mt-10 ${software ? 'h-auto' : 'h-[70px]'} flex flex-col`}>   
 <div className='flex flex-row items start'>

    <h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>How can Salesforce Consulting benefit my business?</h1>
    <button className='ml-48 mt-[1px]' onClick={toogleParagraph}>
        <CiCirclePlus size={30} />
      </button>
    </div>

    {software && (
<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'>
Salesforce consulting ensures you maximize your investment, optimizes your sales process for your industry, and leverages data to empower your team. We also help with user adoption, create custom functionalities, and provide ongoing support.</p>
)}
</div>

{/* question 2*/}

 <div className={`border border-black transition-all duration-300 p-5 w-[930px] mt-4 ${setsoftware1 ? 'h-auto' : 'h[70px]'} `} >
 <div className='flex flex-row items-start '>

<h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>How can Salesforce Consulting benefit my business?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph1}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software1 && (

<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'>We offer a comprehensive suite of services including strategic implementation, industry-specific tailoring, custom development, data analysis & optimization to refine your CRM strategy.nified and efficient operation.</p>
 )}
 </div>

{/* question 3*/}

<div className={`border border-black transition-all duration-300 p-5 w-[930px] mt-4 ${setsoftware2 ? 'h-auto' : 'h[70px]'} `} >
 <div className='flex flex-row items-start '>

<h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>What Salesforce consulting services do you offer?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph2}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software2 && (

<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'> Through a detailed needs assessment, secure data migration, user training, and ongoing support, we ensure a smooth transition and user adoption.

</p>
 )}
 </div>


{/* question 4*/}

<div className={`border border-black transition-all duration-300 p-5 w-[930px] mt-4 ${setsoftware3 ? 'h-auto' : 'h[70px]'} `} >
 <div className='flex flex-row items-start '>

<h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>Can you handle Salesforce customization for my specific needs?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph3}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software3 && (

<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'> Absolutely! Our skilled developers can create custom objects, fields, and workflows to perfectly tailor Salesforce to your unique sales strategy.

</p>
 )}
 </div>

 {/* question 5*/}

<div className={`border border-black transition-all duration-300 p-5 w-[930px] mt-4 ${setsoftware4 ? 'h-auto' : 'h[70px]'} `} >
 <div className='flex flex-row items-start '>

<h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>How do you leverage data to improve my sales strategy?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph4}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software4 && (

<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'> We analyze Salesforce data to identify trends, understand customer behavior, and track KPIs. These insights empower your sales team to close more deals and build stronger relationships.

</p>
 )}
 </div>

 {/* question 6*/}

 <div className={`border border-black transition-all duration-300 p-5 mb-5 w-[930px] mt-4 ${setsoftware5 ? 'h-auto' : 'h[70px]'} `} >
 <div className='flex flex-row items-start '>

<h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>How do I get started?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph5}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software5 && (

<p className = 'mt-3 text-[14px] w-[800px] text-black font-normal'> Contact Collectum Solutions today for a free consultation! We'll assess your needs, discuss your goals, and craft a customized Salesforce strategy for your success.



</p>
 )}
 </div>






            </div>
            <Footer/>
        </div>
        
    )
}

export default SalesForce
