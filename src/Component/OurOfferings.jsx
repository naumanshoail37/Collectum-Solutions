import React from 'react'
import img from "../Component/certified.png"
import img2 from "../Component/mobile.png"
import { RiCheckboxLine } from "react-icons/ri";

function OurOfferings() {
  return (
    <div className='mobilepage md:flex bg-white'>

        <div className='text-[18px] font-bold text-red-600 md:m-[200px] m-[50px]'>Discover Our Offerings
        <div className='md:w-[550px] w-[300px] md:text-[60px] text-[40px] text-black'>Empower Your Business & Sales</div>
        <div className='text-[15px] md:w-[400px] w-[250px] text-black'>We are Collectum Solutions, your data-driven digital growth engine. We empower businesses to thrive online with a powerful combination of services.</div>
        <div className='  md:m-5 hover:animate-spin h-[150px] w-[150px]'><img src={img} alt="" />  </div>


<div className=' md:ml-[170px] md:mt-[-150px] ' > 
<RiCheckboxLine /> 
<p className='text-[15px] mt-[-20px] ml-[20px] text-black'> Award-Winning Expertise</p>
<RiCheckboxLine />
<p className='text-[15px] mt-[-20px] ml-[20px] text-black'> Data-Driven Strategies</p>
<RiCheckboxLine />
<p className='text-[15px] mt-[-20px] ml-[20px] text-black'>  Seamless Collaboration</p>
<RiCheckboxLine />
<p className='text-[15px] mt-[-20px] ml-[20px] text-black'>  Unwavering Commitment</p>
</div>

</div>
        

<div className=' md:ml-[-170px] ml-[160px] md:h-[550px] h-[300px] md:w-[1300px] w-[250px]'><img src={img2} alt="" /> 
<div>
        <h1 className='md:text-[70px] text-[40px] md:ml-[450px] ml-[-130px] md:mt-[-600px] mt-[-250px] text-red-700 font-extrabold'>12k+</h1>
        <p className='text-[15px] md:ml-[450px] ml-[-130px]  md:w-[350px] w-[100px] mt-[5px]'>Our reach for last week</p>
        <hr className='text-red-600 w-[300px] font-extrabold' />
        </div>

        <div>
        <h1 className='md:text-[70px] ml-[450px] mt-[60px]  text-red-700 font-extrabold'>85%</h1>
        <p className='text-[15px] ml-[450px] w-[350px] '>Growth in business styles</p>
       
        </div>


    </div>
    </div>
  )
}

export default OurOfferings
