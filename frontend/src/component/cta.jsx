import Navbar from "./Navbar"
import Footer from "./footer"

function CTA() {
    return(
        <>
        <div
        className="w-full bg-cover bg-center py-4"
        style={{ backgroundImage: "url('../src/assets/img/bg-cta.png')" }}>
        {/* <div className="w-full mx-auto py-4"> */}
            <div className="flex flex-row">
                <div className="py-4">
                    Daftar Menjadi Pembaca Sekarang Juga.<br />
                    Buka Buku, Buka Dunia. <br />
                    Meningkatkan wawasan & pengetahuan <br />
                    Mengembangkan imajinasi dan kreativitas <br />
                    Mengurangi stres <br />
                    Meningkatkan kemampuan berbahasa <br />
                </div>
                <div>
                    <img src="../src/assets/img/img-cta-1.png" alt="" className="w-1/4 h-auto"/>
                </div>
            {/* </div> */}
        </div>
    </div>
            <Footer />
        </>
    )
}

export default CTA