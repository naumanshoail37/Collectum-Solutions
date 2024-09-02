import React from 'react'
import HomeSoftwaredevelopment from './homeSoftwaredevelopment';
import sapimage from "../Component/sapimage.jpg"

const SAP_BI_Consulting_Home = () => {

    const Sap_BIservices=[
        'Consulting and Advisory', 
        'implementation', 
        'Bespoke Add-on Development', 
        'Training',
    ];



  return (
    

<HomeSoftwaredevelopment

title="SAP-BI Consulting"
discription="Leverage the power of SAP B1 with our consulting services. We ensure seamless implementation, maximize efficiency, and unlock valuable business insights."
services={ Sap_BIservices }
imgScr={sapimage}
/>

 );
}

export default SAP_BI_Consulting_Home
