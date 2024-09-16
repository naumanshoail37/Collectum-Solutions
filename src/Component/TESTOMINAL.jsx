import React from 'react'
import Header from './Header'
import Footer from './Footer'
import img from '../Component/aboutimage.jpg'
import img2 from '../Component/homepic2.jpg'
import img3 from '../Component/Testominal1.jpg'
import img4 from '../Component/Testominal2.png'
import img5 from '../Component/Testominal3.png'
import img6 from '../Component/Testominal4.png'
import img7 from '../Component/Testominal5.png'
import img8 from '../Component/Testominal6.png'
import { RiDoubleQuotesL } from "react-icons/ri";


function Testominals() {
    return (
        /*first component*/

        <div className='Testominals '>
            <Header />

            <div className='relative '>
                <img className='w-full  md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
                <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                    Testominals
                </h1>
            </div>

            {/*Second Component*/}

            <div className='realtive h-[550px]'>

                <div className='flex flex-col justify-center text-center items-center mt-[50px]'>
                    <div className=' flex flex-row'>
                        <img src={img2} alt="" />
                        <h1 className=' text-black text-[20px] font-bold ml-[-75px] mt-[-6px]'>OUR TESTIMONIALS</h1>
                    </div>
                    <h1 className=' text-black text-[50px] w-[660px] font-bold mt-[-20px] font-serif'>What Our Clients Say About Our Services</h1>

                    {/*paragraph01*/}
                    <div className='  border-[20px] border-white hover:shadow-2xl w-[950px] h-[350px] flex flex-col  mt-[50px] text-start text-[22px] overflow-hidden'>

                        <div className='flex flex-row'>

                            <p className='w-[950px]'>This agreement, dated July 2008, is between M/s Collectum Solutions, located at Suite #304, Eden Tower Gulberg III, Lahore (IT consultant), and The Imperial Electric Company (Pvt) Ltd., headquartered at National Towers, 28 Egerton Road, Lahore. M/s Collectum Solutions will implement the following ERP modules: Finance Management System, Distributions and Logistics, HR (Personnel and ME payroll), and Manufacturing. The agreement outlines the scope, approach, methodology, team organization, project management, and implementation details succinctly.</p>
                            <RiDoubleQuotesL size={100} className='text-red-800 mr-4' />
                        </div>
                        <h1 className='mt-5 text-orange-600 w-[1100px] font-bold'>Tahir Rehman</h1>
                        <div className='flex flex-row'>


                            <h1 className='text-[14px]'>Marketing Director IEC</h1>

                            <img className='h-[150px] w-[150px] relative left-[650px] bottom-[82px] ' src={img3} alt="" />
                        </div>
                    </div>

                    {/*paragraph02*/}

                    <div className='  border-8 border-white hover:shadow-2xl w-[950px] h-[320px] flex flex-col  mt-[50px] text-start text-[22px] overflow-hidden'>

                        <div className='flex flex-row'>

                            <p className='w-[950px]'>This is to certify that M/S Collectum Solutions has developed and implemented a customized Web Based ERP (Enterprise Resource Planning) system for our organization in march 2007. The compliance of the new customized software was immaculate in response to our needs and it helped us substantially in developing new procedures for our Inventory Management System, Product support and Financial needs required at the head office level , different departments and branches all over the country</p>
                            <RiDoubleQuotesL size={100} className='text-red-800 mr-4' />
                        </div>
                        <div className='flex flex-row'>


                            <h1 className='text-[14px] mt-5'>General Manager UBS</h1>

                            <img className='h-[200px] w-[350px] relative left-[570px] bottom-[70px] ' src={img4} alt="" />
                        </div>
                    </div>



                    {/*paragraph 03*/}

                    <div className='  border-8 border-white hover:shadow-2xl w-[950px] h-[200px] flex flex-col  mt-[50px] text-start text-[22px] overflow-hidden'>

                        <div className='flex flex-row'>

                            <p className='w-[950px]'>This is to certify that M/S Collectum Solutions has provided us the consultancy and I.T services for the period 2006 – 2008. During the Consultancy period we found their consultation services satisfactory and up to mark.</p>
                            <RiDoubleQuotesL size={100} className='text-red-800 mr-4' />
                        </div>
                        <h1 className='mt-5 text-orange-600 w-[1100px] font-bold'>Asad I.Mumtaz</h1>
                        <div className='flex flex-row'>


                            <h1 className='text-[14px]'>General Manager LCPW</h1>

                            <img className='h-[150px] w-[150px] relative left-[670px] bottom-[70px] ' src={img5} alt="" />
                        </div>
                    </div>

                    {/*forth paragraph*/}


                    <div className='  border-8 border-white hover:shadow-2xl w-[950px] h-[330px] flex flex-col  mt-[50px] text-start text-[22px] overflow-hidden'>

                        <div className='flex flex-row'>

                            <p className='w-[950px]'>This certifies that M/s Emco Industries Limited has engaged in a two-year computer networking and installation contract with M/s Collectum Solutions since January 2008. Under this contract, Collectum Solutions has provided the following services: Windows server installations and management, Linux server deployment and training, LAN, fiber, and optic cable installation and services, Maintenance of backup and restore infrastructure, Terminal services maintenance for remote locations and firewall installation.</p>
                            <RiDoubleQuotesL size={100} className='text-red-800 mr-4' />
                        </div>
                        
                        <div className='flex flex-row'>


                            <h1 className='text-[14px] mt-5'>General Manager LCPW</h1>

                            <img className='h-[200px] w-[200px] relative left-[645px] bottom-[38px] ' src={img6} alt="" />
                        </div>
                    </div>

                    {/*paragraph05*/}
                    <div className='  border-8 border-white hover:shadow-2xl w-[950px] h-[280px] flex flex-col  mt-[50px] text-start text-[22px] overflow-hidden'>

<div className='flex flex-row'>

    <p className='w-[950px]'>This is to certify that we have “IT services” contract with Collectum Solutions , Suite # 304 ,Third Floor Eden Tower Gulberg III , Lahore since July 2008. Under this contract they are liable to provide us the following services: Business and other application software, installation and deployment, Wired and wireless networking solutions, Surveillance solutions.</p>
    <RiDoubleQuotesL size={100} className='text-red-800 mr-4' />
</div>
<h1 className='mt-5 text-orange-600 w-[1100px] font-bold'>Taimoor Farooq</h1>
<div className='flex flex-row'>


    <h1 className='text-[14px] '>Admin Office FDPP</h1>

    <img className='h-[200px] w-[400px] relative left-[570px] bottom-[85px] ' src={img7} alt="" />
</div>
</div>

                    {/*paragraph06*/}
                    <div className='  border-8 border-white hover:shadow-2xl w-[950px] h-[310px] flex flex-col  mt-[50px] text-start text-[22px] overflow-hidden'>

<div className='flex flex-row'>

    <p className='w-[950px]'>This letter certifies that M/S Collectum Solutions has provided IT consultancy and supplied IT equipment to M/S airblue, Pakistan's second-largest airline.The period of services is from 2004 till date and during this period we found their services very satisfactory and up to the standard. Their compliance to our proposal was immaculate and helped us substantially in renovating the procedures in all the departments of our official undertakings.</p>
    <RiDoubleQuotesL size={100} className='text-red-800 mr-4' />
</div>
<h1 className='mt-5 text-orange-600 w-[1100px] font-bold'>Naeem A.Mobasher</h1>
<div className='flex flex-row'>


    <h1 className='text-[14px] '>Manager IT airblue</h1>

    <img className='h-[200px] w-[400px] relative left-[570px] bottom-[85px] ' src={img8} alt="" />
</div>
</div>


                </div>
                <Footer />
            </div>

        </div>


    );

}

export default Testominals
