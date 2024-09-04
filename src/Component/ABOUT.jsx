import React from 'react'
import { navitems } from './navitems'
import img from '../Component/aboutimage.jpg'
import img2 from '../Component/aboutimage2.png'
import img3 from '../Component/aboutimage3.png'
import Header from './Header'


function About() {
  return (



    <div className='About '>

 {/* First Component */}
 <div className='relative'>
        <img className='w-full h-[650px] object-cover' src={img} alt="About" />
        <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
          About
        </h1>
      </div>

      {/* Second Component */}
      <div className='bg-slate-100 h-[600px] relative '>
        <img className='absolute  w-[230px] h-[420px] rounded-full top-36 left-[270px]' src={img2} alt="About Image 2" />
        <img className='absolute  w-[230px] h-[420px] rounded-full top-12 left-[520px]' src={img3} alt="About Image 2" />
      </div>















</div>
  )
}

export default About
