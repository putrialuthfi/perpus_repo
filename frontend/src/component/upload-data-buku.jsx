import "/src/App.css";
import Navbar2 from "./navbar-2"
import Footer from "./footer"

function UploadDataBuku() {
  return (
    <>
    <Navbar2 />
      <div className="mt-24 mb-10 mx-4 md:mx-20">
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
                  <a href="/ProfilAdmin">Profil Saya</a>
                </li>
                <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#121212"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                  <a href="/DataPeminjamBuku">Data Peminjam Buku</a>
                </li>
                <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#121212"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
                  <a href="/UploadDataBuku">Upload Data Buku</a>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            {/* section text */}
            <div className="mb-4">
              <div className="font-bold text-2xl mb-2">Upload Data Buku</div>
              <div className="text-sm">Laman ini memungkinkan pengguna untuk menambahkan informasi buku ke dalam sistem perpustakaan secara efisien dan akurat.</div>
            </div>
            {/* section form */}
            <div>
            <form action="" className="space-y-4 pl-0 md:pl-10 text-left">
{/* UPLOAD DATA */}                
<div className="space-y-2">
                <label htmlFor="kategori" className="w-full md:w-2/4 text-sm font-medium">
                    Foto Buku
                </label>
<div class="flex items-center justify-center w-3/4 space-x-6">
    <label for="dropzone-file" class="flex flex-col text-left w-1/3 h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold items-center justify-center">Click to upload</span> </p>
            <p className="mb-2 text-sm">or drag and drop</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
    <label for="dropzone-file" class="flex flex-col text-left w-1/3 h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold items-center justify-center">Click to upload</span> </p>
            <p className="mb-2 text-sm">or drag and drop</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
    <label for="dropzone-file" class="flex flex-col text-left w-1/3 h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold items-center justify-center">Click to upload</span> </p>
            <p className="mb-2 text-sm">or drag and drop</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
</div>




                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="kode_buku" className="w-full md:w-2/4 text-sm font-medium">
                      Kode Buku
                    </label>
                    <input
                      type="text"
                      id="kode_buku"
                      name="kode_buku"
                      className="w-full border border-gray-300 rounded-md p-2 custom-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="penulis" className="w-full md:w-2/4 text-sm font-medium">
                      Nama Penulis
                    </label>
                    <input
                      type="text"
                      id="penulis"
                      name="penulis"
                      className="w-full border border-gray-300 rounded-md p-2 custom-input"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="judulbuku" className="w-full md:w-2/4 text-sm font-medium">
                    Judul Buku
                  </label>
                  <input
                    type="text"
                    id="judulbuku"
                    name="judulbuku"
                    className="w-full border border-gray-300 rounded-md p-2 custom-input"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="kategori" className="w-full md:w-2/4 text-sm font-medium">
                    Kategori
                  </label>
                  <input
                    type="text"
                    id="kategori"
                    name="kategori"
                    className="w-full border border-gray-300 rounded-md p-2 custom-input"
                  />
                </div>
              </form>
            </div>
            <div className="w-full text-right mt-6">
              <button className="button-primary">Upload</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UploadDataBuku;