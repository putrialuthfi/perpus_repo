import "/src/App.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LamanCatalog2 from "./laman-catalog-2";
import FormPinjamBuku from "./form-pinjambuku";
import { Carousel, Typography, Button } from "@material-tailwind/react";

function Article() {
  return (
    <div className="my-10 mx-20 border border-red-500">
      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-20">
        <p className="text-[#333c3f] text-xl md:text-2xl font-bold font-['Source Sans Pro'] mb-6">
          Bacaan Untukmu
        </p>
        {/* <p className="text-base w-full md:w-3/4 font-normal mx-auto">
          Temukan pilihan bacaan yang menarik sesuai minatmu! Dari fiksi, non-fiksi, hingga artikel terbaru—selalu ada sesuatu yang bisa memperkaya harimu. Yuk, jelajahi dan pilih bacaan favoritmu hari ini!
        </p> */}
      </div>

{/* NANTI BIKIN ROOT MARGIN X 20 */}

{/* ROW 1 */}
        <div className="grid-cols-3 gap-10 flex">
          <div className="w-2/3 border border-purple-500 banner-hero-article"></div>
{/* artikel row kanan */}
          <div className="w-1/3 grid grid-rows-4 gap-2">
{/* artikel 1 */}
          <Link className="pointer">
            <div className=" flex text-justify border shadow-sm rounded-lg">
              <img src="../src/assets/img/buku-1.png" alt="" className="w-20 h-auto rounded-tl-lg rounded-bl-lg"/>
              <div className="px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam!
              </div>
            </div>
          </Link>
            <div className="flex text-justify space-x-6">
              <img src="../src/assets/img/buku-1.png" alt="" className="w-20 h-auto"/>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam!
              </div>
            </div>
            <div className="flex text-justify space-x-6">
              <img src="../src/assets/img/buku-1.png" alt="" className="w-20 h-auto"/>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam!
              </div>
            </div>
            <div className="flex text-justify space-x-6">
              <img src="../src/assets/img/buku-1.png" alt="" className="w-20 h-auto"/>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam!
              </div>
            </div>
            <div className="flex justify-end">
              <Link className="w-2/3 flex justify-end">
                Baca Selengkapnya 
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#121212" opacity="60%"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
              </Link>
            </div>
          </div>
        </div>

      
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 my-10 px-6 sm:px-8 md:px-16">


{/* ROW 2 */}
{/* Artikel-1 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="../src/assets/img/buku-1.png"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                    Amerika Serikat Memperingati Hari Baca  
                </div>
              </div>
          </Link>
        </div> 
{/* Artikel-2 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="../src/assets/img/buku-1.png"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                    Amerika Serikat Memperingati Hari Baca  
                </div>
              </div>
          </Link>
        </div> 
{/* Artikel-3 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="../src/assets/img/buku-1.png"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                    Amerika Serikat Memperingati Hari Baca  
                </div>
              </div>
          </Link>
        </div> 
{/* Artikel-4 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="../src/assets/img/buku-1.png"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                    Amerika Serikat Memperingati Hari Baca  
                </div>
              </div>
          </Link>
        </div>    
      </div>
 {/*ROW 2  */}
      <div className="">
        <div className="flex justify-end items-center">
          <div className="text-base font-bold text-left w-auto mr-4">
            TOP TRENDING HARI INI
          </div>
          <div className="w-4/5 h-1 bg-gray-200"></div>
        </div>
      </div>
{/* ROW 3 */}
    </div>
  );
}

export default Article;