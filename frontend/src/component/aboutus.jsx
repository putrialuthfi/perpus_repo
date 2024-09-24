import Navbar from "./Navbar"
import Footer from "./footer"

function AboutUs() {
    return(
        <>
        <div className="w-3/4 mx-auto py-4">
            <div className="mb-4 text-2xl font-bold">
                <h1>Tentang Kami</h1>
            </div>
            <div className="flex flex-row">
                <div>
                    <img src="../src/assets/img/img-about-1.png" alt="" className="w-3/4 h-auto"/>
                </div>
                <div className="py-10">
                <b>SiPerpus</b> hadir sebagai pusat literasi modern yang menyediakan ribuan buku dan sumber daya digital secara mudah dan praktis. Nikmati akses koleksi lengkap dari berbagai genre, kapan saja dan di mana saja, langsung dari perangkat Anda. Temukan pengetahuan tanpa batas dalam satu klik! 😉
                </div>
            </div>
        </div>
            <Footer />
        </>
    )
}

export default AboutUs