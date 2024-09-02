import React, { useState } from 'react';
import { ServicesDropdown as servicesDropdownItems } from './navitems.jsX';
import SoftwareDevelopmentDropdown from './SoftwareDevelopmentDropdown.jsx';
import { Link } from 'react-router-dom';
import SalesForceDropdown from './SalesForceDropdown.jsx';

function ServicesDropdown() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [softwareDevelopmentVisible, setSoftwareDevelopmentVisible] = useState(false);
    const [salesForceVisible, setSalesForceVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
        setSoftwareDevelopmentVisible(false);
        setSalesForceVisible(false)
    };

    return (
        <div
            className='relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='absolute list-none text-start bg-white border w-[250px] m-[20px] text-lg pt-10 font-mono p-8 font-bold'>
                <ul className={dropdownVisible ? "submenu-items clicked" : "submenu-items"}>
                {servicesDropdownItems.map(item => (
                        <li
                            key={item.id}
                            className='mb-4 mr-4 hover:text-red-400 font-bold relative'
                            onMouseEnter={() => {
                                if (item.title === "Software developments") {
                                    setSoftwareDevelopmentVisible(true);
                                }
                                if (item.title === "SalesForce Consulting") {
                                    setSalesForceVisible(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (item.title === "Software developments") {
                                    setSoftwareDevelopmentVisible(false);
                                }
                                if (item.title === "SalesForce Consulting") {
                                    setSalesForceVisible(false);
                                }
                            }}
                        >
                            <Link to={item.path} className={item.cName} onClick={() => setDropdownVisible(false)}>
                                {item.title}
                            </Link>
                            {item.title === "Software developments" && softwareDevelopmentVisible && (
                                <div className='absolute left-full top-0 ml-2'>
                                    <SoftwareDevelopmentDropdown />
                                </div>
                            )}
                            {item.title === "SalesForce Consulting" && salesForceVisible && (
                                <div className='absolute left-full top-0 ml-2'>
                                    <SalesForceDropdown />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ServicesDropdown;