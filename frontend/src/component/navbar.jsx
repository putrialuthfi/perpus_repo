import React, { useState } from 'react';
// import logo from '../assets/logo.png';  

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-teal-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="../src/assets/img/logo-1.png" alt="Logo" className="w-12 h-12 mr-4" />
          <img src="../src/assets/img/logo-2.png" alt="Logo" className="w-12 h-12" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white hover:text-teal-200">Beranda</a>
          <div className="relative group">
            <button className="text-white hover:text-teal-200">Kategori</button>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded mt-2 p-2 grid grid-cols-3 gap-2">
              <a href="#action1" className="block px-4 py-2 hover:bg-teal-100">Agama</a>
              <a href="#action2" className="block px-4 py-2 hover:bg-teal-100">Biografi</a>
              <a href="#action2" className="block px-4 py-2 hover:bg-teal-100">Fiksi</a>
              <a href="#action2" className="block px-4 py-2 hover:bg-teal-100">Filsafat</a>
              <a href="#action2" className="block px-4 py-2 hover:bg-teal-100">Hukum</a>
              <a href="#action2" className="block px-4 py-2 hover:bg-teal-100">NonFiksi</a>
            </div>
          </div>
          <a href="#about" className="text-white hover:text-teal-200">Artikel</a>
          <a href="#home" className="text-white hover:text-teal-200">Tentang Kami</a>
          <div className="relative group">
            <button className="text-white hover:text-teal-200">Masuk ke Akun</button>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded mt-2">
              <a href="#action3" className="block px-4 py-2 hover:bg-teal-100">Admin</a>
              <a href="#action4" className="block px-4 py-2 hover:bg-teal-100">Pembaca</a>
            </div>
          </div>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Menu Responsif */}
      {isOpen && (
        <div className="md:hidden bg-teal-600 p-4">
          <a href="#home" className="block text-white hover:text-teal-200">Home</a>
          <div className="relative group">
            <button className="block w-full text-left text-white hover:text-teal-200">Dropdown 1</button>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded mt-2">
              <a href="#action1" className="block px-4 py-2 hover:bg-teal-100">Action 1</a>
              <a href="#action2" className="block px-4 py-2 hover:bg-teal-100">Action 2</a>
            </div>
          </div>
          <a href="#about" className="block text-white hover:text-teal-200">About</a>
          <div className="relative group">
            <button className="block w-full text-left text-white hover:text-teal-200">Dropdown 2</button>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded mt-2">
              <a href="#action3" className="block px-4 py-2 hover:bg-teal-100">Action 3</a>
              <a href="#action4" className="block px-4 py-2 hover:bg-teal-100">Action 4</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
