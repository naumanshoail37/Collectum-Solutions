import React from 'react';
import { SoftwareDevelopmentDropdown as softwareDevelopmentItems } from './navitems.jsX';
import { Link } from 'react-router-dom';

function SoftwareDevelopmentDropdown() {
    return (
        <div className=' absolute left-full top-0 ml-2 list-none text-start bg-white border w-[250px] text-lg pt-10 font-mono p-8 font-bold'>
            <ul className='submenu-items'>
                {softwareDevelopmentItems.map(item => (
                    <li key={item.id} className='mb-4 '>
                        <Link to={item.path} className={item.cName}>
                            {item.title}
                        </Link> 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SoftwareDevelopmentDropdown;
