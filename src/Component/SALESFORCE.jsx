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
            <Header/>

            {/*Component one*/}
            <div className='relative'>
        <img className='w-full md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
        <h1 className='absolute inset-0 flex items-center justify-center font-bold md:text-[70px] text-[40px] text-center font-serif text-white bg-black bg-opacity-50'>
        Salesforce Consulting

        </h1>
      </div>




            {/*Component two*/}

            <div className='flex flex-col mt-[50px] md:m-0 m-2 md:ml-[340px]'>

                <h1 className='font-bold md:text-[35px] text-[30px]'>Salesforce Consulting</h1>
                <h1 className='font-bold text-[22px]'>Unleash the Power of Salesforce: Your Trusted Consulting Partner</h1>
                <p className='md:w-[930px] w-[300px]'>Salesforce offers immense potential, but maximizing its impact requires expert guidance. At Collectum Solutions, we’re your one-stop shop for Salesforce consulting, empowering your sales team and optimizing your CRM strategy.</p>

                
                <p className='md:w-[930px] w-[300px] mt-8'>Captivate Your Audience with Award-Winning Graphic Design from Collectum Solutions
In today's visually driven world, first impressions matter more than ever. Powerful graphic design is an essential tool for grabbing attention, establishing brand identity, and effectively communicating your message. At Collectum Solutions, we're a passionate team of graphic design experts dedicated to crafting visually stunning and strategically sound creative solutions that elevate your brand and propel your business forward.</p>
                <p className='mt-5 font-bold'>Bespoke Solutions for Salesforce Success</p>
                <p className='mt-5 md:w-[600px] w-[300px] '>Our comprehensive consulting services encompass three core areas:</p>

                <div className='mt-10 md:m-0 m-3  flex flex-col border-[1px] border-red-600 md:h-[360px] h-[600px] md:w-[930px] w-[300px]'>


                    <div className='md:flex md:flex-row flex-col gap-[180px]' >
                        <PiUsersThreeFill size={50} className='m-10 text-red-700' />
                        <h1 className='md:mt-14 mt-[-80px] w-[250px] md:ml-[-200px] ml-[100px] font-bold font-serif'>Consulting & Advisory Services</h1>

                        <FaMagnifyingGlass size={50} className='m-10 md:mt-10 mt-[130px]  md:ml-[-70px] text-red-700' />
                        <h1 className='md:mt-14 mt-[-90px] md:ml-[-210px] ml-[100px] font-bold font-serif'>Industry-Specific Solutions</h1>

                    </div>

                    <div className='md:flex md:flex-row flex-col gap-[180px]' >
                        <p className='m-10 md:mt-[-20px] mt-[-160px] text-[14px] relative md:top-0 top-[-10px]  md:w-[400px] w-[250px]'>We guide you through every step, from Salesforce implementation to optimization, maximizing your CRM investment.</p>
                        <p className='md:mt-[-20px] md:ml-[-170px] ml-[50px] mt-[90px] text-[14px] md:w-[430px] w-[250px]' >Leverage our expertise to tailor Salesforce to your unique industry needs, ensuring a perfect fit for your business.</p>
                    </div>

                    <div className='md:flex md:flex-row flex-col gap-[180px]' >
                        <AiOutlineFundProjectionScreen size={50} className='m-10  md:mt-[-10px] text-red-700' />
                        <h1 className=' md:ml-[-200px] ml-[100px] md:mt-0 mt-[-80px] font-bold font-serif'>Customization & Development</h1>

                       
                    </div>

                    <div className='flex flex-row'>
                        <p className='m-10 md:mt-[-20px] mt-[10px] text-[14px] w-[450px]'>Extend Salesforce functionality with custom development. We craft solutions that seamlessly integrate with your existing workflows.</p>
                        
                    </div>

                </div>

{/*Component four*/}

<h1  className='font-bold text-[22px] mt-5' >Data-Driven Insights for Sales Transformation</h1>
<p className='md:w-[930px] w-[300px]'>We go beyond implementation. We harness the power of Salesforce data to drive tangible results. We help you analyze sales trends, identify key performance indicators (KPIs), and continuously improve your CRM strategy. These data-driven insights empower your sales team to close more deals, build stronger client relationships, and ultimately achieve your business goals.</p>

