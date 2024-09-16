import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { IoIosSettings } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { FaCloudArrowUp } from "react-icons/fa6";
import { PiSpeakerHigh } from "react-icons/pi";
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { MdScreenSearchDesktop } from "react-icons/md";


function CloudSolution() {
    const [software, setsoftware] = useState(false)
    const [software1, setsoftware1] = useState(false)
    const [software2, setsoftware2] = useState(false)
    const [software3, setsoftware3] = useState(false)
    const [software4, setsoftware4] = useState(false)
    const [software5, setsoftware5] = useState(false)

    const toogleParagraph = () => {
        setsoftware(!software)
    }

    const toogleParagraph1 = () => {

        setsoftware1(!software1)
    }
    const toogleParagraph2 = () => {

        setsoftware2(!software2)
    }
    const toogleParagraph3 = () => {

        setsoftware3(!software3)
    }
    const toogleParagraph4 = () => {

        setsoftware4(!software4)
    }
    const toogleParagraph5 = () => {

        setsoftware5(!software5)
    }

    return (
        <div className='Software Development page bg-white h-auto'>

            {/*Component one*/}
            <div className='pic'>

                <Header />

                <div className='relative'>
                    <img className='w-full  h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        Cloud Solutions

                    </h1>
                </div>
            </div>




            {/*Component two*/}

            <div className='flex flex-col mt-[50px] ml-[340px]'>

                <h1 className='font-bold text-[35px]'>Cloud Solutions</h1>
                <h1 className='font-bold text-[22px]'>Unleash Agility and Efficiency: How Cloud Solutions Empower Your Business</h1>
                <p className='w-[930px]'>In today’s dynamic business environment, agility and scalability are crucial for success. Cloud Solutions offer the perfect blend of both, enabling you to streamline operations, optimize workflows, and gain valuable insights across your organization.
                    However, navigating the cloud landscape and choosing the right solutions can be a complex task. Here’s where Collectum Solutions comes in – your trusted partner for unlocking the power of the cloud.</p>

                <h1 className='mt-3 font-bold text-[22px]'>Collectum Solutions: Your Cloud Transformation Experts</h1>
                <p className='w-[960px]'>Our team of certified cloud specialists, with expertise in leading platforms like AWS, Azure, and GCP, possesses the knowledge and experience to guide you seamlessly through your cloud journey. We take a collaborative approach, starting by understanding your specific needs and challenges. Then, we recommend the perfect cloud solutions – from ERP systems to business process automation (BPA) tools – that empower you to achieve your business goals.</p>
                <h1 className='font-bold text-[22px] mt-5'>The benefits of this includes:</h1>

                <div className='mt-10  flex flex-col border-[1px] border-red-600 h-[570px] w-[960px]'>


                    <div className='flex flex-row gap-[180px]' >
                        <IoIosSettings size={50} className='m-10 text-red-700' />
                        <h1 className='mt-14 ml-[-200px] font-bold font-serif'>ERP</h1>

                        <FaCloud size={50} className='m-10 ml-[150px] text-red-700' />
                        <h1 className='mt-14 ml-[-190px] font-bold font-serif'>Cloud Operations Management (CloudOps)</h1>

                    </div>

                    <div className='flex flex-row'>
                        <p className='m-10 mt-[-20px] text-[14px] w-[400px]'>Transform your operations with cloud-based ERP solutions. Streamline processes, gain valuable insights, and unlock scalability.</p>
                        <p className='mt-[-20px] text-[14px] w-[430px]' >Don't get bogged down by cloud complexities. We manage your infrastructure for peak performance and cost-efficiency.</p>
                    </div>

                    <div className='flex flex-row gap-[180px]' >
                        <FaCloudArrowUp size={50} className='m-10 mt-[-10px] text-red-700' />
                        <h1 className=' ml-[-200px] font-bold font-serif'>Seamless Cloud Migration</h1>

                        <PiSpeakerHigh size={50} className='m-10 ml-[-25px] mt-[-10px] text-red-700' />
                        <h1 className=' ml-[-200px]  font-bold font-serif'>Business Process Automation (BPA)

                        </h1>
                    </div>
                    <div className='flex flex-row gap-[180px]' >
                        <MdScreenSearchDesktop size={50} className='m-10 mt-[75px] text-red-700' />
                        <h1 className=' ml-[-200px] mt-[80px] font-bold font-serif w-[300px]'>Expertise Across Major Cloud Platforms (AWS, Azure, GCP)</h1>
                    </div>

                    <div className='flex flex-row'>

                        <p className='mt-[-190px] ml-[40px]  text-[14px] w-[400px]' >Experience a smooth and secure migration to the cloud with our proven processes, comprehensive support, and minimal disruption.</p>
                        <p className='mt-[-190px] ml-[40px]  text-[14px] w-[400px]' >Boost productivity and eliminate tedious tasks. We automate key business processes in the cloud, freeing your team to focus on strategic initiatives.</p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='mt-[-10px] ml-[40px]  text-[14px] w-[400px]'>We're cloud-agnostic experts. Whether it's AWS, Azure, or GCP, we help you choose the perfect platform and deliver a successful cloud strategy.
                        </p>
                    </div>

                </div>

                {/*Component four*/}

                <h1 className='font-bold text-[22px] mt-5' >Beyond Implementation: Your Cloud Journey Starts Here</h1>
                <p className='w-[930px]'>At Collectum Solutions, we understand that migrating to the cloud is just the first step. To unlock its full potential, you need a trusted partner for ongoing support. We offer a comprehensive suite of services to ensure your cloud journey is a success:</p>

                <li className='mt-2'><span className='font-bold'>Expert Guidance:</span> Our cloud migration specialists manage the entire process, minimizing disruption and ensuring a smooth transition.</li>
                <li className='w-[960px]'><span className='font-bold'>Ongoing Cloud Operations Management</span> We take care of your cloud infrastructure, optimizing performance, managing costs, and freeing your IT team to focus on strategic initiatives.</li>
                <li className='w-[960px]'><span className='font-bold'>Seamless Business Process Automation</span>  Eliminate manual tasks and streamline workflows by automating key processes within your cloud environment.</li>
                <li className='w-[960px]'><span className='font-bold'>Continuous Optimization and Support</span>  Benefit from ongoing support, including user training, system customization, and maintenance, to ensure your cloud solutions remain efficient and secure.</li>

                {/*Component five question 1*/}


                <div className={`border border-black transition-all duration-300 p-5 w-[960px] mt-10 ${software ? 'h-auto' : 'h-[70px]'} flex flex-col`}>
                    <div className='flex flex-row items start'>

                        <h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>What are the benefits of migrating my business to the cloud?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph}>
                            <CiCirclePlus size={30} />
                        </button>
                    </div>

                    {software && (
                        <p className='mt-3 text-[14px] w-[800px] text-black font-normal'>
                            Cloud computing offers numerous advantages. You can easily scale resources up or down to meet changing business demands, eliminating the need for expensive hardware upgrades. Additionally, cloud solutions can potentially save money by eliminating upfront hardware costs and simplifying IT management. Furthermore, you gain increased accessibility by securely accessing data and applications from anywhere with an internet connection, enhancing collaboration and remote work capabilities.
                        </p>
                    )}
                </div>

                {/* question 2*/}

                <div className={`border border-black transition-all duration-300 p-5 w-[960px] mt-4 ${setsoftware1 ? 'h-auto' : 'h[70px]'} `} >
                    <div className='flex flex-row items-start '>

                        <h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>What types of cloud solutions do you offer?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph1}>
                            <CiCirclePlus size={30} /> </button>
                    </div>

                    {software1 && (

                        <p className='mt-3 text-[14px] w-[800px] text-black font-normal'> Collectum Solutions provides a comprehensive range of cloud services, including: Collectum Solutions offers a comprehensive suite of cloud services. We guide you through the entire migration process, minimizing disruption for a smooth transition. Our CloudOps team actively manages your cloud infrastructure, optimizing performance, controlling costs, and providing ongoing maintenance. We can also automate key business processes within your cloud environment to free up valuable staff resources and improve efficiency. Additionally, we offer various cloud-based ERP solutions tailored to your specific needs, streamlining operations and unlocking valuable insights                        </p>
                    )}
                </div>

                {/* question 3*/}

                <div className={`border border-black transition-all duration-300 p-5 w-[960px] mt-4 ${setsoftware2 ? 'h-auto' : 'h[70px]'} `} >
                    <div className='flex flex-row items-start '>

                        <h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>How do you ensure a smooth cloud migration for my business?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph2}>
                            <CiCirclePlus size={30} /> </button>
                    </div>

                    {software2 && (

                        <p className='mt-3 text-[14px] w-[800px] text-black font-normal'> We employ a proven methodology for cloud migration, involving several key steps. First, we collaborate with you to assess your current infrastructure, identify business goals, and establish a customized migration plan. This is followed by secure data migration techniques to ensure the integrity and confidentiality of your sensitive information. User training and support are provided throughout the process to minimize disruption and maximize user adoption. Finally, we remain your trusted partner after implementation, offering ongoing support, customization, and optimization to ensure continued success.                        </p>
                    )}
                </div>


                {/* question 4*/}

                <div className={`border border-black transition-all duration-300 p-5 w-[960px] mt-4 ${setsoftware3 ? 'h-auto' : 'h[70px]'} `} >
                    <div className='flex flex-row items-start '>

                        <h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>Can you handle cloud solutions on multiple platforms (AWS, Azure, GCP)?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph3}>
                            <CiCirclePlus size={30} /> </button>
                    </div>

                    {software3 && (

                        <p className='mt-3 text-[14px] w-[800px] text-black font-normal'>Yes, Collectum Solutions is proficient in leading cloud platforms like AWS, Azure, and GCP. We assess your specific needs, industry requirements, and existing infrastructure to recommend the optimal platform for your business.



                        </p>
                    )}
                </div>

                {/* question 5*/}

                <div className={`border border-black transition-all duration-300 p-5 w-[960px] mt-4 ${setsoftware4 ? 'h-auto' : 'h[70px]'} `} >
                    <div className='flex flex-row items-start '>

                        <h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>What security measures do you take within the cloud environment?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph4}>
                            <CiCirclePlus size={30} /> </button>
                    </div>

                    {software4 && (

                        <p className='mt-3 text-[14px] w-[800px] text-black font-normal'> Security is paramount. We leverage the robust security infrastructure of leading cloud providers, implementing additional security measures where necessary. This includes user access controls, data encryption, and ongoing monitoring to safeguard your data and systems.



                        </p>
                    )}
                </div>

                {/* question 6*/}

                <div className={`border border-black transition-all duration-300 p-5 mb-5 w-[960px] mt-4 ${setsoftware5 ? 'h-auto' : 'h[70px]'} `} >
                    <div className='flex flex-row items-start '>

                        <h1 className='w-[650px] text-start text-[18px] pr-2 font-semibold'>How do I get started with cloud solutions at Collectum Solutions?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph5}>
                            <CiCirclePlus size={30} /> </button>
                    </div>

                    {software5 && (

                        <p className='mt-3 text-[14px] w-[800px] text-black font-normal'> Contact Collectum Solutions today for a free consultation! We'll discuss your specific business needs and goals, conduct a comprehensive cloud assessment, and craft a customized cloud strategy tailored to unlock your organization's full potential



                        </p>
                    )}
                </div>






            </div>
            <Footer />
        </div>

    )
}

export default CloudSolution
