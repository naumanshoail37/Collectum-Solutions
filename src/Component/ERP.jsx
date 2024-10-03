import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../Component/aboutimage.jpg';
import { BsPencilSquare } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import img1 from '../Component/ERP1.webp';
import img2 from '../Component/ERP2.webp';

function ERP() {
    return (
        <div className='Software Development page bg-white h-auto'>
            {/* Component one */}
            <div className='pic'>
                <Header />
                <div className='relative'>
                    <img className='w-full h-[500px] object-cover' src={img} alt="Our-Clients" />
                    <h1 className='absolute inset-0 flex items-center justify-center font-bold text-[50px] md:text-[70px] text-center font-serif text-white bg-black bg-opacity-50'>
                        ERP
                    </h1>
                </div>
            </div>

            {/* Component two */}
            <div className='relative flex flex-col justify-center bg-white h-auto m-10 md:m-40'>
                <h1 className='text-[30px] md:text-[50px] text-center font-bold font-serif mt-10'>Cloud ERP Solutions</h1>

                <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 text-red-700'>
                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <BsPencilSquare size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Modernize Your Operations</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Streamline core business processes with a cloud-based ERP system, gaining real-time insights and improved efficiency.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <FaMagnifyingGlassChart size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Scalability & Flexibility</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Easily adapt your cloud ERP to changing business needs by scaling resources up or down as required.</p>
                    </div>

                    <div className='flex flex-col text-center'>
                        <div className='justify-center flex'>
                            <FaMedal size={50} />
                        </div>
                        <h1 className='font-medium text-[25px] md:text-[30px] font-serif text-black mt-5'>Reduced IT Costs</h1>
                        <p className='w-[300px] md:w-[350px] text-[16px] md:text-[18px] text-black mx-auto'>Eliminate upfront hardware expenses and simplify IT management with a cloud-based ERP solution.</p>
                    </div>
                </div>
            </div>

            {/* Component three */}
            <div className='flex flex-col relative m-10 md:m-40'>
                <div className='flex flex-col md:flex-row items-center gap-[400px] mb-10'>
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Modernize Your Business</h1>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover md:mt-0 mt-[-350px]' src={img1} alt="Modernize Your Business" />
                </div>
                <p className='w-full md:w-[800px] relative text-[14px] md:text-[16px] md:bottom-[160px] mb-5'>
                    Move beyond outdated systems. Cloud-based ERP solutions offer real-time insights, improved efficiency, and scalability. Gain instant access to critical data for informed decision-making, streamline operations, and easily adapt your system to meet your growing business needs.
                </p>
                <hr className='border border-black w-full' />

                <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
                    <img className='h-[250px] md:h-[370px] w-full md:w-[350px] object-cover' src={img2} alt="Reduce IT Burden" />
                    <h1 className='text-[30px] md:text-[35px] font-bold font-serif'>Reduce IT Burden</h1>
                </div>
                <p className='w-full md:w-[700px] md:ml-[380px] relative text-[14px] md:text-[16px] md:bottom-[160px] mt-5'>
                    Cut hardware costs and free up your IT team. Cloud ERP eliminates the need for expensive on-premise infrastructure and simplifies IT management. Our team handles system maintenance and updates, allowing your IT team to focus on strategic initiatives.
                </p>
                <hr className='border border-black w-full' />
            </div>

            <Footer />
        </div>
    );
}

export default ERP;
