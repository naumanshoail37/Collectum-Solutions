import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg'
import { RiFolderSettingsLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbHeartRateMonitor } from "react-icons/tb";
import { PiSpeakerHigh } from "react-icons/pi";
import { PiHandCoinsLight } from "react-icons/pi";
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { MdScreenSearchDesktop } from "react-icons/md";

export default function DigitalMarketing() {
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
        <img className='w-full md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
        <h1 className='absolute inset-0 flex items-center justify-center font-bold md:text-[70px] text-[40px] text-center font-serif text-white bg-black bg-opacity-50'>
        Digital Marketing

        </h1>
      </div>
            </div>




            {/*Component two*/}

            <div className='flex flex-col mt-[50px] md:m-0 m-2 md:ml-[340px]'>

                <h1 className='font-bold text-[35px]'>Digital Marketing</h1>

                <p className='md:w-[930px] w-[300px]'>Unleash the Power of Digital Marketing: Attract, Engage, and Convert with Collectum Solutions In today's digital age, a robust online presence is no longer a luxury, it's a necessity. At Collectum Solutions, we're your trusted partner in crafting data-driven digital marketing strategies designed to propel your brand to the forefront of the online marketplace.</p>

                <h1 className='mt-3 font-bold text-[22px]'>We help you achieve more with:</h1>
                <p className='md:w-[960px] w-[300px]'>Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consectetur nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculus blandit dapibus vehicu. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque elit fames donec.</p>


                <div className='mt-10 md:m-0 m-3  flex flex-col border-[1px] border-red-600 md:h-[560px] h-[1500px] md:w-[930px] w-[310px]'>


                    <div className='md:flex md:flex-row flex-col gap-[180px]' >
                        <RiFolderSettingsLine size={50} className='m-10 mt-11 text-red-700' />
                        <h1 className='md:mt-14 mt-[-80px] md:w-[250px] w-[200px] md:ml-[-200px] ml-[100px] font-bold font-serif'>Digital Strategy: Charting Your Online Course</h1>

                        <IoShareSocialOutline size={50} className='m-10 md:mt-10 mt-[150px]  md:ml-[-70px] text-red-700' />
                        <h1 className='md:mt-14 mt-[-90px] md:ml-[-210px] ml-[100px] font-bold font-serif md:w-[350px]'>Social Media Management: Amplify Your Brand Voice</h1>

                    </div>

                    <div className='md:flex md:flex-row flex-col'>
                        <p className='m-10 md:mt-[-20px] mt-[-160px] text-[14px] relative md:top-0 top-[-50px]  md:w-[400px] w-[250px]'>We craft a data-driven roadmap for your digital success. Through business consulting, consumer research, and persona development, we build a targeted content strategy aligned with your vision and market trends.</p>
                        <p className='md:mt-[-20px] md:ml-[5px] ml-[50px] mt-[70px] text-[14px] md:w-[430px] w-[250px]' >We manage your social media presence across platforms, crafting engaging content, fostering communities, and driving results through targeted advertising and insightful analytics.</p>
                    </div>

                    <div className='md:flex md:flex-row flex-col gap-[180px]' >
                        <TbHeartRateMonitor size={50} className='m-10 md:mt-[-10px] mt-[38] text-red-700' />
                        <h1 className='  md:ml-[-200px] ml-[100px] md:mt-0 mt-[-90px] md:w-[300px] font-bold font-serif'>Branding & Creative Services: Elevate Your Brand Experience</h1>

                        <TbHeartRateMonitor size={50} className='m-10 md:ml-[-105px] md:mt-[-10px] mt-[170px] text-red-700' />
                        <h1 className=' md:ml-[-200px] ml-[100px] md:w-[400px] w-[200px] md:mt-0 mt-[-85px] font-bold font-serif'>Content Production: Craft Compelling Stories

                        </h1>
                    </div>
                    <div className='md:flex md:flex-row flex-col gap-[180px]' >
                        <PiHandCoinsLight size={50} className='m-10 md:mt-[75px] mt-[140px] text-red-700' />
                        <h1 className=' md:ml-[-200px] ml-[110px] md:mt-[100px] mt-[-85px] font-bold font-serif md:w-[300px] w-[200px]'>Google & Meta Ads: Reach Your Ideal Audience</h1>
                        <PiSpeakerHigh size={50} className='m-10 md:ml-[-110px] md:mt-[75px] relative md:top-0 top-[125px] text-red-700' />
                        <h1 className=' md:ml-[-200px] ml-[110px] md:mt-[87px] mt-[80px] font-bold font-serif md:w-[300px] w-[200px]'>SEO: Dominate Search Rankings</h1>
                    </div>

                    <div className='md:flex md:flex-row flex-col'>

                        <p className='md:mt-[-190px] mt-[-450px] md:ml-[40px] md:m-0 m-10 relative md:top-0 top-[-180px]   text-[14px] md:w-[400px] w-[250px]' >We craft a cohesive brand identity from concept to execution. Our creative team delivers captivating visuals, impactful content, and engaging experiences across all touchpoints.</p>
                        <p className='md:mt-[-190px] mt-[-80px] md:ml-[40px] ml-10  text-[14px] md:w-[400px] w-[250px]' >From blogs and videos to infographics and emails, we create engaging content that informs, educates, and connects with your audience.</p>
                    </div>
                    <div className='md:flex md:flex-row flex-col'>
                        <p className='md:mt-[-10px] mt-[-200px]  ml-[40px]  text-[14px] md:w-[400px] w-[250px]'>We craft targeted ads & track results across Google & Meta platforms to drive traffic and conversions with transparency.
                        </p>
                        <p className='md:mt-[-10px] mt-[150px] md:ml-[40px] ml-10  text-[14px] md:w-[400px] w-[250px]'>Uncover high-ranking keywords, optimize your website, and build authority to boost organic search traffic.


                        </p>
                    </div>

                </div>

                {/*Component four*/}

                <h1 className='font-bold md:text-[22px] text-[20px] mt-5' >Measurable Results You Can Trust:</h1>
                <p className='md:w-[930px] w-[300px] mt-5'>We're not about smoke and mirrors. At Collectum Solutions, we're obsessed with delivering tangible results. We leverage advanced analytics tools to meticulously track the performance of your campaigns, providing you with actionable insights that empower you to optimize your strategy for maximum return on investment (ROI).</p>

                <h1 className='font-bold text-[22px] mt-5' >Partner with Collectum Solutions and unlock the full potential of digital marketing:</h1>
                <p className='md:w-[930px] w-[300px] mt-5'>Experience a comprehensive digital marketing approach with Collectum Solutions, where we prioritize your brand's visibility, engagement, and revenue growth. Through targeted strategies, we enhance brand awareness, ensuring your message reaches the right audience at the right time. Our focus on lead generation turns website visitors into qualified prospects primed for conversion, while our data-driven tactics guarantee optimized performance. With increased sales and revenue as our goal, we foster stronger customer engagement, building lasting relationships and brand loyalty. Trust us to guide your marketing efforts with actionable insights derived from real-time campaign analytics, empowering you to make informed decisions and achieve tangible results</p>

                <h1 className='font-bold text-[22px] mt-5' >Ready to watch your business thrive in the digital landscape?</h1>
                <p className='md:w-[930px] w-[300px] mt-5'>Contact Collectum Solutions today for a free consultation. Let's discuss your goals and craft a custom digital marketing strategy that propels your brand to new heights. </p>

                <h1 className='font-bold text-[18px] mt-5' >We can't wait to be a part of your digital success story!</h1>
                {/*Component five question 1*/}


                <div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${software ? 'h-auto' : 'md:h-[70px] h-[100px]'} flex flex-col`}>   
                    <div className='md:flex flex-row items start'>

                        <h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>Ready to watch your business thrive in the digital landscape?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph}>
                            <CiCirclePlus size={30} />
                        </button>
                    </div>

                    {software && (
                        <p className='mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'>
                            Digital marketing offers unparalleled reach and targeting capabilities, allowing businesses to connect with their audience where they spend a significant amount of their time – online. In today's digital age, a robust online presence is crucial for brand visibility, customer engagement, and revenue growth.
                        </p>
                    )}
                </div>

                {/* question 2*/}

                <div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${software1? 'h-auto' : 'md:h-[70px] h-[100px]'} flex flex-col`}>   
                    <div className='md:flex flex-row items-start '>

                        <h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>What makes digital marketing essential for businesses today?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph1}>
                            <CiCirclePlus size={30} /> </button>
                    </div>

                    {software1 && (

                        <p className='mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'> Collectum Solutions specializes in crafting data-driven digital marketing strategies tailored to your unique business goals. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and email campaigns, we offer comprehensive solutions designed to attract, engage, and convert your target audience.                        </p>
                    )}
                </div>

                {/* question 3*/}

                <div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${software2 ? 'h-auto' : 'md:h-[70px] h-[100px]'} flex flex-col`}>   
                    <div className='md:flex flex-row items-start '>

                        <h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>How can Collectum Solutions help my business with digital marketing?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph2}>
                            <CiCirclePlus size={30} /> </button>
                    </div>

                    {software2 && (

                        <p className='mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'> At Collectum Solutions, we prioritize measurable results and transparency. We leverage advanced analytics tools to track the performance of your campaigns in real-time, providing actionable insights to optimize your strategy for maximum return on investment (ROI). Our dedicated team of experts is committed to delivering tangible results that drive business growth.                        </p>
                    )}
                </div>


                {/* question 4*/}

                <div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mt-5 ${software3 ? 'h-auto' : 'md:h-[70px] h-[100px]'} flex flex-col`}>   
                    <div className='md:flex flex-row items-start '>

                        <h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>What sets Collectum Solutions apart from other digital marketing agencies?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph3}>
                            <CiCirclePlus size={30} /> </button>
                    </div>

                    {software3 && (

                        <p className='mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'>The timeline for seeing results from digital marketing efforts can vary depending on various factors such as the competitiveness of your industry, the effectiveness of your strategies, and your target audience's behavior. While some results may be immediate, such as increased website traffic, it typically takes a few months to see significant improvements in metrics like lead generation and sales.





                        </p>
                    )}
                </div>

                {/* question 5*/}

                <div className={`border md:m-0 m-3 border-black transition-all duration-300 p-5 md:w-[930px] w-[300px] md:mb-3 md:mt-5 ${software4 ? 'h-auto' : 'md:h-[70px] h-[100px]'} flex flex-col`}>   
                    <div className='md:flex flex-row items-start '>

                        <h1 className='md:w-[650px] w-[300px] text-start md:text-[18px] text-[14px] pr-2 font-semibold'>How long does it take to see results from digital marketing efforts?</h1>
                        <button className='ml-48 mt-[1px]' onClick={toogleParagraph4}>
                            <CiCirclePlus size={30} /> </button>
                    </div>

                    {software4 && (

                        <p className='mt-3 text-[14px] md:w-[800px] w-[250px] text-black font-normal'> Yes, digital marketing is suitable for businesses of all sizes, from startups and small businesses to large enterprises. The scalability and flexibility of digital marketing strategies make them accessible to businesses with varying budgets and resources. Whether you're looking to establish your brand presence or scale your existing marketing efforts, digital marketing can help you achieve your business objectives effectively.

                        </p>
                    )}
                </div>

            </div>
            <Footer />
        </div>
    );
}