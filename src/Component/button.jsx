import React from "react";
import { Link } from "react-router-dom";

function Button (){



    return (
  
        <Link to = "/contact"><button className="btn hover:delay-100 md:mt-3 mt-5	 text-white bg-red-600 hover:bg-black border md:text-[17px] text-[14px] font-bold font-serif rounded-3xl md:h-[55px] h-[40px]  md:w-44 w-28 md:ml-0 ml-[-10px] ">Contact Us</button></Link>

    ); 
}

export default Button