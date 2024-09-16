import React from 'react'
import Header from './Header';
import img from '../Component/aboutimage.jpg'
import img2 from '../Component/homepic2.jpg'
import img3 from '../Component/ABOUT6.png'
import img4 from '../Component/OURTEAM1.png'
import img5 from '../Component/OURTEAM2.png'
import img6 from '../Component/OURTEAM3.png'
import img7 from '../Component/OURTEAM4.png'
import img8 from '../Component/OURTEAM5.png'
import Footer from './Footer';
function OurTeam() {
  return (

    <div className='OurTeam  bg-white h-[1500px]'>

      <Header />

      <div className='relative'>
        <img className='w-full  md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
        <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
          Our Team
        </h1>
      </div>

      {/*Second Component*/}

      <div className='realtive bg-white h-[550px]'>

        <div className='flex flex-col justify-center items-center mt-[50px]'>
          <div className='flex flex-row items-center'>
            <img src={img2} alt="" />
            <h1 className='text-black text-[16px] font-bold ml-[-62px] mt-[-40px] font-serif'>MARKETING AGENCY TEAM</h1>
          </div>

          <div className='flex flex-col text-center items-center'>
            <h1 className='text-black text-[50px] font-bold mt-[-20px] w-[600px] font-serif'>
              Meet Our Professional Team Members
            </h1>

            <div className='relative bg-gray-300 h-[370px] w-[350px]  rounded-b-full overflow-visible mt-[150px] hover:rounded-full transition-all duration-300 ease-in-out'>
              <img
                className=' absolute top-[-150px]  h-[370px] w-[350px] object-cover'
                src={img3}
                alt="Team Member"
              />
              <div className='absolute inset-x-0 py-2 pr-2 mt-[170px] bottom-20 object-cover bg-black text-white text-center'>
                <h1 className='font-bold text-[25px]'>NADEEM IQBAL</h1>
                <h2 className='text-[14px]'>CEO</h2>
              </div>
            </div>


            <div className='flex flex-col'>
              <div className='relative ml-[580px] mt-[150px] bg-gray-300 h-[380px] w-[450px] rounded-b-full overflow-visible hover:rounded-full'>
                <div className='relative'>
                  <img className='absolute h-[520px] w-[400px] pl-16  top-[-170px] ' src={img5} alt="" />
                </div>
                <div className='bg-black absolute bottom-6  ml-[110px] text-white text-[30px] h-[80px] w-[240px]'>
                  <h1 className='font-bold'>Arkham Nadeem</h1>
                  <h1 className='text-[20px]'>Cheif Operation Officer</h1>
                </div>
              </div>

              <div className='relative mt-[-381px] ml-[90px] animate-slideUp  bg-gray-300 h-[380px] w-[450px] rounded-b-full overflow-visible hover:rounded-full'>
                <div className='relative'>
                  <img className='h-[520px] w-[400px] ml pl-16 absolute top-[-170px]' src={img4} alt="" />
                </div>
                <div className='bg-black absolute bottom-6  ml-[110px] text-white text-[30px] h-[80px] w-[240px]'>
                  <h1 className='font-bold'>Osama Nadeem</h1>
                  <h1 className='text-[20px]'>Cheif Technical Officer</h1>
                </div>
              </div>

              <div className='flex flex-row mt-[600px] gap-10'>

                <div className='relative mt-[-451px] animate-slideUp  bg-gray-300 h-[350px] w-[350px] rounded-b-full overflow-visible hover:rounded-full'>
                  <div className='relative'>
                    <img className='h-[500px] w-[300px] pl-10 absolute top-[-170px]' src={img6} alt="" />
                  </div>
                  <div className='bg-black absolute bottom-2 w-full text-white text-[30px] h-[80px]'>
                    <h1 className='font-bold'>Zoha Khalid</h1>
                    <h1 className='text-[20px]'>Head of Media</h1>
                  </div>
                </div>
                <div className='relative mt-[-451px] bg-gray-300 h-[350px] w-[350px] rounded-b-full overflow-visible hover:rounded-full'>
                  <div className='relative'>
                    <img className='h-[500px] w-[300px] pl-10 absolute top-[-170px]' src={img7} alt="" />
                  </div>
                  <div className='bg-black absolute bottom-2 w-full text-white text-[30px] h-[80px]'>
                    <h1 className='font-bold'>Usman Nasir Warraich</h1>
                    <h1 className='text-[18px]'>Chief of Marketing & Development</h1>
                  </div>
                </div>
                <div className='relative mt-[-451px] animate-slideUp  bg-gray-300 h-[350px] w-[350px] rounded-b-full overflow-visible hover:rounded-full'>
                  <div className='relative'>
                    <img className='h-[500px] w-[300px] pl-10 absolute top-[-170px]' src={img8} alt="" />
                  </div>
                  <div className='bg-black absolute bottom-2 w-full text-white text-[30px] h-[80px]'>
                    <h1 className='font-bold'>Zuhair Khalid</h1>
                    <h1 className='text-[20px]'>Head of Web Development</h1>
                  </div>
                </div>


              </div>
            </div>


          </div>
        </div>
        <Footer />
      </div>






    </div>
  );
}

export default OurTeam
