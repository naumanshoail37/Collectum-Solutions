import React from "react";
import img1 from '../Component/homepic.png'
import img2 from '../Component/homepic2.jpg'
import img3 from '../Component/homepic3.jpg'
import img4 from '../Component/homepic4.jpg'
import { LuPhoneCall } from "react-icons/lu";



function AboutourCompany() {


    return (

        <div className="bg-white h-[100%]">


            <div className="md:flex m-10">
                <img src={img2} alt="picture2" />
                <div className="text-red-600 font-bold text-[20px] m-[-7px] md:ml-[-60px] ml-[30px] md:mt-[-5px] mt-[-68px] ">About Our Company</div>
            </div>


            <div className="md:flex md:gap-[160px]">

                <div className="font-bold	md:text-[50px] text-[25px] md:w-[500px] w-[250px] md:ml-[55px] ml-[30px] ">We Want to Give You
                    The Best Service</div>
                <div className="text-slate-700 w-[450px] md:text-[20px] text-[15px]   ">
                    <div className="md:w-[600px] w-[300px] mt-4 md:ml-0 ml-[30px] ">In today's dynamic digital world, a strong online presence is crucial for businesses of all sizes. At Collectum Solutions, we're passionate about helping you succeed online. We leverage our expertise to craft a customized digital strategy that propels your brand forward.</div>
                </div>

                </div>


                <div className="md:flex" >


                <div className="md:m-16 m-[30px]">
                <div> <img src={img1} alt="picture" /></div>
                </div>

                <div className="md:flex gap-5  md:mt-[60px] md:h-[110px] ">
                
                 <img src={img3} alt="picture" />

                
                 <div 
                 className="font-bold md:mt-1 mt-[-85px] md:ml-0 ml-[80px] font-sans md:text-2xl text-xl "><h1>Building Success Together</h1>
                 <h1 className="md:w-[600px] w-[250px] text-[20px] text-slate-700 font-normal">We believe in collaboration. We take the time to understand your unique business goals and develop a strategy that aligns perfectly with your vision.</h1>
                 <div className="md:flex mt-[50px] md:ml-[-130px] ml-[-75px] h-[110px]"> <img src={img4} alt="picture" /></div>
                 <h1  className="font-bold mt-[-110px] font-sans text-2xl " >Ready to Unlock Your Potential?</h1>

                 <h1 className="md:w-[600px] w-[250px] text-[20px] text-slate-700 font-normal">Contact Collectum Solutions today for a free consultation! Let's craft your digital success story.</h1>
                 <button className="bg-red-700 md:h-16 h-12 md:w-[190px] w-[150px] rounded-full text-[20px] md:mt-[70px] mt-[40px] md:ml-[-130px] ml-[-10px]   text-white font-semibold">Learn More</button>
                 <div  className= " bg-red-700 md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full md:text-[30px] text-[20px] md:m-[-75px] md:pl-6 pl-5 md:pt-7 pt-5 md:ml-[100px] ml-[160px] md:mt-[-70px]  mt-[-55px] md:hover:backdrop-blur text-white font-semibold"><button><LuPhoneCall /></button></div>
                 </div>  
                  
                 </div>

                
            </div>

<div className="md:flex justify-center" > 
            <div className="md:pl-[65px] pl-[55px] md:mt-0 mt-[50px]" > <img src={img2} alt="picture" /></div>
            <div className=" text-slate-700 font-bold text-[45px] md:mt-[-26px] mt-[-90px] md:ml-[-65px] ml-[100px]">Services</div>
        
            </div>

            <div className="md:flex justify-center md:mr-[200px] md:text-[60px] text-[40px] mt-5 font-bold md:ml-[310px] ml-[10px] font-serif">Services we Offer</div>
            
            
        
          
            </div>







          

    );
}

export default AboutourCompany