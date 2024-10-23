import "/src/App.css";
import Navbar2 from "./navbar-2"
import Footer from "./footer"

function DataPeminjamBuku() {
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
              <div className="font-bold text-2xl mb-2">Data Peminjam Buku</div>
              <div className="text-sm">Data Peminjam Buku ini berisi informasi lengkap mengenai individu yang telah meminjam buku dari perpustakaan</div>
            </div>
            {/* section tabel data */}
            <div>
            <table className="border w-full">
                <thead className="text-white bg-primary">
                    <td>Nama</td>
                    <td>Kode Buku</td>
                    <td>Kode Pinjam</td>
                    <td>Tgl Peminjaman</td>
                    <td>Aksi</td>
                </thead>
                <tbody className="text-left">
                  <tr>
                    <td>Arsy Hidayat</td>    
                    <td>KX762</td>
                    <td>UY872</td>
                    <td>12/12/2023</td>  
                    <td className="inline-flex space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#27A37F"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#E05151"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Arsy Hidayat</td>    
                    <td>KX762</td>
                    <td>UY872</td>
                    <td>12/12/2023</td>  
                    <td className="inline-flex space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#27A37F"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#E05151"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Arsy Hidayat</td>    
                    <td>KX762</td>
                    <td>UY872</td>
                    <td>12/12/2023</td>  
                    <td className="inline-flex space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#27A37F"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#E05151"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </td>
                  </tr>
                </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DataPeminjamBuku;