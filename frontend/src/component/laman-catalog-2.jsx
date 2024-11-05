import Navbar2 from "./navbar-2";
import Footer from "./footer";

function LamanCatalog2() {
    return (
        <>
        <Navbar2 />
        <div>
        <div className="flex flex-col min-h-screen sm:mx-20">
            <div className="w-full h-full flex flex-col md:flex-row my-10">
                <div className="w-full flex justify-center items-center md:w-2/4 p-4  mt-10 lg:mt-0">
                    <img src="../src/assets/img/buku-1.jpg" alt="Cover Buku" className="h-4/5 w-[75%] object-cover" />
                </div>
                <div className="w-full md:w-2/3 px-8 text-left pt-0 sm:pt-16 mr-10 space-y-6">
                    <div>
                    <h2 className="font-bold text-lg mb-2">Spesifikasi Buku</h2>
                    <table className="mb-6 sm:mb-0">
                        <tr>
                            <td className="pr-12">Judul: </td>
                            <td>Kisah, Perjuangan & Inspirasi: B.J. Habibie</td>
                        </tr>
                        <tr>
                            <td>Penulis:</td>
                            <td>Weda S. Atma</td>
                        </tr>
                        <tr>
                            <td>Penerbit:</td>
                            <td>Checklist</td>
                        </tr>
                        <tr>
                            <td>Terbit: </td>
                            <td>19 Oktober 2017</td>
                        </tr>
                        <tr>
                            <td>Bahasa:</td>
                            <td>Indonesia</td>
                        </tr>
                        <tr>
                            <td>ISBN:</td>
                            <td>9786026763983</td>
                        </tr>
                    </table>
                    </div>
                    <div>
                    <h2 className="font-bold text-lg mb-2">Deskripsi Buku</h2>
                    <h3 className="text-sm mb-4">
                        Siapa yang tidak mengenal B.J. Habibie? Beliau merupakan salah satu putra terbaik yang pernah dimiliki negeri ini. Indonesia patut berbangga memiliki Prof. Dr. Ing. H. Bacharuddin Jusuf Habibie. Tokoh dengan sejuta prestasi ini tak hanya dikenal sebagai presiden ke-3 Republik Indonesia, tapi juga insinyur ternama yang karya dan pencapaiannya melambung hingga ke kancah dunia. Meski begitu, rupanya perjuangan beliau tidaklah mudah.
                    </h3>
                    <ul className="text-sm">
                        <li>Seperti apakah sosok B.J. Habibie?</li>
                        <li>Bagaimana masa kecil B.J. Habibie?</li>
                        <li>Bagaimana perjuangan beliau ketika menginjakkan kaki pertama kali di negeri orang?</li>
                        <li>Bagaimana awal mula kisah beliau dalam dunia politik?</li>
                    </ul>
                    <br />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-[#F9F9F9] border border-[#2A7C76] text-[#2A7C76] py-2  rounded " type="button">
                                Tersedia 25 item buku
                        </button>
                        <button className="bg-[#2A7C76] text-white font-bold py-2 rounded" type="button">
                        <a href="/FormPinjamBuku">
                                Pinjam Buku
                        </a>
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default LamanCatalog2;