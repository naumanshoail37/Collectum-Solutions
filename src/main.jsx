import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./Component/ABOUT.jsx";
import { Link } from "react-router-dom";
import OurClients from "./Component/OURCLIENTS.jsx";
import OurProcess from "./Component/OURPROCESS.jsx";
import OurTeam from "./Component/OURTEAM.jsx";
import Faqs from "./Component/FAQS.jsx";
import Testominals from "./Component/TESTOMINAL.jsx";
import Services from "./Component/SERVICES.jsx";
import SoftwareDevelopments from "./Component/SOFTWARE DEVELOPMENTS.jsx";
import SalesForce from "./Component/SALESFORCE.jsx";
import SAP_BI_consulting from "./Component/SAP-BI-CONSULTING.jsx";
import CloudSolution from "./Component/CLOUDSOLUTION.jsx";
import DigitalMarketing from "./Component/DIGITALMARKETING.jsx";
import WebDevelopment from "./Component/WEBDEVELOPMENT.jsx";
import MobileApp from "./Component/MOBILEAPP.jsx";
import CRM from "./Component/CRM.jsx";
import CMS from "./Component/CMS.jsx";
import ConsultingAndAdvisor from "./Component/CONSULTINGANDADVISOR.jsx";
import IndustrySpecific from "./Component/INDUSTRYSPECIFIC.jsx";
import Customization from "./Component/CUSTOMIZATION.jsx";
import ConsultingAndAdvisory from "./Component/CONSULTINGANDADVISORY.jsx";
import Implementation from "./Component/IMPLEMENTATION.jsx";
import Bespoke from "./Component/BESPOKE.jsx";
import Training from "./Component/TRAINING.jsx";
import { MdExposurePlus2 } from "react-icons/md";
import ERP from "./Component/ERP.jsx";
import CloudOps from "./Component/CLOUDOPS.jsx";
import AWS from "./Component/AWS.jsx";
import CloudMigration from "./Component/CLOUDMIGRATION.jsx";
import BusinessAutomation from "./Component/BUSINESSAUTOMATION.jsx";
import DigitalStrategy from "./Component/DIGITALSTRATEGY.jsx";
import SocialMedia from "./Component/SOCIALMEDIA.jsx";
import BrandingAndCreative from "./Component/BRANDINGANDCREATIVE.jsx";
import ContentProduction from "./Component/CONTENTPRODUCTION.jsx";
import GoogleAndMeta from "./Component/GOOGLE&META.jsx";
import SEO from "./Component/SEO.jsx";
import ContactUs from "./Component/CONTACTUS.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
  },
  {
    path: "/about",
    element: <About />,
    
  },
  {
    path: "/our-clients",
    element: <OurClients />,
    
  },
  {
    path: "/Our Process",
    element: <OurProcess />,
    
  },
  {
    path: "/Our Team",
    element: <OurTeam />,
    
  },
  {
    path: "/Faqs",
    element: <Faqs />,
    
  },
  {
    path: "/Testominals",
    element: <Testominals />,
    
  },
  {
    path: "/Services",
    element: <Services />,
    
  },
  {
    path: "/Software Developments",
    element: <SoftwareDevelopments />,
    
  },
  {
    path: "/SalesForce Consulting",
    element: <SalesForce />,
    
  },
  {
    path: "/SAP-BI Consulting",
    element: <SAP_BI_consulting />,
    
  },
  {
    path: "/Cloud Solution",
    element: <CloudSolution />,
    
  },
  {
    path: "/Digital Marketing",
    element: <DigitalMarketing />,
    
  },
  {
    path: "/WebDevelopment",
    element: <WebDevelopment />,
    
  },
  {
    path: "/MobileApp",
    element: <MobileApp />,
    
  },
  {
    path: "/CRM",
    element: <CRM />,
    
  },
  {
    path: "/CMS",
    element: <CMS/>,
    
  },
  {
    path: "/Consulting And Advisor",
    element: <ConsultingAndAdvisor/>,
    
  },
  {
    path: "/Industry Specific Solution",
    element: <IndustrySpecific/>,
    
  },
  {
    path: "/Customization And Development",
    element: <Customization/>,
    
  },
  {
    path: "/Consulting-and-Advisory",
    element: <ConsultingAndAdvisory/>,
    
  },
  {
    path:"/Implementation",
    element: <Implementation/>,
    
  },

  {
    path:"/Bespoke-Add-on-Development",
    element: <Bespoke/>,
    
  },
  {
    path:"/Training",
    element: <Training/>,
    
  },
  {
    path:"/ERP",
    element: <ERP/>,
    
  },
  {
    path: "/CloudOps",
    element: <CloudOps/>,
    
  },
  {
    path: "/AWS , Azure & GCP",
    element: <AWS/>,
    
  },
  {
    path: "/Cloud Migration",
    element: <CloudMigration/>,
    
  },
  {
    path: "/Business Process Automamtion",
    element: <BusinessAutomation/>,
    
  },
  {
    path: "/DigitalStrategy",
    element: <DigitalStrategy/>,
    
  },
  {
    path: "/SocialMediaManagement",
    element: <SocialMedia/>,
    
  },
  {
    path: "/BrandingAndCreatingService",
    element: <BrandingAndCreative/>,
    
  },
  {
    path: "/ContentProduction",
    element: <ContentProduction/>,
    
  },

  {
    path: "/GoogleAndMetaAds",
    element: <GoogleAndMeta/>,
    
  },
  {
    path: "/SEO",
    element: <SEO/>,
    
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
