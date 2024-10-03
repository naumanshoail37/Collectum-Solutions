import React from 'react'
import Header from './Header';
import { motion } from "framer-motion"
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
    <div className='OurTeam bg-white md:h-[1500px]'>
      <Header />

      <div className='relative'>
        <img className='w-full md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
        <h1 className='absolute inset-0 flex items-center justify-center font-bold md:text-[70px] text-[40px] text-center font-serif text-white bg-black bg-opacity-50'>
          Our Team
        </h1>
      </div>

      {/* Second Component */}
      <div className='relative bg-white h-auto md:h-[550px] md:mr-0 mr-4'>
        <div className='flex flex-col justify-center items-center mt-[50px]'>
          <div className='flex flex-col md:flex-row items-center'>
            <img className='w-[150px] md:mr-0 mr-[90px]  md:w-auto' src={img2} alt="" />
            <h1 className='text-black text-[12px] md:text-[16px] font-bold md:ml-[-62px] ml-4 md:mt-[-40px] mt-[-85px] font-serif text-center'>
              MARKETING AGENCY TEAM
            </h1>
          </div>

          <div className='flex flex-col text-center items-center'>
            <h1 className='text-black text-[30px] md:text-[50px] font-bold mt-[16px] md:mt-[-20px] md:w-[600px] w-[300px] md:mr-0 mr-5 font-serif'>
              Meet Our Professional Team Members
            </h1>


            {/*first picture*/}

            <motion.div

              className='relative bg-gray-300 md:mr-2 mr-1 h-[250px] md:h-[370px] w-[250px] md:w-[350px] rounded-b-full overflow-hidden mt-[100px] md:mt-[150px] hover:rounded-full transition-all duration-300 ease-in-out'

              whileInView={{ scale: 1 }} // Scale the image on hover
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition


            >

              <img className='absolute top-[-20px] md:top-[-30px] left-0 right-0 mx-auto h-auto w-[250px] md:w-[350px] object-cover' src={img3} alt="Team Member" />
              <div className='absolute inset-x-0 py-2 pr-2 mt-[130px] md:mt-[170px] md:bottom-20 bottom-5 bg-black text-white text-center'>
                <h1 className='font-bold text-[18px] md:text-[25px]'>NADEEM IQBAL</h1>
                <h2 className='text-[12px] md:text-[14px]'>CEO</h2>
              </div>
            </motion.div>

            {/*SECOND picture*/}

            <motion.div
              className=' bg-gray-300 md:ml-[540px]  md:h-[450px] h-[300px] md:w-[450px] rounded-b-full mt-[200px] overflow-hidden  hover:rounded-full'


              initial={{ opacity: 0, y: 0 }} // Initial state when out of view
              whileInView={{ opacity: 1, y: -100 }} // Animate to this state when in view
              transition={{ duration: 0.2, ease: "backInOut" }} // Transition settings
              viewport={{ once: true , amount: 0.5 }} // Ensure animation triggers every time the element comes into view
            >

              <img className=' md:h-[450px] h-[300px] md:w-[360px] w-[250px] ml-10' src={img5} alt="Team Member" />
              <div className='absolute inset-x-0 py-2 pr-2 mt0-[130px] md:mt-[170px] bottom-10 bg-black text-white text-center'>
                <h1 className='font-bold'>Arham Nadeem</h1>
                <h1 className='text-[14px] md:text-[20px]'>Chief Operation Officer</h1>
              </div>
            </motion.div>

            {/*third picture*/}

            <motion.div
              className=' bg-gray-300 md:mr-[500px]  md:h-[450px] h-[300px] md:w-[450px] w-[250px] rounded-b-full md:mt-[-450px] mt-[100px] overflow-hidden  hover:rounded-full'

              initial={{ opacity: 0, y: 200 }} // Initial state when out of view
              whileInView={{ opacity: 1, y: -100 }} // Animate to this state when in view
              transition={{ duration: 0.8, ease: "backInOut" }} // Transition settings
              viewport={{ once: true , amount: 0.5 }} // Ensure animation triggers every time the element comes into view
            >


              <img className='md:h-[450px] h-[300px] md:w-[360px] w-[250px] ml-10' src={img4} alt="Team Member" />
              <div className='absolute inset-x-0 py-2 pr-2 mt-[130px] md:mt-[100px] bottom-10 bg-black text-white text-center'>
                <h1 className='font-bold'>Osama Nadeem</h1>
                <h1 className='text-[14px] md:text-[20px]'>Chief Technical Officer</h1>
              </div>

            </motion.div>

            {/*FORTH picture*/}

            <div className='md:flex md:flex-row flex-col md:gap-20 gap-5 mb-20 '>

              <motion.div
                className=' bg-gray-300 h-[300px] md:h-[540px] w-[250px] md:w-[350px] rounded-b-full  overflow-hidden mt-[100px] md:mt-[200px] hover:rounded-full '
                initial={{ opacity: 0, y: 200 }} // Initial state when out of view
                whileInView={{ opacity: 1, y: -100 }} // Animate to this state when in view
                transition={{ duration: 0.8, ease: "easeInOut" }} // Transition settings
                viewport={{ once: true , amount:0.6 }} // Ensure animation triggers every time the element comes into view

              >
                <img className=' md:h-auto h-[300px] w-[250px] md:w-[350px] object-cover' src={img6} alt="Team Member" />
                <div className='absolute inset-x-0 py-2 pr-2 mt0-[130px] md:mt-[170px] bottom-10 bg-black text-white text-center'>
                  <h1 className='font-bold'>Zoha Khalid</h1>
                  <h1 className='text-[14px] md:text-[20px]'>Head of Media</h1>
                </div>

              </motion.div>
              <motion.div
                className=' bg-gray-300 h-[300px] md:h-[540px] w-[250px] md:w-[350px] rounded-b-full flex-col justify-evenly overflow-hidden mt-[150px] md:mt-[200px] hover:rounded-full '
                initial={{ opacity: 0, y: 200 }} // Initial state when out of view
                whileInView={{ opacity: 1, y: -100 }} // Animate to this state when in view
                transition={{ duration: 0.2, ease: "backInOut" }} // Transition settings
                viewport={{ once: true , amount:0.6 }} // Ensure animation triggers every time the element comes into view

              >
                <img className=' md:h-auto h-[300px] w-[250px] md:w-[350px] object-cover' src={img7} alt="Team Member" />
                <div className='absolute inset-x-0 py-2 pr-2 mt0-[130px] md:mt-[170px] bottom-10 bg-black text-white text-center'>
                  <h1 className='font-bold'>Usman Nasir Warraich</h1>
                  <h1 className='text-[11px] md:text-[16px]'>Chief of Marketing & Development</h1>
                </div>

              </motion.div>

              <motion.div
                className=' bg-gray-300 h-[250px] md:h-[540px] w-[250px] md:w-[350px] rounded-b-full  overflow-hidden mt-[200px] md:mt-[200px] hover:rounded-full'
                initial={{ opacity: 0, y: 200 }} // Initial state when out of view
                whileInView={{ opacity: 1, y: -100 }} // Animate to this state when in view
                transition={{ duration: 0.8, ease: "backInOut" }} // Transition settings
                viewport={{ once: true, amount: 0.6 }} // Animation only when fully in view
              >
                <img className=' md:h-auto h-[300px] w-[250px] md:w-[350px] object-cover' src={img8} alt="Team Member" />
                <div className='absolute inset-x-0 py-2 pr-2 mt0-[130px] md:mt-[170px] bottom-10 bg-black text-white text-center'>
                  <h1 className='font-bold'>ZUHAIR KHALID</h1>
                  <h1 className='text-[12px] md:text-[18px]'>Head of Web Development</h1>
                </div>
              </motion.div>

            </div>


          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default OurTeam
