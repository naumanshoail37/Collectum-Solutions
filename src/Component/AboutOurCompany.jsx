import React from "react";
import img1 from '../Component/homepic.png'
import img2 from '../Component/homepic2.jpg'
import img3 from '../Component/homepic3.jpg'
import img4 from '../Component/homepic4.jpg'
import { LuPhoneCall } from "react-icons/lu";



function AboutourCompany() {


    return (

        <div className="bg-white h-[100%]">


            <div className="md:flex m-20">
                <img className="ml-[250px]" src={img2} alt="picture2" />
                <div className="text-red-600 font-serif font-bold text-[16px] m-[-7px] md:ml-[-60px] ml-[30px] md:mt-[-2px] mt-[-68px] ">About Our Company</div>
            </div>


            <div className="md:flex md:gap-[50px] mt-[-100px]">

                <div className="font-bold font-sans	md:text-[40px] text-[25px] md:w-[450px] w-[250px] md:ml-[320px] ml-[30px] ">We Want to Give You
                    The Best Service</div>
                <div className="text-slate-700  md:text-[16px] text-[15px]   ">
                    <div className="md:w-[550px] w-[300px] mt-4 md:ml-0 ml-[30px] font-serif">In today's dynamic digital world, a strong online presence is crucial for businesses of all sizes. At Collectum Solutions, we're passionate about helping you succeed online. We leverage our expertise to craft a customized digital strategy that propels your brand forward.</div>
                </div>

                </div>


                <div className="md:flex" >


                <div className="md:m-6 m-[30px]">
                 <img className="h-[350px] ml-[300px]" src={img1} alt="picture" />
                </div>

                <div className="md:flex gap-5  md:mt-[60px] md:h-[110px] ">
                
                 <img className="h-[75px] mt-[-30px]" src={img3} alt="picture" />

                
                 <div 
                 className="font-bold md:mt-[-40px] mt-[-85px] md:ml-0 ml-[80px] font-sans md:text-2xl text-[20px] "><h1 className="text-[20px]">Building Success Together</h1>
                 <h1 className="md:w-[480px] w-[250px] text-[16px] text-slate-700 font-normal">We believe in collaboration. We take the time to understand your unique business goals and develop a strategy that aligns perfectly with your vision.</h1>
                 <div className="md:flex mt-[50px] md:ml-[-100px] ml-[-75px] h-[110px]"> <img  className="h-[75px] mt-[-20px]" src={img4} alt="picture" /></div>
                 <h1  className="font-bold mt-[-130px] font-sans text-[20px] " >Ready to Unlock Your Potential?</h1>

                 <h1 className="md:w-[480px] w-[250px] text-[16px] text-slate-700 font-normal">Contact Collectum Solutions today for a free consultation! Let's craft your digital success story.</h1>
                 <button className="bg-red-700 md:h-12 h-12 md:w-[150px] w-[150px] rounded-full text-[15px] md:mt-[30px] mt-[40px] md:ml-[-95px] ml-[-10px]   text-white font-semibold">Learn More</button>
                 <div  className= " bg-red-700 md:h-[50px] h-[60px] md:w-[50px] w-[60px] rounded-full md:text-[30px] text-[8px] md:m-[-75px] md:pl-3 pl-5 md:pt-3 pt-5 md:ml-[100px] ml-[160px] md:mt-[-50px]  mt-[-55px] md:hover:backdrop-blur text-white font-semibold"><button><LuPhoneCall size={22} /></button></div>
                 </div>  
                  
                 </div>

                
            </div>

<div className="md:flex justify-center" > 
            <div className="md:pl-[30px] pl-[55px] md:mt-[57px] mt-[50px]" > <img src={img2} alt="picture" /></div>
            <div className=" text-slate-700 font-bold text-[14px] md:mt-[56px] mt-[-90px] md:ml-[-76px] ml-[100px]">SERVICES</div>
     
            </div>

            <div className="md:flex justify-center md:mr-[200px] md:text-[60px] text-[30px]  font-bold md:ml-[310px] ml-[10px] font-serif">Services we Offer</div>
            
            
        
          
            </div>







          

    );
}

export default AboutourCompany