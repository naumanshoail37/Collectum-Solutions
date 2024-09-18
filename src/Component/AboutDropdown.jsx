import {React , useState} from 'react';
import {AboutusDropdown} from './navitems.jsX';
import { Link } from 'react-router-dom';

function AboutDropdown(){

const [Aboutdropdown , setAboutdropdown] = useState(false) 

return (
<div className='absolute list-none text-start bg-white border  w-[200px] ml-1  m-[20px] text-[15px]	pt-10 font-serif p-8 font-bold'>
<ul className= {Aboutdropdown ? "submenu-items clicked " : "submenu-item" }
onClick={()=>setAboutdropdown (!Aboutdropdown)}  >

    {AboutusDropdown.map(item => {

        return (
            <li key =  {item.id} className='mb-4 hover:text-red-700 font-semibold'>
                <Link to = {item.path} className={item.cName} onClick={()=>setAboutdropdown (false)}  
                >{item.title}
                </Link>
            </li>
        )
    })}
</ul>
</div>
);

}

export default AboutDropdown
