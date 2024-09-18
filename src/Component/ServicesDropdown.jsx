import React, { useState } from 'react';
import { ServicesDropdown as servicesDropdownItems } from './navitems.jsx';
import SoftwareDevelopmentDropdown from './SoftwareDevelopmentDropdown.jsx';
import SalesForceDropdown from './SalesForceDropdown.jsx';
import SAP_Bi_ConsultingDropdown from './SAP_Bi_ConsultingDropdown.jsx';  // Ensure correct import
import { Link } from 'react-router-dom';

function ServicesDropdown() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [softwareDevelopmentVisible, setSoftwareDevelopmentVisible] = useState(false);
    const [salesForceVisible, setSalesForceVisible] = useState(false);
    const [SAPBIVisible, setSAPBIVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
        setSoftwareDevelopmentVisible(false);
        setSalesForceVisible(false);
        setSAPBIVisible(false);
    };

    return (
        <div
            className='relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='absolute list-none text-start bg-white border w-[200px] m-[20px] text-[15px] pt-10 font-serif p-8 font-bold'>
                <ul className={dropdownVisible ? "submenu-items clicked" : "submenu-items"}>
                    {servicesDropdownItems.map(item => (
                        <li
                            key={item.id}
                            className='mb-4 mr-4 hover:text-red-700 font-bold relative'
                            onMouseEnter={() => {
                                if (item.title === "Software developments") {
                                    setSoftwareDevelopmentVisible(true);
                                }
                                if (item.title === "SalesForce Consulting") {
                                    setSalesForceVisible(true);
                                }
                                if (item.title === "SAP-BI Consulting") {
                                    setSAPBIVisible(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (item.title === "Software developments") {
                                    setSoftwareDevelopmentVisible(false);
                                }
                                if (item.title === "SalesForce Consulting") {
                                    setSalesForceVisible(false);
                                }
                                if (item.title === "SAP-BI Consulting") {
                                    setSAPBIVisible(false);
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
                            {item.title === "SAP-BI Consulting" && SAPBIVisible && (
                                <div className='absolute left-full top-0 ml-2'>
                                    <SAP_Bi_ConsultingDropdown /> 
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
