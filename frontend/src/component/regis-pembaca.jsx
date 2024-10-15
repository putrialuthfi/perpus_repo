function RegisAdmin() {
    return (
        <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="w-full h-1/2 md:h-full bg-[url('../src/assets/img/img-login-2.jpg')] bg-cover bg-center">
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="w-full max-w-md px-4">
                    <form className="py-4">
                        <div className="mb-8">
                            <b className="text-[#2A7C76] text-2xl">Mendaftar Akun</b>
                            <h4 className="text-sm mt-2">Silakan mendaftar akun untuk mendapatkan layanan menarik yang hanya bisa diakses oleh pengguna</h4>
                        </div>
                        <div className="mb-6">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nama Lengkap" />
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="notelp" type="text" placeholder="No Telepon" />
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Kata Sandi" />
                        </div>
                        <div className="">
                            <button className="w-full bg-[#2A7C76] text-white font-bold py-2 px-3 mb-3 rounded" type="button">
                                Daftar
                            </button>
                            <p className="text-sm">Sudah punya akun? <a href="" className="underline">Masuk ke akun disini</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisAdmin;