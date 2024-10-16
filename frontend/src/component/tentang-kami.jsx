import Navbar2 from "./navbar-2"
import Footer from "./footer"

function TentangKami() {
    return(
        <>
        <Navbar2 />
        <div className="mx-40 mt-20 mb-12 py-6">
            <div className="mb-4 text-2xl font-bold">
                <h1>Tentang Kami</h1>
            </div>
            <div className="flex flex-col w-full sm:flex-row">
                <div className="">
                    <img src="../src/assets/img/img-about-1.png" alt="" className="w-3/4 h-auto mx-auto"/>
                </div>
                <div className="py-10 mx-auto text-justify">
                    <b>SiPerpus</b> hadir sebagai pusat literasi modern yang menyediakan ribuan buku dan sumber daya digital secara mudah dan praktis. Nikmati akses koleksi lengkap dari berbagai genre, kapan saja dan di mana saja, langsung dari perangkat Anda. Temukan pengetahuan tanpa batas dalam satu klik! 😉
                </div>
            </div>
        </div>
            <Footer />
        </>
    )
}

export default TentangKami