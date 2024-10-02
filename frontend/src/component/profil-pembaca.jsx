function ProfilPembaca () {
    return (
    <>
        <div className="grid grid-cols-3 mx-20 border border-purple-600">
            <div className="grid grid-rows-2 gap-6 my-10 border border-red-500">
                <div className="text-left border">
                    <div className="font-bold">**Pro Tips Saat Melakukan Peminjaman Buku</div>
                    <ul className="list-disc pl-5">
                        <li>Periksa kondisi buku</li>
                        <li>Membaca syarat & ketentuan</li>
                        <li>Jaga Kebersihan Buku</li>
                        <li>Pinjam buku sesuai kebutuhan</li>
                        <li>Hindari meminjam buku terlalu banyak sekaligus</li>
                    </ul>
                </div>
                <div className="">
                    <ul className="text-left border">
                        <li><a href="">Profil Saya</a></li>
                        <li><a href="">Riwayat Pinjaman Buku</a></li>
                        <li><a href="">Aktivitas Saya</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-span-2 border border-green-500">
            {/* section text */}
                <div className="mb-4">
                    <div className="font-bold text-2xl mb-2">Selamat Datang, Nara!</div>
                    <div className="text-sm">Ini adalah halaman informasi mengenai profil dan fitur untukmu di website SiPerpus</div>
                </div>
            {/* section data */}
                <div>
                    <form action="" className="float-left pl-10">
                        <label htmlFor="">Nama Lengkap</label>
                        <input type="text" name="" id="" />
                    </form>
                </div>
            </div>
        </div>
        <div className="border text-right mx-20">
            <button className="border bg-[#2A7C76] text-white py-2 px-3 rounded-lg">
                Update Profil
            </button>
        </div>
    </>
    )
}

export default ProfilPembaca