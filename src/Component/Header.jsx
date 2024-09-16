import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../Component/compp.png";
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
                    <img src={img} alt="logo" className='h-12 md:flex md:pr-[350px] pr-[50px] mt-3 mb-3' />
                </Link>
            </div>
            <ul className='z-10 flex flex-row gap-24 mt-7 justify-center pr-[380px] font-bold'>
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
            <Button className='mt-[553px]' />
        </header>
    );
}

export default Header;
