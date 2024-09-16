import React from 'react'
import Header from './Header'
import Footer from './Footer'
import img from '../Component/aboutimage.jpg'
import { navitems } from './navitems'
import img2 from '../Component/OURPROCESS1.jpg'
import img3 from '../Component/OURPROCESS2.jpg'
import img4 from '../Component/OURPROCESS3.jpg'
import img5 from '../Component/OURPROCESS4.jpg'

function OurProcess() {
  return (
    <div className='OurProcess  bg-white h-[1500px]'>
      
      <Header/>

<div className='relative'>
<img className='w-full  md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
<h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
  Our Process
</h1>
</div>

{/*Component1*/}
<div className=' flex flex-col items-center justify-center text-[50px] text-bold font-bold '>
    <h1>Work Process</h1>
    <div className='flex flex-row'>
    <img className='h-[180px] w-[280px] mt-[50px]' src={img2} alt="" />
    <div className='flex-flex-col'>
    <h1 className='text-[35px] mt-[40px] ml-[15px]'>Need Assessment & Discovery</h1>
    <p className='text-[15px] w-[700px] ml-[15px] mt-[5px] font-semibold'>Our work process starts by understanding your business goals and audience. Collaborative discussions and workshops uncover your needs. We analyze existing materials, ensuring a clear roadmap for project success</p>
    </div>
    </div>
    <hr className='border-[1px] border-black w-[1100px] mt-[100px]' />
    </div>

{/*Component2*/}
    <div className='flex flex-col'>
    <div className='flex flex-row ml-[230px] '>
    <h1 className='text-[35px] mt-[40px] ml-[55px] font-bold '>Analysis & Design</h1>
    <img className='h-[180px] w-[280px] mt-[50px] ml-[445px]' src={img3} alt="" />   
    </div>
    <p className='text-[15px] font-semibold w-[700px] ml-[287px] mt-[-130px]' >Our expert team conducts thorough market research and competitor analysis to shape your project. We craft a data-driven strategy aligned with your goals, refining creative concepts for your brand voice. Prioritizing user experience, we ensure seamless engagement. Deliverables include wireframes, mockups, and detailed content plans</p>
    <hr className='border-[1px] border-black w-[1100px] mt-[100px] ml-[243px]' />
    </div>
    
{/*Component3*/}

<div className=' flex flex-col items-center justify-center text-[60px] text-bold font-bold '>

    <div className='flex flex-row'>
    <img className='h-[180px] w-[280px] mt-[50px]' src={img4} alt="" />
    <div className='flex-flex-col'>
    <h1 className='text-[35px] mt-[40px] ml-[15px]'>Solution Development</h1>
    <p className='text-[15px] w-[700px] ml-[15px] mt-[5px] font-semibold'>Our skilled developers bring your vision to life, leveraging cutting-edge technology for high-performing solutions. Meticulously crafted content resonates with your audience. Rigorous quality assurance testing ensures flawless functionality. We maintain open communication throughout, keeping you informed of progress and decisions</p>
    </div>
    </div>
    <hr className='border-[1px] border-black w-[1100px] mt-[80px]' />
    </div>

{/*Component4*/}

<div className='flex flex-col'>
    <div className='flex flex-row  ml-[175px] '>
    <h1 className='text-[35px] mt-[40px] ml-[100px] font-bold '>Execution & Delivery</h1>
    <img className='h-[180px] w-[280px] mt-[50px] ml-[450px]' src={img5} alt="" />   
    </div>
    <p className='text-[15px] font-semibold w-[800px] ml-[278px] mt-[-130px]' >Our specialty lies in seamless launches, executing your project on time and within budget for a smooth transition. Our commitment extends to ongoing optimization for peak performance of your website and campaigns. We offer comprehensive training and support to empower your team and track measurable results for ROI. Through a collaborative partnership, we ensure your continued success</p>
    <hr className='border-[1px] border-black w-[1100px] mt-[100px] ml-[290px]' />
    </div>
<Footer/>

    </div>
  );
}

export default OurProcess
