import Navbar from './navbar.jsx';
import Hero from "./section-hero"
import Service from "./section-service"
import SectionCatalog from "./section-catalog"
import FAQ from "./section-faq"
import CTA from "./section-cta"
import Footer from "./footer"

function Beranda() {
    return (
        <>
            <Navbar />
            <Hero />
            <Service />  
            <SectionCatalog />
            <FAQ />
            <CTA /> 
            <Footer /> 
        </>
    )

};

export default Beranda