import React from 'react'
import Header from './Header';
import img from '../Component/aboutimage.jpg'
import img1 from '../Component/homepic2.jpg'
import { CiCirclePlus } from "react-icons/ci";
import { useState } from 'react';


function Faqs() {

const  [isFaqs , SetisFaqs] = useState(false)
const  [isFaqs1 , SetisFaqs1] = useState(false)
const  [isFaqs2 , SetisFaqs2] = useState(false)
const  [isFaqs3 , SetisFaqs3] = useState(false)
const  [isFaqs4 , SetisFaqs4] = useState(false)
const  [isFaqs5 , SetisFaqs5] = useState(false)
const  [isFaqs6 , SetisFaqs6] = useState(false)
const  [isFaqs7 , SetisFaqs7] = useState(false)
const  [isFaqs8 , SetisFaqs8] = useState(false)


const toogleParagraph = () => {

    SetisFaqs(!isFaqs)
   
};
const toogleParagraph1 = () => {

    SetisFaqs1(!isFaqs1)
   
};

const toogleParagraph2 = () => {

  SetisFaqs2(!isFaqs2)
 
};

const toogleParagraph3 = () => {

  SetisFaqs3(!isFaqs3)
};
const toogleParagraph4 = () => {

  SetisFaqs4(!isFaqs4)
 
};
const toogleParagraph5 = () => {

  SetisFaqs5(!isFaqs5)
 
};
const toogleParagraph6 = () => {

  SetisFaqs6(!isFaqs6)
 
};
const toogleParagraph7 = () => {

  SetisFaqs7(!isFaqs7)
 
};
const toogleParagraph8 = () => {

  SetisFaqs8(!isFaqs8)
 
};

  return (
    <div className='OurTeam  bg-white h-[1500px] '>

    <Header />

{/*Component one */}
<div className='relative'>
        <img className='w-full md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
        <h1 className='absolute inset-0 flex items-center justify-center font-bold md:text-[70px] text-[40px] text-center font-serif text-white bg-black bg-opacity-50'>
          Faqs
        </h1>
      </div>
    {/*Component two */}
<div className='relative md:flex md:flex-row flex flex-col m-[100px] md:ml-[210px] ml-[20px] '>

    <div className='flex flex-row gap-[300px]'>
<img  src={img1} alt="" className=' h-[70px] w-[70px] ' />
<div className='flex flex-col'><h1 className='text-[12px] ml-[-350px] font-bold mt-1 w-[300px] '>ANSWERS TO YOUR COMMON QUERIES</h1>
<h1 className='  md:text-[40px] text-[30px] md:w-[500px] font-bold font-serif mt-[10px] ml-[-374px]'>Frequently Asked Questions</h1>
<p className='font-normal text-[14px] w-[350px] ml-[-374px]'>Browse through our Frequently Asked Questions for instant solutions to common queries. Whether it's troubleshooting tips or general inquiries, find all the answers you need right here</p>
<div className='mt-[30px]'><button className='bg-red-800 h-[50px] w-[200px] text-[14px] ml-[-385px] text-white font-bold rounded-full p-3'>Explore more about us</button></div>
</div>
</div>

<div className='md:flex flex-col  text-red-800 md:mt-0 mt-10  '>


<div className='space-y-4'>
  {/* First Question */}
  <div className={`border border-black transition-all duration-300 p-2 ${isFaqs ? 'h-auto' : 'md:h-[40px] h-[120px]'} flex flex-col`}>
    <div className='flex flex-row items-start'>
      <h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>
        What Services does Collectum Solutions Offer?
      </h1>
      <button className='ml-2 mt-[-3px]' onClick={toogleParagraph}>
        <CiCirclePlus size={30} />
      </button>
    </div>
    {isFaqs && (
      <p className='mt-3 text-[14px] md:w-[600px] w-[250px] text-black font-normal'>
        Collectum Solutions is a full-service resource agency specializing in digital marketing, graphic design, SAP B1 solutions, and web development. We help businesses thrive in the digital age by providing comprehensive solutions tailored to their specific needs.
      </p>
    )}
  </div>

  {/* Second Question */}
  <div className={`border border-black transition-all duration-300 p-2 ${isFaqs1 ? 'h-auto' : 'md:h-[40px] h-[120px]'} flex flex-col`}>
    <div className='flex flex-row items-start'>
      <h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>
        What is your approach to working with Clients?
      </h1>
      <button className='ml-2 mt-[-3px]' onClick={toogleParagraph1}>
        <CiCirclePlus size={30} />
      </button>
    </div>
    {isFaqs1 && (
      <p className='mt-3 text-[14px] md:w-[600px] w-[250px] text-black font-normal'>
        We believe in a collaborative approach. We work closely with our clients to understand their unique goals and challenges, then develop customized solutions that deliver exceptional results.
      </p>
    )}
  </div>
  


{/*Third  Question*/}
<div className={`border border-black transition-all duration-300 p-2 ${isFaqs2 ? 'h-auto' : 'md:h-[40px] h-[120px]'} flex flex-col`}>
<div className='flex flex-row items-start'>  
<h1 className=' w-[650px] text-start text-[18px] pr-2 font-semibold'>
  Do you offer standalone services, or do I need to purchase a package?</h1> 
<button className='ml-2 mt-[-3px]  ' onClick={toogleParagraph2} ><CiCirclePlus size={30}   /></button>
</div>
{isFaqs2 && (
  <p className = 'mt-3 text-[14px] md:w-[600px] w-[250px] text-black font-normal '>
  Success is measured by achieving your goals. We track key performance indicators (KPIs) relevant to your project and provide regular reports to demonstrate the impact of our work.
  </p>
)}
</div>
{/*forth  Question*/}


<div className={`border border-black transition-all duration-300 p-2 ${isFaqs3 ? 'h-auto' : 'md:h-[40px] h-[120px]'} flex flex-col`}>
<div className='flex flex-row items-start'>  
<h1 className='w-[650px]   text-start text-[18px] pr-2 font-semibold'> Can you help me create content for my website? </h1> 
<button className='ml-2 mt-[-3px] ' onClick={toogleParagraph3} ><CiCirclePlus size={30}   /></button>
</div>
{isFaqs3 && (
<p className = 'mt-3 text-[14px] md:w-[600px] w-[250px] text-black font-normal'>
We offer both standalone services and comprehensive packages. We will work with you to understand your specific needs and recommend the best approach.</p>
)}
</div>

{/*Fifth  Question*/}

<div className={`border border-black transition-all duration-300 p-2 ${isFaqs4 ? 'h-auto' : 'md:h-[65px] h-[150px]'} flex flex-col`}>
<div className='flex flex-row'>  
<h1 className=' w-[650px] text-start text-[18px]  pr-2 font-semibold '> I need help with graphic design. Can you create logos, brochures, or social media graphics? </h1> 
<button className='ml-2 mt-[-3px] ' onClick={toogleParagraph4} ><CiCirclePlus size={30}   /></button>
</div>
{isFaqs4 && (
<p className = 'mt-3 text-[14px] md:w-[600px] w-[250px] text-black font-normal'>
Our talented graphic design team can create a wide range of visual assets to elevate your brand identity and marketing materials.
</p>
)}
</div>
{/*Sixth  Question*/}

<div className={`border border-black transition-all duration-300 p-2 ${isFaqs5 ? 'h-auto' : 'md:h-[65px] h-[120px]' } flex flex-col`}>
<div className='flex flex-row items-start'>  
<h1 className=' w-[650px] text-start text-[18px]  pr-2 font-semibold'> Do you develop websites from scratch, or can you work with existing platforms? </h1> 
<button className='ml-2 mt-[-3px] 'onClick={toogleParagraph5} ><CiCirclePlus size={30}   /></button>
</div>
{isFaqs5 && (
  <p className = 'mt-3 text-[14px] md:w-[600px] w-[250px] text-black font-normal'>
  We are adept at both! We can develop custom websites from scratch or work with existing platforms like WordPress to create a website that meets your needs.</p>
)}
</div>

{/*Ninth  question */}

<div className={`border border-black transition-all duration-300 p-2 ${isFaqs8 ? 'h-auto' : 'md:h-[40px] h-[120px]'} flex flex-col ` }>
<div className='flex flex-row items-start'>  
<h1 className=' w-[650px] text-start text-[18px]  pr-2 font-semibold'> Can you integrate SAP B1 solutions with my existing systems? </h1> 
<button className='mt-[-3px] ml-2 ' onClick={toogleParagraph8} ><CiCirclePlus size={30}   /></button>
</div>
{isFaqs8 && (

<p className='mt-3 text-[14px] md:w-[600px] w-[250px] text-black font-normal' >
Yes, our team of experts can seamlessly integrate SAP B1 with your existing software to streamline your business processes and improve efficiency.
</p>
)}
</div>

{/*Eight  question */}
<div className={`border border-black transition-all duration-300 p-2 ${isFaqs6 ? 'h-auto' : 'md:h-[40px] h-[120px]'} flex flex-col `} >
<div className='flex flex-row items-start'>  
<h1 className=' w-[650px] text-start text-[18px]  pr-2 font-semibold'>What is your typical project timeline? </h1> 
<button className='ml-2 mt-[-3px] 'onClick={toogleParagraph6} ><CiCirclePlus size={30}   /></button>
</div>
{isFaqs6 && (
  <p className = 'mt-3 text-[14px] md:w-[600px] w-[250px] text-black font-normal'>
 Project timelines vary depending on the scope and complexity of the project. We will provide a detailed timeline during the initial consultation.</p>
)}
</div>
<div className='border border-black transition-all duration-1000 p-2 '>
<div className='flex flex-row'>  
<h1 className='w-[650px] text-start text-[18px]  pr-2  font-semibold text'>How do I stay informed about project progress? </h1> 
<button className='mt-[-3px] ml-2 ' onClick={toogleParagraph7} ><CiCirclePlus size={30}   /></button>
</div>
{isFaqs7 && (
  <p className = 'mt-3 text-[14px] md:w-[600px] w-[250px] text-black font-normal'>
We maintain open communication throughout the project. We schedule regular meetings and provide progress reports to keep you updated on every step of the process.</p>
)}
</div>
</div>

</div>

</div>












    </div>
  );
}

export default Faqs
