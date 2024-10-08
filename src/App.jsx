import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import AboutOurCompany from "./Component/AboutOurCompany";
import HomeSoftwaredevelopment from "./Component/homeSoftwaredevelopment";
import SalesforceConsulting from "./Component/SalesforceConsulting";
import SAP_BI_Consulting_Home from "./Component/SAP_BI_Consulting_Home";
import SoftwaredevelopmentHome from "./Component/SoftwaredevelopmentHome";
import DigitalMarketinghome from "./Component/DigitalMarketinghome";
import SalesConsulting from "./Component/SalesConsulting";
import Cloud from "./Component/Cloud";
import Industries from "./Component/Industries";
import Slider from "./Component/Slider";
import OurOfferings from "./Component/OurOfferings";
import About from "./Component/ABOUT";
import OurClients from "./Component/OURCLIENTS";

export default function App() {
  return (
    <>
      <Header />
            <Hero />
            <AboutOurCompany />
            <SAP_BI_Consulting_Home />
            <SalesConsulting />
            <SoftwaredevelopmentHome />
            <Cloud />
            <DigitalMarketinghome />
            <Industries />
            <Slider />
            <OurOfferings />
      <Footer />
    </>
  );
}
