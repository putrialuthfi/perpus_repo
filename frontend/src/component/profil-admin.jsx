import "/src/App.css";

function ProfilAdmin() {
  return (
    <>
      <div className="my-10 mx-4 md:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="grid grid-rows-2 gap-6 mt-10">
            <div className="text-left border border-gray-100 shadow-md p-4 border-rounded">
              <div className="font-bold">**Pro Tips Saat Melakukan Peminjaman Buku</div>
              <ul className="list-disc pl-5">
                <li>Periksa kualitas informasi buku</li>
                <li>Masukan kode buku secara jelas</li>
                <li>Tambahkan deskripsi buku</li>
                <li>Update status ketersediaan buku</li>
                <li>Lakukan pengecekan data secara berkala</li>
              </ul>
            </div> 
            <div>         
                <div className="text-left h-auto space-y-3 p-4 border-rounded border border-gray-100 shadow-md">
                <div className="font-bold">Navigasi Profil</div>
                <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#121212">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                  <a href="">Profil Saya</a>
                </li>
                <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#121212"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                  <a href="">Data Peminjam Buku</a>
                </li>
                <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#121212"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
                  <a href="">Upload Data Buku</a>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            {/* section text */}
            <div className="mb-4">
              <div className="font-bold text-2xl mb-2">Selamat Datang, Admin!</div>
              <div className="text-sm">Ini adalah halaman informasi mengenai profil dan fitur untukmu di website Perpustakaan</div>
            </div>
            {/* section form data */}
            <div>
              <form action="" className="space-y-4 pl-0 md:pl-10 text-left">
                <div className="space-y-2">
                  <label htmlFor="nama" className="w-full md:w-2/4 text-sm font-medium">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    className="w-full border border-gray-300 rounded-md p-2 custom-input"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="ttl" className="w-full md:w-2/4 text-sm font-medium">
                      Tanggal Lahir
                    </label>
                    <input
                      type="date"
                      id="ttl"
                      name="ttl"
                      className="w-full border border-gray-300 rounded-md p-2 custom-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="jekel" className="w-full md:w-2/4 text-sm font-medium">
                      Jenis Kelamin
                    </label>
                    <select id="gender" name="gender" className="w-full border border-gray-300 rounded-md p-2 custom-input">
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="no_hp" className="w-full md:w-2/4 text-sm font-medium">
                      Nomor HP
                    </label>
                    <input
                      type="text"
                      id="no_hp"
                      name="no_hp"
                      className="w-full border border-gray-300 rounded-md p-2 custom-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="domisili" className="w-full md:w-2/4 text-sm font-medium">
                      Domisili
                    </label>
                    <input
                      type="text"
                      id="domisili"
                      name="domisili"
                      className="w-full border border-gray-300 rounded-md p-2 custom-input"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="w-full md:w-2/4 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-md p-2 custom-input"
                  />
                </div>
              </form>
            </div>
            <div className="w-full text-right mt-6">
              <button className="button-primary">Update Profil</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilAdmin;