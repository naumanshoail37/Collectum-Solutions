import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { FaRegLightbulb } from "react-icons/fa";
import { TbClockSearch } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";

function SAP_BI_Consulting() {
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
        SAP-B1 Consulting

        </h1>
      </div>
          




          {/*Component two*/}

          <div className='flex flex-col mt-[50px] md:m-0 m-2 md:ml-[340px]'>

              <h1 className='font-bold text-[35px]'>SAP-BI Consulting</h1>
              <h1 className='font-bold text-[22px]'>Embrace Streamlined Operations & Enhanced Growth:</h1>
              <p className='md:w-[930px] w-[300px]'>The business landscape is constantly evolving, demanding efficient and data-driven solutions for success. At Collectum Solutions, we’re your SAP Business One (SAP B1) consulting partner, dedicated to helping you unlock the full potential of this powerful ERP system.</p>

              <h1 className='mt-3 font-bold text-[22px]'>Our SAP B1 Consulting Services:</h1>
              <p className='md:w-[930px] w-[300px]'>We offer a comprehensive range of SAP B1 consulting services, tailored to optimize your operations, empower your workforce, and drive measurable results. From strategic consulting and seamless implementation to bespoke add-on development and ongoing support, our team of SAP B1 experts ensures you get the most out of your investment.</p>
              <p className='mt-10 md:w-auto w-[300px]'>We offer a comprehensive suite of SAP B1 consulting services designed to meet your specific needs. Here's how we can help:</p>

              <div className='mt-10  flex flex-col border-[1px] border-red-600 md:h-[380px] h-[800px] md:w-[930px] w-[335px]'>


              <div className='md:flex md:flex-row flex-col gap-[180px]' >
                      <FaRegLightbulb size={50} className='m-10 md:ml-7 text-red-700' />
                      <h1 className='md:mt-14 mt-[-80px] w-[250px] md:ml-[-210px] ml-[100px] font-bold font-serif'>Enhanced Efficiency</h1>

                      <TbClockSearch size={50} className='m-10 md:mt-10 mt-[180px]  md:ml-[-50px] text-red-700' />
                      <h1 className='md:mt-14 mt-[-80px] md:ml-[-210px] ml-[100px] font-bold font-serif'>Real-Time Visibility</h1>
                 

                  </div>

                  <div className='md:flex md:flex-row flex-col gap-[180px]'>
                      <p className='m-10 md:mt-[-20px] mt-[-120px] text-[14px] relative md:top-0 top-[-60px] md:ml-10 ml-[50px]  md:w-[400px] w-[250px]'>Automate core business processes like financials, accounting, inventory management, customer relationship management (CRM), and sales – freeing up valuable time and resources to focus on growth.</p>
                      <p className='md:mt-[-20px] md:ml-[-180px] ml-[50px] mt-[-10px] text-[14px] md:w-[430px] w-[250px]' >Unlock the power of real-time visibility to stay agile and responsive in today's dynamic business landscape, ensuring you're always one step ahead of the competition</p>
                  </div>

                  <div className='md:flex md:flex-row flex-col gap-[180px]' >
                      <FaHandHoldingHeart size={50} className='m-10  md:mt-[-10px] text-red-700' />
                      <h1 className=' md:ml-[-200px] ml-[100px] md:mt-0 mt-[-80px] font-bold font-serif'>Improved Customer Satisfaction</h1>
                    

                      <GoGraph size={50} className='m-10 md:ml-[-80px] md:mt-[-10px] mt-[100px] text-red-700' />
                      <h1 className=' md:ml-[-200px] ml-[100px] md:mt-0 mt-[-70px] font-bold font-serif'>Scalability and Growth</h1>
                  </div>

                  <div className='md:flex md:flex-row flex-col'>
                      <p className='m-10 md:mt-[-20px] mt-[50px] text-[14px] md:w-[400px] w-[300px] relative md:top-0 top-[-180px]'>Deliver exceptional customer service with efficient order processing, inventory management, and improved communication.</p>
                      <p className='md:m-0 m-10 md:mt-[-20px] mt-[-110px] text-[14px] md:w-[430px] w-[300px]' >SAP B1 is designed to scale alongside your business. As your operations grow, SAP B1 adapts to accommodate your evolving needs.</p>
                  </div>

              </div>

{/*Component four*/}

<h1  className='font-bold text-[22px] mt-5' >Prioritizing User Experience for Optimal Adoption:</h1>
<p className='md:w-[930px] w-[300px]'>At Collectum Solutions, we understand that successful SAP Business One (SAP B1) implementation goes beyond just functionality. We prioritize a user-centric approach, ensuring your team embraces the system and maximizes its potential.</p>


<p className='md:w-[930px] w-[300px] mt-5'>Our team designs intuitive and user-friendly interfaces that are aesthetically pleasing and accessible across all devices. This fosters a smooth user experience, minimizing training time, and encouraging user adoption.</p>

<h1  className='font-bold text-[22px] mt-5' >Investing in Your Team's Success:</h1>
<p className='md:w-[930px] w-[300px]'>A well-implemented SAP B1 system empowers your workforce. Our approach focuses on optimizing workflows and streamlining processes, allowing your team to focus on what matters most – achieving your business goals.</p>

<h1  className='font-bold text-[22px] mt-5' >Beyond Efficiency, Driving Measurable Results:</h1>
<p className='md:w-[930px] w-[300px]'>Investing in SAP B1 consulting services with Collectum Solutions delivers a powerful return on investment. We help you achieve:</p>

<li className='mt-3 md:w-[930px] w-[300px]'>Increased Efficiency: Streamlined workflows and automated processes free up valuable resources and boost overall efficiency.</li>
<li className='md:w-[930px] w-[300px]' >Empowered Workforce: A user-friendly system empowers your team with the tools they need to excel in their roles.</li>
<li className='md:w-[930px] w-[300px] ' >Enhanced Customer Satisfaction: Improved customer relationship management fosters stronger relationships and boosts customer satisfaction.</li>

<h1  className='font-bold md:text-[22px] text-[20px] mt-5' >Ready to Unlock the Power of SAP B1?</h1>
<p className='md:w-[930px] w-[300px]'>Investing in SAP B1 consulting services with Collectum Solutions delivers a powerful return on investment. We help you achieve:</p>


{/*Component five question 1*/}


<div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${software ? 'h-auto' : 'md:h-[70px] h-[100px]'} flex flex-col`}>   
<div className='md:flex flex-row items start'>

  <h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>What is SAP B1, and how can it benefit my business?</h1>
  <button className='ml-48 mt-[1px]' onClick={toogleParagraph}>
      <CiCirclePlus size={30} />
    </button>
  </div>

  {software && (
<p className = 'mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'>
SAP B1, or SAP Business One, is an integrated Enterprise Resource Planning (ERP) solution designed specifically for small and medium-sized businesses (SMBs). It helps streamline business operations by automating core processes such as financials, accounting, inventory management, CRM, and sales, leading to improved efficiency, real-time visibility, and scalability.
</p>
)}
</div>

{/* question 2*/}

<div className={`border md:m-0 m-3   border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${setsoftware1 ? 'h-auto' : 'md:h[70px] h:[50px]'} `} >
<div className='md:flex flex-row items start'>

<h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>Is SAP B1 suitable for businesses of all sizes and industries?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph1}>
      <CiCirclePlus size={30} /> </button>
</div>

{ software1 && (

<p className = 'mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'> While SAP B1 is primarily targeted towards SMBs, its scalability and flexibility make it suitable for businesses across various industries. Whether you're a manufacturing company, distributor, retailer, or service provider, SAP B1 can be customized to meet your specific business needs and support your growth objectives.

</p>
)}
</div>

{/* question 3*/}

<div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${setsoftware2 ? 'h-auto' : 'md:h[70px] h:[50px]'} `} >
<div className='md:flex flex-row items-start '>

