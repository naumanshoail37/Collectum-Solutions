import React from 'react'
import SalesforceConsulting from './SalesforceConsulting'
import salesforce from '../Component/salesforce.jpg'

function SalesConsulting() {

 const salesService = [


    'Consulting And Advisor',
    'Industry-Specific Solutions',
    'Customization And Development'
 ]

 return (

    <SalesforceConsulting 
    
    title = "Salesforce Consulting"
    discription = "Our certified experts are dedicated to tailoring and optimizing the perfect Salesforce Cloud solution for your unique needs."
    services = {salesService}
    imgScr = {salesforce}
    />

 );

}


    export default SalesConsulting 

 
 
 
 
 
 

   
 