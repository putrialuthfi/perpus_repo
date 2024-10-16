import "/src/App.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SectionCatalog() {
  return (
    <>
    <div className="mt-24 mb-10">
      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-20">
        <p className="text-[#333c3f] text-xl md:text-2xl font-bold font-['Source Sans Pro'] mb-2">
          Mau Baca Apa Hari Ini?
        </p>
        <p className="text-base w-full md:w-3/4 font-normal mx-auto">
          Temukan pilihan bacaan yang menarik sesuai minatmu! Dari fiksi, non-fiksi, hingga artikel terbaru—selalu ada sesuatu yang bisa memperkaya harimu. Yuk, jelajahi dan pilih bacaan favoritmu hari ini!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 my-10 px-4 sm:px-8 md:px-16 lg:px-20">
{/* Buku-1 */}
        <div className="card-catalog-1 ">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-1.png"
              alt="card-image"
              className="img-card-catalog"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Sejarah Agama Manusia  
            </div>
            <div className="text-sm">
              Mohammad Zazuli
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
            <Link to="/LamanCatalog2">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
            </Link>
            <Link to="/FormPinjamBuku">
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </Link>
            </div>
          </div>
        </div>        
{/* Buku 2 */}
        <div className="card-catalog-1">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-2.png"
              alt="card-image"
              className="img-card-catalog"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Pendidikan Agama Islam  
            </div>
            <div className="text-sm">
              KEMENDIKBUD
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <Link to="/LamanCatalog2">
                <button className="button-detail">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#121212"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                Detail
                </button>
              </Link>
              <Link to="/FormPinjamBuku">
                <button className="button-pinjam">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F2F2F2"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>
                <p className="ml-1">Pinjam</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
{/* Buku-3 */}
        <div className="card-catalog-1">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-3.png"
              alt="card-image"
              className="img-card-catalog"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Kisah, Perjuangan & Inspirasi B.J. Habibie  
            </div>
            <div className="text-sm">
              Weda S. Atma
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <Link to="/LamanCatalog2">
                <button className="button-detail">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#121212"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                Detail
                </button>
              </Link>
              <Link to="/FormPinjamBuku">
                <button className="button-pinjam">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F2F2F2"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>
                <p className="ml-1">Pinjam</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
{/* Buku-4 */}
        <div className="card-catalog-1">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-4.png"
              alt="card-image"
              className="img-card-catalog"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Novel Biografi Buya Hamka  
            </div>
            <div className="text-sm">
              Haidar Musyafa
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <Link to="/LamanCatalog2">
                <button className="button-detail">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#121212"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                Detail
                </button>
              </Link>
              <Link to="/FormPinjamBuku">
                <button className="button-pinjam">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F2F2F2"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>
                <p className="ml-1">Pinjam</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
{/* Buku-5 */}
        <div className="card-catalog-1">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-5.png"
              alt="card-image"
              className="img-card-catalog"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Menjadi Dewasa Tanpa Tahu Apa-Apa  
            </div>
            <div className="text-sm">
              Ulnyangyi
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <Link to="/LamanCatalog2">
                <button className="button-detail">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#121212"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                Detail
                </button>
              </Link>
              <Link to="/FormPinjamBuku">
                <button className="button-pinjam">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F2F2F2"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>
                <p className="ml-1">Pinjam</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
{/* Buku-6 */}
        <div className="card-catalog-1">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-6.png"
              alt="card-image"
              className="img-card-catalog"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Novel: <br />Lost Connections  
            </div>
            <div className="text-sm">
              Johann Hari
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <Link to="/LamanCatalog2">
                <button className="button-detail">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#121212"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                Detail
                </button>
              </Link>
              <Link to="/FormPinjamBuku">
                <button className="button-pinjam">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F2F2F2"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>
                <p className="ml-1">Pinjam</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
{/* Buku-7 */}
        <div className="card-catalog-1">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-7.png"
              alt="card-image"
              className="img-card-catalog"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Seorang Pria Yang Melalui Duka  
            </div>
            <div className="text-sm">
              dr. Andreas Kurniawan
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <Link to="/LamanCatalog2">
                <button className="button-detail">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#121212"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                Detail
                </button>
              </Link>
              <Link to="/FormPinjamBuku">
                <button className="button-pinjam">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F2F2F2"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>
                <p className="ml-1">Pinjam</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
{/* Buku-8*/}
        <div className="card-catalog-1">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-8.png"
              alt="card-image"
              className="img-card-catalog"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Buku <br />Brain Power   
            </div>
            <div className="text-sm">
              Catherine De Lange
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <Link to="/LamanCatalog2">
                <button className="button-detail">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#121212"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                Detail
                </button>
              </Link>
              <Link to="/FormPinjamBuku">
                <button className="button-pinjam">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F2F2F2"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>
                <p className="ml-1">Pinjam</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
{/* Buku-9 */}
        <div className="card-catalog-1">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-9.png"
              alt="card-image"
              className="img-card-catalog"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Beautiful World Where Are You  
            </div>
            <div className="text-sm">
              Sally Rooney
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <Link to="/LamanCatalog2">
                <button className="button-detail">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#121212"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                Detail
                </button>
              </Link>
              <Link to="/FormPinjamBuku">
                <button className="button-pinjam">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F2F2F2"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>
                <p className="ml-1">Pinjam</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
{/* Buku-10 */}
        <div className="card-catalog-1">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-10.png"
              alt="card-image"
              className="img-card-catalog"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Novel: <br />Summer In Seoul  
            </div>
            <div className="text-sm">
              Ilana Tan
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <Link to="/LamanCatalog2">
                <button className="button-detail">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#121212"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                Detail
                </button>
              </Link>
              <Link to="/FormPinjamBuku">
                <button className="button-pinjam">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F2F2F2"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>
                <p className="ml-1">Pinjam</p>
                </button>
              </Link>
            </div>
          </div>
        </div>

 {/*Button  */}
      </div>
      <div className="mx-5 sm:mx-20">
        <div className="flex justify-end items-center text-right">
          <div className="w-full h-1 bg-gray-200"></div>
          <button className="w-2/3 sm:w-1/3 button-primary">
            <a href="/LamanCatalog1">
              Lihat Selengkapnya
            </a>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default SectionCatalog;