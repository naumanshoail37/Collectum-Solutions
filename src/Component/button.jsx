import React from "react";
import { Link } from "react-router-dom";

function Button (){



    return (
  
        <Link to = "Contact Us"><button className="btn hover:delay-100 mt-4	 text-white bg-red-600 hover:bg-black border text-xl font-bold font-serif rounded-3xl h-14  w-48	">Contact Us</button></Link>

    ); 
}

export default Button