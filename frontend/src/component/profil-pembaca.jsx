import "/src/App.css";
import Navbar2 from "./navbar-2";
import Footer from "./footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfilPembaca() {
  // State untuk setiap input
  const [nama_lengkap, setNamaLengkap] = useState("");
  const [ttl, setTtl] = useState("");
  const [jenis_kelamin, setJenisKelamin] = useState("");
  const [no_hp, setNoHp] = useState("");
  const [domisili, setDomisili] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

// Fungsi untuk mengambil data pengguna dari API  
  const fetchPembaca = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pembaca');
      const data = response.data;

      // Mengisi state dengan data yang diterima
      setNamaLengkap(data.nama_lengkap);
      setTtl(data.ttl);
      setJenisKelamin(data.jenis_kelamin);
      setNoHp(data.no_hp);
      setDomisili(data.domisili);
      setEmail(data.email);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false); // Tetap set loading false meskipun error
    }
  };


  // Mengambil data pembaca saat komponen di-mount
  useEffect(() => {
    fetchPembaca();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/pembaca', { nama_lengkap, ttl, jenis_kelamin, no_hp, domisili, email });
      console.log(response.data);
      alert('Data berhasil disimpan');
      fetchPembaca(); // Ambil data pembaca setelah berhasil menyimpan
      // Reset form
      setNamaLengkap("");
      setTtl("");
      setJenisKelamin("");
      setNoHp("");
      setDomisili("");
      setEmail("");
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Gagal menyimpan data');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Menampilkan loading selama data diambil
  }

  return (
    <>
      <Navbar2 />
      <div className="mt-24 mb-10 mx-4 md:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left sidebar */}
          <div className="grid grid-rows-2 gap-6 mt-10">
            <div className="text-left border border-gray-100 shadow-md p-4 border-rounded">
              <div className="font-bold">**Pro Tips Saat Melakukan Peminjaman Buku</div>
              <ul className="list-disc pl-5">
                <li>Periksa kondisi buku</li>
                <li>Membaca syarat & ketentuan</li>
                <li>Jaga Kebersihan Buku</li>
                <li>Pinjam buku sesuai kebutuhan</li>
                <li>Hindari meminjam buku terlalu banyak sekaligus</li>
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
                  <a href="/ProfilPembaca">Profil Saya</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#121212">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                  </svg>
                  <a href="/RiwayatPeminjaman">Riwayat Peminjaman Buku</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#121212">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 1l-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z" />
                  </svg>
                  <a href="/AktivitasSaya">Aktivitas Saya</a>
                </li>
              </ul>
              </div>
            </div>
          </div>

          {/* Form data */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <div className="font-bold text-2xl mb-2">Selamat Datang, {nama_lengkap}!</div>
              <div className="text-sm">Ini adalah halaman informasi mengenai profil dan fitur untukmu di website SiPerpus</div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pl-0 md:pl-10 text-left">
              <div className="space-y-2">
                <label htmlFor="nama" className="w-full md:w-2/4 text-sm font-medium">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="w-full border border-gray-300 rounded-md p-2 custom-input"
                  value={nama_lengkap}
                  onChange={(e) => setNamaLengkap(e.target.value)}
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
                    value={ttl}
                    onChange={(e) => setTtl(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="jekel" className="w-full md:w-2/4 text-sm font-medium">
                    Jenis Kelamin
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full border border-gray-300 rounded-md p-2 custom-input"
                    value={jenis_kelamin}
                    onChange={(e) => setJenisKelamin(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Pilih Jenis Kelamin
                    </option>
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
                    value={no_hp}
                    onChange={(e) => setNoHp(e.target.value)}
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
                    value={domisili}
                    onChange={(e) => setDomisili(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="w-full md:w-2/4 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md p-2 custom-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className="space-y-2">
                <label htmlFor="password" className="w-full md:w-2/4 text-sm font-medium">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md p-2 custom-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div> */}
              <div className="w-full text-right mt-6">
                <button type="submit" className="button-primary">Update Profil</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilPembaca;