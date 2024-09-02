import React from "react";
import img1 from '../Component/homepic.png'
import img2 from '../Component/homepic2.jpg'
import img3 from '../Component/homepic3.jpg'
import img4 from '../Component/homepic4.jpg'
import { LuPhoneCall } from "react-icons/lu";



function AboutourCompany() {


    return (

        <div className="bg-white h-[100%]">


            <div className="flex m-10">
                <img src={img2} alt="picture2" />
                <div className="text-red-600 font-bold text-[20px] m-[-7px] ml-[-60px]">About Our Company</div>
            </div>


            <div className="md:flex gap-[160px]">

                <div className="font-bold	md:text-[50px] text-[25px] md:w-[500px] w-[250px] md:ml-[55px] ml-[30px] ">We Want to Give You
                    The Best Service</div>
                <div className="text-slate-700 w-[450px] md:text-[20px] text-[15px]   ">
                    <div className="md:w-[600px] w-[300px] mt-4 md:ml-0 ml-[30px] ">In today's dynamic digital world, a strong online presence is crucial for businesses of all sizes. At Collectum Solutions, we're passionate about helping you succeed online. We leverage our expertise to craft a customized digital strategy that propels your brand forward.</div>
                </div>

                </div>


                <div className="flex" >


                <div className="m-16">
                <div> <img src={img1} alt="picture" /></div>
                </div>

                <div className="flex gap-5  mt-[60px] h-[110px] ">
                
                 <img src={img3} alt="picture" />

                
                 <div 
                 className="font-bold mt-1 font-sans text-2xl "><h1>Building Success Together</h1>
                 <h1 className="w-[600px] text-[20px] text-slate-700 font-normal">We believe in collaboration. We take the time to understand your unique business goals and develop a strategy that aligns perfectly with your vision.</h1>
                 <div className="flex mt-[50px] ml-[-130px] h-[110px]"> <img src={img4} alt="picture" /></div>
                 <h1  className="font-bold mt-[-105px] font-sans text-2xl " >Ready to Unlock Your Potential?</h1>

                 <h1 className="w-[600px] text-[20px] text-slate-700 font-normal">Contact Collectum Solutions today for a free consultation! Let's craft your digital success story.</h1>
                 <button className="bg-red-700 h-16 w-[190px] rounded-full text-[20px] mt-[70px] ml-[-130px]   text-white font-semibold">Learn More</button>
                 <div  className= " bg-red-700 h-[80px] w-[80px] rounded-full text-[30px] m-[-75px] pl-6 pt-7 ml-[100px] hover:backdrop-blur text-white font-semibold"><button><LuPhoneCall /></button></div>
                 </div>  
                  
                 </div>

                
            </div>

<div className="flex justify-center" > 
            <div className="pl-[65px]" > <img src={img2} alt="picture" /></div>
            <div className=" text-slate-700 font-bold text-[45px] mt-[-26px] ml-[-65px]">Services</div>
        
            </div>

            <div className="flex justify-center mr-[200px] text-[60px] mt-5 font-bold ml-[310px] font-serif">Services we Offer</div>
            
            
        
          
            </div>







          

    );
}

export default AboutourCompany