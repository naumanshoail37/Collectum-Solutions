import React from 'react'
import HomeSoftwaredevelopment from './homeSoftwaredevelopment'
import digitalimage from "../Component/digital.jpg"

function DigitalMarketinghome() {

 const DigitalService= [

    'Digital Strategy',
    'Social Media Management',
    'Branding & Creative Services',
    'Content Production',
    'Google & Meta Ads',
    'SEO',


 ]



  return (
    
 <HomeSoftwaredevelopment
 
  title = "Digital Marketing"
  discription= "Reach your target audience and achieve your marketing goals with our data-driven digital marketing strategies. We craft customized campaigns that deliver measurable results."
  services = {DigitalService}
  imgScr={digitalimage}

 />

  )
}

export default DigitalMarketinghome
