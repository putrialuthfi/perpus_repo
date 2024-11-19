import "/src/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function RegisAdmin() {
  // State untuk setiap input
  const [nama_lengkap, setNamaLengkap] = useState("");
  const [ttl, setTtl] = useState("");
  const [jenis_kelamin, setJenisKelamin] = useState("");
  const [no_hp, setNoHp] = useState("");
  const [domisili, setDomisili] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

// Fungsi untuk mengambil data pengguna dari API  
  const fetchAdmin = async () => {
    try {
      const response = await axios.get('http://localhost:3000/admin');
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
    }
  };

  // Mengambil data admin saat komponen di-mount
  useEffect(() => {
    fetchAdmin();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/admin', { nama_lengkap, ttl, jenis_kelamin, no_hp, domisili, email });
      console.log(response.data);
      alert('Data berhasil disimpan');
      fetchAdmin(); // Ambil data admin setelah berhasil menyimpan
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

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
        <div className="w-full h-1/2 md:h-full bg-[url('../src/assets/img/img-login-1.jpg')] bg-cover bg-center">
        </div>
        <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-md px-4">
                <form onSubmit={handleSubmit} className="py-4">
                    <div className="mb-8">
                        <b className="text-[#2A7C76] text-2xl">Mendaftar Akun</b>
                        <h4 className="text-sm mt-2">Silakan mendaftar akun untuk mendapatkan layanan menarik yang hanya bisa diakses oleh pengguna</h4>
                    </div>
                    <div className="mb-6">
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" 
                        type="text" 
                        placeholder="Nama Lengkap" 
                        value={nama_lengkap}
                        onChange={(e) => setNamaLengkap(e.target.value)}
                        />
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="ttl" 
                        type="date" 
                        placeholder="Tanggal Lahir" 
                        value={ttl}
                        onChange={(e) => setTtl(e.target.value)}
                        />
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="gender"
                        value={jenis_kelamin}
                        onChange={(e) => setJenisKelamin(e.target.value)}
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                      <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="no_hp" 
                        type="text" 
                        placeholder="No Hp" 
                        value={no_hp}
                        onChange={(e) => setNoHp(e.target.value)}
                        />
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="domisili" 
                        type="text" 
                        placeholder="Domisili" 
                        value={domisili}
                        onChange={(e) => setDomisili(e.target.value)}
                        />
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        type="text" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <button className="w-full bg-[#2A7C76] text-white font-bold py-2 px-3 mb-3 rounded" type="submit">
                            Daftar
                        </button>
                        <p className="text-sm">Sudah punya akun? <a href="/LoginAdmin" className="underline">Masuk ke akun disini</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default RegisAdmin;