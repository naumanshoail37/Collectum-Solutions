import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../Component/comp.png";
import { navitems } from './navitems';
import AboutDropdown from './AboutDropdown.jsx';
import ServicesDropdown from './ServicesDropdown.jsx';
import Button from './Button.jsx';

function Header() {
    const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
    const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);

    return (
        <header className='navbar bg-white shadow md:justify-center md:flex text-center'>
            <div>
                <Link to="/" className='navbarlogo'>
                    <img src={img} alt="logo" className='h-16 md:flex md:pr-[250px] pr-[50px] mt-3' />
                </Link>
            </div>
            <ul className='md:z-10 nav-items text-lg font-bold md:flex justify-center md:gap-16 md:m-5 font-serif mt-9 md:pr-[460px]'>
                {navitems.map((item) => {
                    if (item.title === "About") {
                        return (
                            <li
                                key={item.id}
                                className={`${item.cName}`}
                                onMouseEnter={() => setAboutDropdownVisible(true)}
                                onMouseLeave={() => setAboutDropdownVisible(false)}
                            >
                                <Link to={item.path} className="py-6">
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
                                <Link to={item.path} className="py-6">
                                    {item.title}
                                </Link>
                                {servicesDropdownVisible && <ServicesDropdown />}
                            </li>
                        );
                    }

                    return (
                        <li key={item.id} className={item.cName}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
            <Button />
        </header>
    );
}

export default Header;
