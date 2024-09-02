import React from 'react'
import HomeSoftwaredevelopment from './homeSoftwaredevelopment';
import homesoftwarepic from '../Component/homesoftwarepic.jpg'




function SoftwaredevelopmentHome() {


   
   const  sdservices=[
        'Web Development',
        'Mobile App Development', 
        'CRM' ,
        'CMS',
        
    
]


return (
    

    <HomeSoftwaredevelopment
    
    title="Software Development"
    discription="Our skilled developers craft custom software solutions that streamline your operations and empower your teams."
    services={ sdservices }
    imgScr={homesoftwarepic}
    />
    
     );
    }


export default SoftwaredevelopmentHome
