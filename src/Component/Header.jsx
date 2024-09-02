
import React from 'react';
import img from "../Component/comp.png";
import { Link} from 'react-router-dom';
import { MdOutlineArrowDropDown } from "react-icons/md";
import * as Icons from "react-icons/fa";
import { navitems } from './navitems.jsX';
import Button from './button.jsx';
import { useState } from 'react';
import ServicesDropdown from './ServicesDropdown.jsx';
import AboutDropdown from './AboutDropdown.jsx';



function Header() {

    const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
    const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
    
    

   

    return (

        <>
   <header className='navbar bg-white shadow justify-center flex text-center'>
                <div>
                    <Link to={"/"} className='navbarlogo'>
                        <img src={img} alt="logo" className='h-16 flex pr-[250px] mt-3' />
                    </Link>
                </div>
                
                <ul className='z-10 nav-items text-lg font-bold flex justify-center gap-16 m-5 font-serif mt-9 pr-[460px]'>
                    {navitems.map((item) => {
                        if (item.title === "About") {
                            return (


                                <li

                                    key={item.id}
                                    className={ `${item.cName} `}
                                    onMouseEnter={() => setAboutDropdownVisible(true)}
                                    onMouseLeave={() => setAboutDropdownVisible(false)}
                                >
                                    <Link to={item.path} className=" g-5 py-6">
                                        {item.title}
                                    </Link>
                                    {aboutDropdownVisible && <AboutDropdown />}
                                </li>
                            );
                        }

                    if (item.title === "Services") {
                        return (
                            <li
                                key={item.id}
                                className={item.cName}
                                onMouseEnter={() => setServicesDropdownVisible(true)}
                                onMouseLeave={() => setServicesDropdownVisible(false)}
                            >
                                <Link to={item.path}  className=" py-6" >
                                    {item.title}
                                </Link>
                                {servicesDropdownVisible && <ServicesDropdown />}
                            </li>
                        );
                    }
                   



                                       
               
            return(
            <li key={item.id} className={item.cName}>
                <Link to  = {item.path}>{item.title}
                </Link>
                </li>
            )
        })}
    </ul> 
     
    <Button/>
   
 </header>  


 </>
    );
    
}

export default Header