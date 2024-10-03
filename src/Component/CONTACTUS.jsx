import React from 'react'
import Header from './Header'
import Footer from './Footer'
import img from '../Component/aboutimage.jpg'
import img2 from '../Component/homepic2.jpg'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";







function ContactUs() {
    return (
        <div className='OurProcess  bg-white h-[1500px]'>

            <Header />

            <div className='relative'>
                <img className='w-full  md:h-[500px] h-[350px] md:object-cover' src={img} alt="Our-Clients" />
                <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                    Contact Us
                </h1>
            </div>


            <div className='flex flex-col justify-center text-center items-center mt-[50px] '>
                <div className='flex flex-row'>

                    <img className='h-[70px] w-[70px]' src={img2} alt="" />
                    <p className='font-bold ml-[-40px]'>CONTACT US</p>
                </div>
                <h1 className='font-bold text-[50px] w-[640px]'>Excited About The Project? Get In Touch.</h1>

                <div className='flex flex-row gap-[20px] mt-10 justify-center ml-[70px]'>

                    <div className='' ><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2575686870064!2d74.21241677532738!3d31.43457535137641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffa3f6ab7941%3A0xcad93e3dfc910549!2sCollectum%20Solutions!5e0!3m2!1sen!2s!4v1726726754593!5m2!1sen!2s" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

                    <div className='border-8 border-red-700 h-[450px]' > <hr /></div>

                    <div className='flex flex-col gap-4 justify-center'>

                        <div className='flex flex-row gap-3 mt-[px]'>
                            <CiLocationOn size={50} className='text-red-600' />
                            <h1 className='font-bold text-[25px] mr-[400px] mt-[-5px] '>Address</h1>
                        </div>
                        <h1 className='text-[20px] text-start w-[500px] relative bottom-10 left-16'>77-D, D-Block Commercial DHA EME Sector, Lahore, 53710</h1>

                        <div className='flex flex-row gap-3'>
                            <FaPhoneAlt size={50} className='text-red-600 ml-1 mt-[-5px] ' />
                            <h1 className='font-bold text-[25px] mr-[400px] mt-[-25px] '>Phone Number</h1>
                        </div>
                        <h1 className='text-[20px] text-start w-[500px] relative bottom-12 left-16'><Link>+92 336 1077352</Link></h1>

                        <div className='flex flex-row gap-3'>
                            <MdOutlineMarkEmailUnread size={50} className='text-red-600 ml-1' />
                            <h1 className='font-bold text-[25px] mr-[400px] mt-[-5px] '>Email Address</h1>
                        </div>
                        <h1 className='text-[20px] text-start w-[500px] relative bottom-10 left-16'><Link>info@collsol.com</Link></h1>

                        <Link> <div className='flex flex-row text-red-700 gap-10 ml-2' >

                            <FaFacebook size={50} />
                            <FaInstagramSquare size={50} />
                            <FaLinkedin size={50} />
                        </div>
                        </Link>
                    </div>



                </div>





            </div>

        </div>
    )
}

export default ContactUs
