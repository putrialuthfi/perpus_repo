import "/src/App.css"
import React from 'react';
import { Link } from 'react-router-dom';

function Article() {
  return (
    <div className="my-10 mx-20 space-y-6">
      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-20">
        <p className="text-[#333c3f] text-xl md:text-2xl font-bold font-['Source Sans Pro']">
          Bacaan Untukmu
        </p>
      </div>
      <marquee behavior="" direction="" className="bg-[#2A7C76] text-white">
          AYO! HADIRI PEMBUKAAN EVENT GEBYAR PARIWISATA DAN EKONOMI KREATIF KABUPATEN BEKASI
      </marquee>

{/* ROW 1 */}
        <div className="grid-cols-3 gap-10 flex">
          <div className="w-2/3 banner-hero-article"></div>
{/* artikel row kanan */}
          <div className="w-1/3 grid grid-rows-4">
{/* artikel 1 */}
          <Link className="pointer">
            <div className="mini-card-article py-2">
              <div className="flex justify-center items-center">
                <img src="../src/assets/img/buku-1.png" alt="" className="w-20 h-auto "/>
                <div className="px-6 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <p className="text-xs font-bold my-2">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </Link>
{/* artikel 2 */}
          <Link className="pointer">
            <div className="mini-card-article py-2">
              <div className="flex justify-center items-center">
                <img src="../src/assets/img/buku-1.png" alt="" className="w-20 h-auto "/>
                <div className="px-6 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <p className="text-xs font-bold my-2">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </Link>
{/* artikel 3 */}
          <Link className="pointer">
            <div className="mini-card-article py-2">
              <div className="flex justify-center items-center">
                <img src="../src/assets/img/buku-1.png" alt="" className="w-20 h-auto "/>
                <div className="px-6 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <p className="text-xs font-bold my-2">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </Link>
{/* artikel 4 */}
          <Link className="pointer">
            <div className="mini-card-article py-2">
              <div className="flex justify-center items-center">
                <img src="../src/assets/img/buku-1.png" alt="" className="w-20 h-auto "/>
                <div className="px-6 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <p className="text-xs font-bold my-2">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
 {/*ROW 2  */}
      <div className="">
        <div className="flex justify-end items-center">
          <div className="text-base font-semibold text-left w-auto mr-6">
            TOP TRENDING HARI INI
          </div>
          <div className="w-4/5 h-1 bg-gray-200"></div>
        </div>
      </div>

{/* ROW 3 */}
      <div className="">
{/* Artikel Baris Atas */}
        <div className="grid grid-cols-4 gap-4">
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


{/* Artikel Baris Bawah */}
        <div className="grid grid-cols-4 gap-4 my-10">
{/* Artikel-5 */}
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
{/* Artikel-6 */}
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
{/* Artikel-7 */}
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
{/* Artikel-8 */}
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
        <Link className="w-full">
          <div className="flex mx-auto button-primary w-1/3 justify-center items-center">
            Baca artikel lainnya 
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F2F2F2"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Article;