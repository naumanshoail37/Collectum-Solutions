import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../Component/logo.png"
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";

function Footer() {
    return (

        <div className=' bg-zinc-900 md:p-36 p-16 	text-zinc-50 md:flex' >


            <div className='gap-x-6'>
                <div className='md:flex'>
                    <div><h1 className='font-extrabold md:text-6xl text-3xl  '>Get in Touch</h1></div>
                    <div className='hover:animate-spin'><img src={img} alt="" /></div>
                </div>
                <p className='md:w-[390px] w-[300] pt-7 text-gray-400 md:text-[20px] text-[15px]  '>Elevate your digital presence with Collectum Solutions. Our tailored strategies and innovative solutions drive impactful results for your business. Partner with us for success.</p>
                <div className='flex pt-5 gap-x-4'>
                    <FaFacebook className=' hover:text-red-600' size={30}  />
                    <FaInstagramSquare className=' hover:text-red-600' size={30} />
                    <FaLinkedin className=' hover:text-red-600' size={30} />
                </div>
                <div><p className='pt-4  text-gray-400 md:text-[20px] text-[15px] '>© Copyright 2024 By Collectum Solutions</p></div>
            </div>


            <div className='gap-x-4 md:pl-[200px] pl[50px] text-gray-400 md:text-[18px] text-[15px]'>

               


                <div className="">
                    <div className='flex gap-x-10'>
                        <div className='w-64'>
                    <h2 className='text-2xl text-white font-bold' >Services</h2>
                    <div className='p-1 hover:text-red-600 hover:underline '  ><Link>Software Development</Link></div>
                    <div className='p-1 hover:text-red-600 hover:underline'><Link>Salesforce Consulting</Link></div>
                    <div className='p-1 hover:text-red-600 hover:underline'><Link>SAP-B1 Consulting</Link></div>
                    <div className='p-1 hover:text-red-600 hover:underline'><Link>Cloud Solutions</Link></div>
                    <div className='p-1 hover:text-red-600 hover:underline'><Link>Digital Marketing</Link></div>
                    </div>
                    

                    <div className='w-64  '><h2 className='text-2xl  gap-14 text-white  font-bold '>Links</h2>
                    <div className='p-1 hover:text-red-600 hover:underline'><Link>About</Link></div>
                    <div className='p-1 hover:text-red-600 hover:underline' ><Link>Contact us</Link></div>
                    <div className='p-1 hover:text-red-600 hover:underline' ><Link>Clients</Link></div>
                    </div>
                    
                    </div>
                
                        <div className='md:w-[600px] w-[250px] pt-14 text-gray-400 text-opacity-55'><hr /></div>
                    
                    
                        <div className='pt-5 md:flex' ><CiLocationOn size={30} />
                            <p className='text-white font-bold pl-2 pt-1' >Visit us</p>
                        </div>
                    
                    
                        <div className='md:w-[600px] w-[200px] pt-3 text-gray-400'><Link>77-D, D-Block Commercial DHA EME Sector, Lahore,53710</Link></div>
                
                    
                        <div className='pt-5 md:flex' ><IoMdCall size={30} />
                            <p className='text-white font-bold pl-2 pt-1'>Call us</p>
                        </div>
                        <div className='w-[600px] pt-3 text-gray-400'><Link>+92 336 1077352</Link></div>
                </div>

                

            </div>
        </div>



    );
}
export default Footer
