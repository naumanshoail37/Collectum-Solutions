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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
