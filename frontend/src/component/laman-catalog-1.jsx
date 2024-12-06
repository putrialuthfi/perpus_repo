import "/src/App.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LamanCatalog0 from "./laman-catalog-0";
import FormPinjamBuku from "./form-pinjambuku";
import Navbar2 from "./navbar-2";
import Footer from "./footer";

function LamanCatalog1() {
  return (
    <>
    <Navbar2 />
    <div className="text-center sm:px-8 md:px-16 lg:px-20 mt-24">
        <p className="text-[#333c3f] text-xl md:text-2xl font-bold font-['Source Sans Pro'] mb-2">
          Mau Baca Apa Hari Ini?
        </p>
        <p className="text-base w-full md:w-3/4 font-normal mx-auto">
          Temukan pilihan bacaan yang menarik sesuai minatmu! Dari fiksi, non-fiksi, hingga artikel terbaru—selalu ada sesuatu yang bisa memperkaya harimu. Yuk, jelajahi dan pilih bacaan favoritmu hari ini!
        </p>
      </div>
    <LamanCatalog0 />
    <LamanCatalog0 />
    <LamanCatalog0 />
    {/* <div className="mt-5 mb-10 sm:mx-20">
        <div className="flex justify-end items-center text-right">
          <div className="w-full h-1 bg-gray-200"></div>
          <button className="w-2/3 sm:w-1/3 button-primary">
            <a href="/LamanCatalog1">
              Lihat Selengkapnya
            </a>
          </button>
        </div>
      </div> */}
    <Footer />
    </>
  );
}

export default LamanCatalog1;