import React from 'react';
import { SoftwareDevelopmentDropdown as softwareDevelopmentItems } from './navitems.jsX';
import { Link } from 'react-router-dom';

function SoftwareDevelopmentDropdown() {
    return (
        <div className=' absolute  ml-[-7px] border-b-0 border-t-0 list-none text-start border-l-0 bg-white border w-[200px] text-[14px] pt-10 font-serif p-10 font-bold'>
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
 