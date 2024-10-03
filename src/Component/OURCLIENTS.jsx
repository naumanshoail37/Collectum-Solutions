import React from 'react'
import { navitems } from './navitems'
import Header from './Header'
import Footer from './Footer'
import img from '../Component/aboutimage.jpg'
import img2 from '../Component/homepic2.jpg'
import img3 from '../Component/airblue.png'
import img4 from '../Component/emco.png'
import img5 from '../Component/fdpp.png'
import img6 from '../Component/iec.png'
import img7 from '../Component/lcpw.png'
import img8 from '../Component/ubs.png'
import img9 from '../Component/active.png'
import img10 from '../Component/armad.png'
import img11 from '../Component/fliptrip.png'
import img12 from '../Component/kcc.png'
import {motion} from "framer-motion"







function OurClients() {

    
  return (



  /*first component*/
    
  <div className='Our clients'>
 <Header/>

 <div className='relative'>
        <img className='w-full md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
        <h1 className='absolute inset-0 flex items-center justify-center font-bold md:text-[70px] text-[40px] text-center font-serif text-white bg-black bg-opacity-50'>
          Our Clients
        </h1>
      </div>

{/*Second Component*/}

<div className='realtive bg-white md:h-[550px]'>
    
   <div className='flex flex-col justify-center items-center mt-[50px]'> 
   <div className='md:flex flex-row'>
   <img  src={img2} alt="" />
   <h1 className=' text-black text-[20px]  font-bold md:ml-[-75px] ml-6 md:mt-[-6px] mt-[-68px]'>Our Clients</h1>
   </div>
   <h1 className=' text-black md:text-[50px] text-center text-[30px] font-bold md:mt-[-20px] '>Trusted By 5,000+ Companies</h1>


   <div className='containers  md:flex flex-row  mt-[30px]  '
   
   >
    <div className=' h-[130px] w-[200px]  border-2 border-slate-300 flex flex-row justify-center items-center'>
       < motion.div  whileHover={{rotate:10}} > 
       <img className='h-[65px] w-[105px]' src={img3} alt="" /></motion.div>
    </div>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300' >
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300 flex flex-row justify-center items-center' >
    < motion.div  whileHover={{rotate:10}} > 
       <img className='h-[65px] w-[105px]' src={img4} alt="" /></motion.div>
    </div>
    </div>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300' >
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300 flex flex-row justify-center items-center' >
    < motion.div  whileHover={{rotate:10}} > 
       <img className='h-[65px] w-[105px]' src={img5} alt="" /></motion.div>
    </div>
    </div>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300' >
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300 flex flex-row justify-center items-center' >
    < motion.div  whileHover={{rotate:10}} > 
       <img className='h-[65px] w-[105px]' src={img6} alt="" /></motion.div>
    </div>
    </div>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300' >
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300 flex flex-row justify-center items-center' >
    < motion.div  whileHover={{rotate:10}} > 
       <img className='h-[65px] w-[105px]' src={img7} alt="" /></motion.div>
    </div>
    </div>
   </div>
   <motion.div className='containers  md:flex flex-row  '>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300'>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300 flex flex-row justify-center items-center' >
    < motion.div  whileHover={{rotate:10}} > 
       <img className='h-[65px] w-[105px]' src={img8} alt="" /></motion.div>
    </div>
    </div>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300'><div className=' h-[130px] w-[200px] border-2 border-slate-300 flex flex-row justify-center items-center' >
    < motion.div  whileHover={{rotate:10}} > 
       <img className='h-[65px] w-[105px]' src={img9} alt="" /></motion.div>
    </div></div>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300'>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300 flex flex-row justify-center items-center' >
    < motion.div  whileHover={{rotate:10}} > 
       <img className='h-[65px] w-[105px]' src={img10} alt="" /></motion.div>
    </div>
    </div>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300' >
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300 flex flex-row justify-center items-center' >
    < motion.div  whileHover={{rotate:10}} > 
       <img className='h-[65px] w-[105px]' src={img11} alt="" /></motion.div>
    </div>
    </div>
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300 md:mb-0 mb-5' >
    <div className=' h-[130px] w-[200px] border-[1px] border-slate-300 flex flex-row justify-center items-center' >
    < motion.div  whileHover={{rotate:10}} > 
       <img className='h-[65px] w-[105px]' src={img12} alt="" /></motion.div>
    </div>
    </div>
    </motion.div>


   </div>
   </div>

   <Footer/>






</div>
  );
}

export default OurClients
