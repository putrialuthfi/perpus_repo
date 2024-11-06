import React, { useState, useEffect, useRef } from 'react';
import "/src/App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Untuk dropdown di desktop (Kategori)
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false); // Untuk dropdown di sidebar (Kategori)
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false); // Untuk dropdown "Masuk ke Akun" di desktop
  const [isSidebarAccountDropdownOpen, setIsSidebarAccountDropdownOpen] = useState(false); // Untuk dropdown "Masuk ke Akun" di sidebar
  const dropdownRef = useRef(null); // Ref untuk dropdown kategori
  const accountDropdownRef = useRef(null); // Ref untuk dropdown "Masuk ke Akun"

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown di desktop (Kategori)
  };

  const toggleSidebarDropdown = () => {
    setIsSidebarDropdownOpen(!isSidebarDropdownOpen); // Toggle dropdown di sidebar (Kategori)
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen); // Toggle dropdown di desktop (Masuk ke Akun)
  };

  const toggleSidebarAccountDropdown = () => {
    setIsSidebarAccountDropdownOpen(!isSidebarAccountDropdownOpen); // Toggle dropdown di sidebar (Masuk ke Akun)
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const closeDropdown = (event) => {
    // Check if the click was outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    // Check if the click was outside the account dropdown
    if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
      setIsAccountDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', closeDropdown); // Add event listener for clicks
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', closeDropdown); // Cleanup event listener on unmount
    };
  }, []);

  return (
    <nav
      className={`navbar ${scrolling ? 'bg-green' : 'bg-transparent'} fixed top-0 left-0 w-full z-10 transition-all duration-300`}
      style={scrolling ? { backgroundColor: 'rgba(42, 124, 118, 0.5)' } : {}}
    >
      <div className="container py-3 mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="flex items-center">
          <img src="../src/assets/img/logo-1.png" alt="Logo-1" className="w-12 h-12 mr-4" />
          <img src="../src/assets/img/logo-2.png" alt="Logo-2" className="w-12 h-12" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/Beranda" className="text-white hover:text-teal-200">Beranda</a>
          <div className="relative" ref={dropdownRef}> {/* Add ref to the dropdown */}
            <button onClick={toggleDropdown} className="text-white hover:text-teal-200">Kategori</button>
            {isDropdownOpen && (
              <div className="absolute bg-white text-black shadow-lg rounded mt-2 gap-2 text-left">
                <a href="#action1" className="block px-4 py-2 hover:bg-teal-100 rounded">Agama</a>
                <a href="#action2" className="block px-4 py-2 hover:bg-teal-100 rounded">Biografi</a>
                <a href="#action3" className="block px-4 py-2 hover:bg-teal-100 rounded">Fiksi</a>
                <a href="#action4" className="block px-4 py-2 hover:bg-teal-100 rounded">Filsafat</a>
                <a href="#action5" className="block px-4 py-2 hover:bg-teal-100 rounded">Hukum</a>
                <a href="#action6" className="block px-4 py-2 hover:bg-teal-100 rounded">Nonfiksi</a>
              </div>
            )}
          </div>
          {/* <Link className="text-white hover:text-teal-200">Artikel</Link> */}
          <a href="/article" className="text-white hover:text-teal-200">Artikel</a>
          <a href="/tentangkami" className="text-white hover:text-teal-200">Tentang Kami</a>
          <div className="relative" ref={accountDropdownRef}> {/* Add ref to the account dropdown */}
            <button onClick={toggleAccountDropdown} className="text-white hover:text-teal-200">Masuk ke Akun</button>
            {isAccountDropdownOpen && (
              <div className="absolute bg-white text-black shadow-lg rounded mt-2 text-left">
                <a href="/LoginAdmin" className="block px-4 py-2 hover:bg-teal-100 rounded">Admin</a>
                <a href="/LoginPembaca" className="block px-4 py-2 hover:bg-teal-100 rounded">Pembaca</a>
              </div>
            )}
          </div>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Sidebar Responsif */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-teal-600 p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full opacity-0'}`}>
        <button onClick={toggleMenu} className="text-white float-right mb-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <br />
        <br />
        <div>
          <ul className='flex flex-col items-start text-white space-y-4'>
            <li><a href="/Beranda">Beranda</a></li>
            <li>
              <button onClick={toggleSidebarDropdown} className="flex items-center justify-between w-full">
                Kategori
                <svg className={`w-4 h-4 ml-2 transform ${isSidebarDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSidebarDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-2 flex flex-col items-start">
                  <li><a href="#action1" className="block hover:bg-teal-700 px-2 py-1">Agama</a></li>
                  <li><a href="#action2" className="block hover:bg-teal-700 px-2 py-1">Biografi</a></li>
                  <li><a href="#action3" className="block hover:bg-teal-700 px-2 py-1">Fiksi</a></li>
                  <li><a href="#action4" className="block hover:bg-teal-700 px-2 py-1">Filsafat</a></li>
                  <li><a href="#action5" className="block hover:bg-teal-700 px-2 py-1">Hukum</a></li>
                  <li><a href="#action6" className="block hover:bg-teal-700 px-2 py-1">NonFiksi</a></li>
                </ul>
              )}
            </li>
            <li><a href="/article">Artikel</a></li>
            <li><a href="/tentangkami">Tentang Kami</a></li>
            <li>
              <button onClick={toggleSidebarAccountDropdown} className="flex items-center justify-between w-full">
                Masuk ke Akun
                <svg className={`w-4 h-4 ml-2 transform ${isSidebarAccountDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSidebarAccountDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-2 flex flex-col items-start">
                  <li><a href="/LoginAdmin" className="block hover:bg-teal-700 px-2 py-1">Admin</a></li>
                  <li><a href="/LoginPembaca" className="block hover:bg-teal-700 px-2 py-1">Pembaca</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;