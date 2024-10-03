import React from 'react'
import { navitems } from './navitems'
import img from '../Component/aboutimage.jpg'
import img2 from '../Component/aboutimage2.png'
import img3 from '../Component/aboutimage3.png'
import { AiOutlineAlert } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import img4 from '../Component/ABOUT1.png'
import img5 from '../Component/ABOUT2.png'
import img6 from '../Component/ABOUT3.png'
import { SiStardock } from "react-icons/si";
import { TbMichelinStar } from "react-icons/tb";
import { BsStarFill } from "react-icons/bs";
import img7 from '../Component/ABOUT4.png'
import img8 from '../Component/ABOUT5.png'
import img9 from '../Component/ABOUT6.png'
import Footer from './Footer'
import Header from './Header'






function About() {
  return (



    <div className='About'>
    <Header />

    {/* First Component */}
    <div className='relative'>
        <img className='w-full md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
        <h1 className='absolute inset-0 flex items-center justify-center font-bold md:text-[70px] text-[40px] text-center font-serif text-white bg-black bg-opacity-50'>
          About
        </h1>
      </div>

  {/* Second Component */}
  <div className='relative bg-slate-100 w-full mt-0 pt-5'>
    <div className='relative'>
      <img
        className='md:absolute md:w-[230px] w-[450px] md:h-[420px] h-[350px] rounded-full mt-5 top-26 md:left-[300px] left-[50px]'
        src={img2}
        alt="About Image 2"
      />
      <img
        className='md:absolute md:w-[230px] w-[450px] md:h-[420px] h-[350px] rounded-full md:top-4 md:left-[550px]'
        src={img3}
        alt="About Image 3"
      />
    </div>

      <div className='text-red-600 md:ml-[800px] ml-[20px] md:mt-[200px] mt-[90px]'>
        <AiOutlineAlert className=' md:absolute md:mt-1 mt-[100px]' />
        <div className='md:mt-[-92px] mt-[-20px] ml-5 font-semibold text-black'>
          Your time is our compass
        </div>
        <div className='md:text-[55px] text-[30px] md:w-[700px] w-[300px] text-black font-serif font-bold'>
          Empowering Your Online Presence
        </div>
        <div className='text-[18px] font-semibold text-black md:w-[550px] w-[350px]'>
          Discover the essence of success with Collectum Solutions. We specialize in elevating your online presence through expert digital marketing strategies.
        </div>

        <div className='stars md:flex gap-12 mt-7 font-serif'>
          <CiStar
            md:size={40}
            size={30}
            className='hover:animate-spin'
          />
          <div className='text-black font-bold md:mt-1 mt-[-26px] md:ml-[-25px] ml-[40px] md:text-[20px] text-[16px]'>
            Customized strategies
          </div>
          <div className='hover:animate-spin'>
            <CiStar md:size={40} size={30} />
          </div>
          <div className='text-black font-bold md:mt-1 mt-[-26px] md:ml-[-25px] ml-[40px] md:text-[20px] text-[16px]'>
            Proven methods
          </div>
        </div>

        <div className='stars md:flex gap-[67px] md:mt-7 font-serif'>
          <CiStar
            md:size={40}
            size={30}
            className='hover:animate-spin'
          />
          <div className='text-black font-bold md:mt-[6px] mt-[-26px] md:ml-[-43px] ml-[40px] md:text-[20px] text-[16px]'>
            Dynamic campaigns
          </div>
          <div className='hover:animate-spin'>
            <CiStar md:size={40} size={30} />
          </div>
          <div className='text-black font-bold md:mt-[6px] mt-[-26px] md:ml-[-43px] ml-[40px] md:text-[20px] text-[16px]'>
            Dedicated experts
          </div>
        </div>

        <div className='mt-[50px] hover:bg-black hover:text-red-600 bg-red-600 text-black hover:h-[45px] h-[55px] w-[130px] flex justify-center font-bold border-b-[10px] border-r-2 border-l-2 border-black'>
          <button>Get Started</button>
        </div>
      </div>
      </div>

{/* Third Component */}

<div className='bg-white md:h-[1100px] md:w-[650px] object-cover md:relative md:flex justify-center text-center md:ml-[470px] ml-[-1px] '>

<div className='md:absolute  mt-[100px] text-red-600'><AiOutlineAlert className='md:ml-[270px] ml-[80px]' />
<h1 className='text-black font-bold text-[18px] mt-[-19px] md:ml-[25px] '>Digital Agency</h1>
<h1 className='font-bold md:text-[50px] text-[25px] text-black md:w-[700px] w-[350px]'>Versatile Creative Services For You</h1>



<div className='group  transition-transform duration-700 transform hover:scale-105 absolute md:flex flex-row md:h-[200px] h-[350px] md:w-[1500px] w-[300px] md:ml-[-400px] ml-[25px] mt-[90px] border-[2px] hover:border-red-600 md:border-slate-200 border-red-700 border-solid'>
  <div className='md:h-[80px] h-[50px] md:w-[100px] w-[50px] md:mt-[80px] bg-red-600 md:m-10 m-8 rounded-lg'>
    <div className='text-black md:flex justify-center md:m-3 m-[-20px] md:text-[35px] text-[15px] font-bold'>01.</div>
    <p className='md:absolute md:w-[600px] w-[250px] left-[600px] md:mt-[-60px] mt-[150px] text-black group-hover:hidden'>Elevate your brand's online presence with our expert digital marketing solutions</p>
  </div>
    <img className='absolute left-[1000px] h-[250px] bottom-4 md:hidden group-hover:block animate-slideUp' src={img4} alt=""/>
  <div className='md:flex flex-col font-bold text-[14px] text-black m-[40px] mt-[60px]'>
    <p className='md:ml-[-135px] ml-[-100px] md:mt-0 mt-[-50px] '>Online Branding</p>
    <Link className='font-bold md:text-[30px] text-[25px]'>Digital Marketing</Link>
    <div className="relative">
      <h1 className='mt-3 ml-[-10px] bg-red-600 p-2 rounded-full hidden group-hover:block animate-slideUp'>
        Maximize Your Online Reach
      </h1>
    </div>
  </div>
</div>


<div className='group transition-transform duration-700 transform hover:scale-105 absolute md:flex flex-row md:h-[200px] h-[350px] md:w-[1500px] w-[300px] md:ml-[-400px] ml-[25px] md:mt-[330px] mt-[500px] border-2 hover:border-red-600  md:border-slate-200 border-red-700 '>
<div className='md:h-[80px] h-[50px] md:w-[100px] w-[50px] mt-[80px] bg-red-600 md:m-10 m-8 rounded-lg'>

<div className='text-black md:flex justify-center md:m-3 m-[-50px] md:text-[35px] text-[15px] font-bold'>02.</div>
<p className='md:absolute md:w-[700px] w-[250px] left-[600px] md:mt-[-60px] mt-[200px] text-black group-hover:hidden'>Transform your ideas into dynamic digital experiences with our Software Development expertise</p>
</div>
<img className='absolute top-[-60px] left-[970px] h-[250px]  hidden group-hover:block animate-slideUp' src={img5} alt=""/>
 <div className='md:flex flex-col font-bold text-[14px] text-black m-[40px] mt-[60px]'>
    <p className='md:ml-[-215px] ml-[-100px] md:mt-0 mt-[-50px] '>Online Crafting</p>
    <Link className='font-bold md:text-[30px] text-[19px] md:ml-0 ml-[-1px]  '> Software Development</Link>
    <div className="relative">
      <h1 className='mt-3 ml-[-4px] bg-red-600 p-2 rounded-full hidden group-hover:block animate-slideUp'>
        Craft your digital presence
      </h1>
    </div>
  </div>
</div>
<div className='group transition-transform duration-700 transform hover:scale-105 absolute md:flex flex-row md:h-[200px] h-[350px] md:w-[1500px] w-[300px] md:ml-[-400px] ml-[25px] md:mt-[570px] mt-[900px] border-2 hover:border-red-600  md:border-slate-200 border-red-700 '>
<div className='md:h-[80px] h-[50px] md:w-[100px] w-[50px] mt-[80px] bg-red-600 md:m-10 m-8 rounded-lg'>
<div className='text-black md:flex justify-center md:m-3 m-[-50px] md:text-[35px] text-[15px] font-bold'>03.</div>
<p className='md:absolute md:w-[700px] w-[250px] left-[600px] md:mt-[-60px] mt-[200px] text-black group-hover:hidden'>Enhance your business efficiency with our customized Cloud Solutions</p>
</div>
<img className='absolute left-[970px] top-[-60px] h-[250px]  hidden group-hover:block animate-slideUp' src={img6} alt=""/>
 <div className='md:flex flex-col font-bold text-[14px] text-black m-[40px] mt-[60px]'>
    <p className='md:ml-[-70px] ml-[-60px] md:mt-0 mt-[-50px] '>Business Menagment</p>
    <Link className='font-bold md:text-[30px] text-[25px] md:mr-0 mr-6 '>Cloud Solution</Link>
    <div className="relative">
      <h1 className='mt-3 ml-[-4px] bg-red-600 p-2 rounded-full hidden group-hover:block animate-slideUp'>
        Optimize Business Operations Efficiently
      </h1>
    </div>
  </div>
</div>
</div>
<button className=' md:mt-[1100px] mt-[1300px] hover:bg-black hover:text-red-600 bg-red-600 text-black hover:h-[45px] h-[55px] w-[130px]  rounded-3xl md:flex justify-center items-center font-bold'>View More</button>
</div>


{/* Forth Component */}


<div className='md:relative bg-white h-[210px] md:m-0 m-6'>
<div className='md:flex flex-row md:h-[200px]  h-[800px] md:w-[1200px] w-[300px] md:ml-[170px] md:m-0 m-1 rounded-full bg-gray-900'>
<div className=' md:p-12 p-20 text-white font-bold text-[30px] font-serif'> 
<div className='flex flex-row md:space-x-6 text-white'> 
<h1>Trusted By </h1>
<SiStardock size={20} className='animate-spin' />
<TbMichelinStar size={20} className='animate-spin' /></div>
<div className='flex flex-row md:space-x-6 text-white'> 
<h1>1000 Business</h1>
<TbMichelinStar size={20} className='animate-spin' />
<SiStardock size={20} className='animate-spin' /></div></div>
<div className='bg-white md:h-[150px] h-[130px] md:w-[250px] w-[210px] md:m-7 md:ml-[80px] ml-12 md:rounded-l-full rounded-xl'>
<div className='flex flex-row text-yellow-500 md:m-7 m-5 ml-14' >
<BsStarFill size={20} />
<BsStarFill size={20} />
<BsStarFill size={20} />
<BsStarFill size={20} />
<BsStarFill size={20} /></div>
<div className='md:ml-10 ml-2 text-black font-semibold'>Rated 4.9/5 from over 600 Reviews</div></div>
<div className='bg-white md:h-[150px] h:[130px] md:w-[250px] w-[210px] m-7 md:ml-[40px] ml-[47px] md:rounded-r-full rounded-xl'>
<div className=' text-black font-bold m-5'>Monthly traffic</div>
<div className=' text-black font-bold mt-[-15px] ml-[27px] text-[25px]'>33.4k</div>
<div className=' text-black font-bold mt-[5px] ml-[27px] text-[12px]'>Monthly Traffic</div>
<hr className='border-[6px] rounded-full border-red-700 md:w-[100px] m-5 md:ml-[30px]' />
</div>
</div>
</div>


{/* Fifth Component */}

<div className='md:relative md:flex flex-row bg-white md:h-[500px] md:w-full' >
  <div className=' md:m-[50px]  md:ml-[200px] md:h-[200px] md:w-[450px] w-[350px] md:mt-0 mt-[600px]'><img src={img7} alt="" /></div>
  <div className='flex flex-col md:text-[50px] text-[40px] md:m-0 m-3 md:mt-[50px] mt-[50px] md:w-[600px] w-[350px] font-bold font-serif'>Driven By Quality & Dedicated to Excellence
  <div className='text-[16px] text-gray-700 md:w-[600px] w-[300px]'>At Collectum Solutions, quality drives us and excellence is our commitment. From consultation to implementation, we prioritize superior craftsmanship, innovation, and exceeding expectations. Experience our dedication to your success</div>
  <div className='bg-red-600 w-[150px] text-[16px] h-[45px] text-center mt-5 pt-2 hover:h-[35px] hover:bg-black hover:text-red-600 border-r-1 border-b-[5px] border-l-1 border-black'><button>Get Started</button></div>
  </div>
  </div>


  {/* Sixth Component */}


  <div className='md:relative md:flex flex-row bg-white md:h-[500px] md:w-full' >
  <div className=' md:ml-[850px] md:h-[200px] md:w-[450px] w-[350px]'><img src={img8} alt="" /></div>
  <div className='flex flex-col md:text-[50px] text-[40px] mt-[30px] md:ml-[-1050px] md:w-[600px] w-[250px] md:m-0 m-3 font-bold font-serif'>Make Your BusinessVisible Online
  <div className='text-[16px] text-gray-700 md:w-[600px] w-[300px]'>Unlock the potential of your business by enhancing its online visibility. With our tailored digital marketing strategies, we amplify your brand's presence across various platforms, ensuring it stands out amidst the digital noise. From search engine optimization to targeted advertising, we employ proven techniques to attract, engage, and convert your target audience, driving measurable results for your business</div>
  <div className='bg-red-600 w-[150px] text-[16px] h-[45px] text-center mt-5 pt-2 hover:h-[35px] hover:bg-black hover:text-red-600 border-r-1 border-b-[5px] border-l-1 border-black'><button>Get Started</button></div>
  </div>
  </div>
  
{/* seventh  Component */}


<div className='bg-slate-100 md:h-[550px] md:relative md:flex flex-col'>
     <div className='  bg-white md:h-[300px] md:w-[300px] rounded-full overflow-hidden  md:mt-[100px]  md:ml-[200px] md:flex flex-row'>
    <div><img src={img9} alt="" className='md:h-full md:w-full object-cover' /></div>
    </div>
      <div className='flex flex-col text-black text-[40px] font-bold md:m-0 m-3 md:w-[700px] md:mt-[-270px] md:ml-[600px] font-serif'>Transforming Businesses with Technology
    <div className='md:flex flex-row text-[16px] font-bold  mt-[8px]   text-gray-700 md:w-[600px] w-[300px]'>Our passionate team, dedicated to innovation, collaboration, and excellence, partners closely with clients to understand their needs and deliver tailored solutions. Whether it's boosting your web presence, optimizing operations, or seizing growth opportunities, trust Collectum Solutions to be your partner in unlocking your full potential
    
    </div>
    <div className='mt-5 text-[20px]'>Nadeem Iqbal</div>
    <div className=' m-1 text-[12px] text-red-600'>CEO, COLLECTUM SOLUTIONS</div>
</div>
</div>


<Footer/>

</div>
  )
}

export default About