<h1 className='md:w-[650px] w-[280px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>How long does it take to implement SAP B1?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph2}>
      <CiCirclePlus size={30} /> </button>
</div>

{ software2 && (

<p className = 'mt-3  text-[14px] md:w-[800px] w-[250px] text-black font-normal'> The timeline for SAP B1 implementation can vary depending on factors such as the size and complexity of your business, customization requirements, data migration, and system integration. Typically, implementation can take anywhere from a few weeks to several months. Our team works closely with you to ensure a smooth and efficient implementation process.

</p>
)}
</div>


{/* question 4*/}

<div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${setsoftware3 ? 'h-auto' : 'md:h[70px] h:[50px]'} `} >
<div className='md:flex flex-row items-start '>

<h1 className='md:w-[650px] w-[280px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>What kind of ongoing support do you provide after SAP B1 implementation?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph3}>
      <CiCirclePlus size={30} /> </button>
</div>

{ software3 && (

<p className = 'mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'> We offer comprehensive ongoing support to ensure you get the most out of your SAP B1 investment. Our support services include troubleshooting technical issues, providing user training and guidance, implementing software updates and patches, and offering strategic advice to help you optimize your SAP B1 usage and maximize business value.

</p>
)}
</div>

{/* question 5*/}

<div className={`border md:m-0 m-3 md:mb-3  border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${setsoftware4 ? 'h-auto' : 'md:h[70px] h:[50px]'} `} >
<div className='md:flex flex-row items-start '>

<h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>Can SAP B1 be integrated with existing systems and software?</h1>
<button className='ml-48 mt-[1px]' onClick={toogleParagraph4}>
      <CiCirclePlus size={30} /> </button>
</div>

{ software4 && (

<p className = 'mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'> Yes, one of the key benefits of SAP B1 is its ability to seamlessly integrate with other systems and software applications commonly used in businesses, such as CRM systems, e-commerce platforms, and third-party analytics tools. Our team ensures a smooth integration process, minimizing disruption to your daily operations and maximizing the efficiency of your overall business processes.


</p>
)}
</div>

          </div>
          <Footer/>
      </div>
      
  )
}


export default SAP_BI_Consulting
