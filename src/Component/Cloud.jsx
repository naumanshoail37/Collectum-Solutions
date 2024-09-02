import React from 'react'
import cloudpic from '../Component/cloud.jpg'
import SalesforceConsulting from './SalesforceConsulting';

function Cloud() {
 
 const cloudService = [

'ERP',
'AWS, Azure & GCP',
'Business Process Automation',
'CloudOps',
'Cloud Migration'
 

 ]
 
 
    return (


 <SalesforceConsulting
 
  title = 'Cloud Solutions'
  discription='Embrace the flexibility and scalability of cloud computing. We guide you in selecting the right cloud solutions and ensure a smooth migration process.'
  services={cloudService}
  imgScr={cloudpic}
  
 />

    
  );

}


export  default Cloud
 
  