<h1  className='font-bold text-[22px] mt-5' >Invest in Your Salesforce Journey</h1>
<p className='md:w-[930px] w-[300px]'>Partnering with Collectum Solutions equips you with a powerful toolset and the expertise to unlock its full potential. We optimize your Salesforce implementation, empower your sales team, and propel your business towards long-term growth.</p>

<h1  className='font-bold text-[22px] mt-5' >Ready to Supercharge Your Sales with Salesforce?</h1>
<p className='md:w-[930px] w-[300px]'>Contact Collectum Solutions today for a free consultation! Let’s assess your needs, discuss your goals, and craft a customized Salesforce strategy that propels your sales success to new heights.</p>

{/*Component five question 1*/}


<div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${software ? 'h-auto' : 'md:h-[70px] h-[100px]'} flex flex-col`}>   
 <div className='md:flex flex-row items start'>

    <h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>How can Salesforce Consulting benefit my business?</h1>
    <button className='ml-48 mt-[1px]' onClick={toogleParagraph}>
        <CiCirclePlus size={30} />
      </button>
    </div>

    {software && (
<p className = 'mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'>
Salesforce consulting ensures you maximize your investment, optimizes your sales process for your industry, and leverages data to empower your team. We also help with user adoption, create custom functionalities, and provide ongoing support.</p>
)}
</div>

{/* question 2*/}

 <div className={`border md:m-0 m-3   border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${software1 ? 'h-auto' : 'md:h[70px] h:[50px]'} `} >
 <div className='md:flex flex-row items start'>

<h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>How can Salesforce Consulting benefit my business?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph1}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software1 && (

<p className = 'mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'>We offer a comprehensive suite of services including strategic implementation, industry-specific tailoring, custom development, data analysis & optimization to refine your CRM strategy.nified and efficient operation.</p>
 )}
 </div>

{/* question 3*/}

<div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${software2 ? 'h-auto' : 'md:h[70px] h:[50px]'} `} >
 <div className='md:flex flex-row items-start '>

<h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>What Salesforce consulting services do you offer?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph2}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software2 && (

<p className = 'mt-3  text-[14px] md:w-[800px] w-[250px] text-black font-normal'> Through a detailed needs assessment, secure data migration, user training, and ongoing support, we ensure a smooth transition and user adoption.

</p>
 )}
 </div>


{/* question 4*/}

<div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${software3 ? 'h-auto' : 'md:h[70px] h:[50px]'} `} >
 <div className='md:flex flex-row items-start '>

<h1 className='md:w-[650px] w-[280px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>Can you handle Salesforce customization for my specific needs?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph3}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software3 && (

<p className = 'mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'> Absolutely! Our skilled developers can create custom objects, fields, and workflows to perfectly tailor Salesforce to your unique sales strategy.

</p>
 )}
 </div>

 {/* question 5*/}

 <div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${software4 ? 'h-auto' : 'md:h[70px] h:[50px]'} `} >
 <div className='md:flex flex-row items-start '>

<h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>How do you leverage data to improve my sales strategy?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph4}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software4 && (

<p className = 'mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'> We analyze Salesforce data to identify trends, understand customer behavior, and track KPIs. These insights empower your sales team to close more deals and build stronger relationships.

</p>
 )}
 </div>

 {/* question 6*/}

 <div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 md:mb-5 ${software5 ? 'h-auto' : 'md:h[70px] h:[50px]'} `} >
 <div className='md:flex flex-row items-start '>

<h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>How do I get started?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph5}>
        <CiCirclePlus size={30} /> </button>
 </div>

 { software5 && (

<p className = 'mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'> Contact Collectum Solutions today for a free consultation! We'll assess your needs, discuss your goals, and craft a customized Salesforce strategy for your success.



</p>
 )}
 </div>






            </div>
            <Footer/>
        </div>
        
    )
}

export default SalesForce
