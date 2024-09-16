import React from "react";
import { Link } from "react-router-dom";

function Button (){



    return (
  
        <Link to = "Contact Us"><button className="btn hover:delay-100 mt-3	 text-white bg-red-600 hover:bg-black border text-[15px] font-bold font-serif rounded-3xl h-[55px]  w-44	">Contact Us</button></Link>

    ); 
}

export default Button