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

    // return (
    //     <Router>
    //         <Navbar />
    //             <Routes>
    //             <Route path="/LoginAdmin" element={<LoginAdmin />} />
    //             <Route path="/LoginPembaca" element={<LoginPembaca />} />
    //             <Hero />
    //             <Service />  
    //             <SectionCatalog />
    //             <FAQ />
    //             <CTA /> 
    //             <Footer /> 
    //             </Routes>
    //     </Router>
    // )
};
export default Beranda