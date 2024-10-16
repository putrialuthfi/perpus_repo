import React, { useState } from 'react';

function FormPinjamBuku() {
  // State untuk menyimpan input tanggal dan kode buku
  const [kodeBuku, setKodeBuku] = useState('');
  const [judulBuku, setJudulBuku] = useState('');
  const [tglPeminjaman, setTglPeminjaman] = useState('');
  const [tglPengembalian, setTglPengembalian] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data yang akan dikirim ke backend
    const formDataPinjamBuku = {
      kodeBuku,
      judulBuku,
      tglPeminjaman,
      tglPengembalian,
    };

    console.log('Data yang akan dikirim:', formDataPinjamBuku);

    try {
      const response = await fetch('https://example.com/api/pinjam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataPinjamBuku),
      });

      if (response.ok) {
        console.log('Data berhasil disimpan!');
      } else {
        console.error('Gagal menyimpan data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-3xl mx-4 sm:mx-0">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Form Row: Kode Buku */}
          <div className="mb-4 flex items-center">
            <label className="w-1/3 text-gray-700 text-sm font-bold text-left">Kode Buku</label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Masukan Kode Buku yang Anda Pinjam"
              value={kodeBuku}
              onChange={(e) => setKodeBuku(e.target.value)}
            />
          </div>

          {/* Form Row: Judul Buku */}
          <div className="mb-4 flex items-center">
            <label className="w-1/3 text-gray-700 text-sm font-bold text-left">Kode Buku</label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Masukan Judul Buku yang Anda Pinjam"
              value={judulBuku}
              onChange={(e) => setJudulBuku(e.target.value)}
            />
          </div>

          {/* Form Row: Tgl Peminjaman */}
          <div className="mb-4 flex items-center">
            <label className="w-1/3 text-gray-700 text-sm font-bold text-left">Tgl Peminjaman</label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              value={tglPeminjaman}
              onChange={(e) => setTglPeminjaman(e.target.value)}
            />
          </div>

          {/* Form Row: Tgl Pengembalian */}
          <div className="mb-4 flex items-center">
            <label className="w-1/3 text-gray-700 text-sm font-bold text-left">Tgl Pengembalian</label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              value={tglPengembalian}
              onChange={(e) => setTglPengembalian(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button
              className="bg-[#2A7C76] hover:bg-[#27A37F] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Pinjam Buku
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPinjamBuku;
