// import Navbar from "./Navbar";
// import Footer from "./footer";

function Catalog2() {
    return (
        <>
        {/* <Navbar /> */}
        <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="w-full flex justify-center items-center md:w-2/4 p-4 border">
                <img src="../src/assets/img/buku-1.jpg" alt="Cover Buku" className="h-4/5 w-[75%] object-cover" />
            </div>
                <div className="w-full md:w-2/3 px-8 text-left pt-10 mr-10">
                    <h2 className="font-bold text-lg mb-4">Spesifikasi Buku</h2>
                        <ul className="mb-6">
                            <li>Judul: Kisah, Perjuangan & Inspirasi: B.J. Habibie</li>
                            <li>Penulis: Weda S. Atma</li>
                            <li>Penerbit: Checklist</li>
                            <li>Terbit: 19 Oktober 2017</li>
                            <li>Bahasa: Indonesia</li>
                            <li>ISBN: 9786026763983</li>
                        </ul>
                        <h2 className="font-bold text-lg mb-4">Deskripsi Buku</h2>
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
                        <div className="float float-col">
                            <button className="w-1/3 bg-[#F9F9F9] border border-[#2A7C76] text-[#2A7C76] py-2 px-3 mr-6 rounded " type="button">
                                    Tersedia 25 pcs buku
                                </button>
                            <button className="w-1/3 bg-[#2A7C76] text-white font-bold py-2 px-3 rounded " type="button">
                                    Pinjam Buku
                                </button>
                        </div>
                </div>
        </div>
        {/* <Footer /> */}
        </>
    );
}

export default Catalog2;
