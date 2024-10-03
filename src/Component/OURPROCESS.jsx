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
    <div className='OurProcess  bg-white md:h-[1500px]'>
      
      <Header/>

      <div className='relative'>
        <img className='w-full md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
        <h1 className='absolute inset-0 flex items-center justify-center font-bold md:text-[70px] text-[40px] text-center font-serif text-white bg-black bg-opacity-50'>
          Our Process
        </h1>
      </div>

{/*Component1*/}
<div className=' md:flex flex-col items-center justify-center md:text-[50px] text-[30px] text-bold font-bold '>
    <h1 className='text-center'>Work Process</h1>
    <div className='md:flex flex-row'>
    <img className='md:h-[180px] h-[150px] md:w-[280px] md:ml-0 ml-6 w-[300px] md:mt-[50px]' src={img2} alt="" />
    <div className='md:flex-flex-col'>
    <h1 className='md:text-[35px] mt-[40px] md:ml-[15px] ml-5'>Need Assessment & Discovery</h1>
    <p className='text-[15px] md:w-[700px] w-[300px] ml-[15px] mt-[5px] font-semibold'>Our work process starts by understanding your business goals and audience. Collaborative discussions and workshops uncover your needs. We analyze existing materials, ensuring a clear roadmap for project success</p>
    </div>
    </div>
    <hr className='border-[1px] border-black md:w-[1100px] md:mt-[100px] mt-10' />
    </div>

{/*Component2*/}
    <div className='flex flex-col'>
    <div className='md:flex flex-row md:ml-[230px] ml-[-40px] '>
    <h1 className='text-[35px] mt-[40px] ml-[55px] font-bold '>Analysis & Design</h1>
    <div className='md:mt-0 mt-[-230px] md:m-0 m-5'><img className='rounded-lg md:h-[180px] md:w-[280px] w-[300px] md:mt-[50px] relative md:top-0 top-[60px] mt-[400px] md:ml-[445px] ml-[40px]' src={img3} alt=""  />  </div> 
    </div>
    <p className='text-[15px] font-semibold md:w-[700px] w-[300px] md:ml-[287px] ml-5 md:mt-[-130px] mt-[-370px]' >Our expert team conducts thorough market research and competitor analysis to shape your project. We craft a data-driven strategy aligned with your goals, refining creative concepts for your brand voice. Prioritizing user experience, we ensure seamless engagement. Deliverables include wireframes, mockups, and detailed content plans</p>
    <hr className='border-[1px] border-black md:w-[1100px] md:mt-[150px] mt-[230px] md:ml-[243px] ml-[-140px]' />
    </div>
    
{/*Component3*/}

<div className=' flex flex-col items-center justify-center text-[60px] text-bold font-bold '>

    <div className='md:flex flex-row'>
    <img className='md:h-[180px] md:w-[280px] w-[300px] md:mt-[50px] mt-10 md:ml-0 ml-[-6px] ' src={img4} alt="" />
    <div className='md:flex-flex-col'>
    <h1 className='md:text-[35px] text-[30px] mt-[40px] md:ml-[15px] ml-[-6px]'>Solution Development</h1>
    <p className='text-[15px] md:w-[700px] w-[300px] md:ml-[15px] ml-[-6px] mt-[5px] font-semibold'>Our skilled developers bring your vision to life, leveraging cutting-edge technology for high-performing solutions. Meticulously crafted content resonates with your audience. Rigorous quality assurance testing ensures flawless functionality. We maintain open communication throughout, keeping you informed of progress and decisions</p>
    </div>
    </div>
    <hr className='border-[1px] border-black md:w-[1100px] w-[400px] md:mt-[80px] mt-5' />
    </div>

{/*Component4*/}

<div className='flex flex-col'>
    <div className='md:flex flex-row  md:ml-[175px] '>
    <h1 className='md:text-[35px] text-[30px] md:mt-[40px] md:ml-[100px] ml-4 font-bold '>Execution & Delivery</h1>
    <img className='h-[180px] md:w-[280px] w-[300px] rounded-lg md:mt-[50px] mt-40 relative md:top-0 top-[140px] md:ml-[450px] ml-4' src={img5} alt="" />   
    </div>
    <p className='text-[15px] font-semibold md:w-[800px] w-[300px] md:ml-[278px] ml-4 md:mt-[-130px] mt-[-320px]' >Our specialty lies in seamless launches, executing your project on time and within budget for a smooth transition. Our commitment extends to ongoing optimization for peak performance of your website and campaigns. We offer comprehensive training and support to empower your team and track measurable results for ROI. Through a collaborative partnership, we ensure your continued success</p>
    <hr className='border-[1px] border-black md:w-[1100px] w-[px] md:mt-[100px] mt-[280px] md:mb-10 mb-10 md:ml-[250px]' />
    </div>
<Footer/>

    </div>
  );
}

export default OurProcess
