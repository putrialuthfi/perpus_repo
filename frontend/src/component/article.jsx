import "/src/App.css"
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from "./navbar-2";
import Footer from "./footer";
// import { Navbar } from "@material-tailwind/react";

function Article() {
  return (
    <>
    <Navbar2 />
    <div className="mt-24 mb-10 mx-5 space-y-6 sm:mx-10 md:mx-20 space-y-6">
      
{/* TITLE */}
      <div className="">
        <div className="text-center px-4 sm:px-8 md:px-16 lg:px-20 mb-4">
          <p className="text-[#333c3f] text-xl md:text-2xl font-bold font-['Source Sans Pro']">
            Bacaan Untukmu
          </p>
        </div>
        <marquee behavior="" direction="" className="bg-[#2A7C76] text-white">
            AYO! HADIRI PEMBUKAAN EVENT GEBYAR PARIWISATA DAN EKONOMI KREATIF KABUPATEN BEKASI
        </marquee>
      </div>

{/* Hero Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
{/* Artikel Kanan */}
          <div className="banner-hero-article col-span-2 mb-4"></div>
{/* Artikel Kiri */}
          <div className=" grid grid-rows-4 gap-2">
{/* artikel 1 */}
          <Link className="pointer">
            <div className="mini-card-article py-2">
              <div className="flex items-center lg:justify-center">
                <img src="../src/assets/img/img-hero-art-1.png" alt="" className="w-20 h-auto"/>
                <div className="px-6 text-sm">
                  Pekan Kreasi Daerah Hadir Lagi! Catat Tanggalnya!
                  <p className="text-xs font-bold my-2">08 Sep 2024 | Sendy Sandhika</p>
                </div>
              </div>
            </div>
          </Link>
{/* artikel 2 */}
          <Link className="pointer">
            <div className="mini-card-article py-2">
              <div className="flex items-center lg:justify-center">
                <img src="../src/assets/img/img-hero-art-2.png" alt="" className="w-20 h-auto"/>
                <div className="px-6 text-sm">
                  Pasar Buah Promo! Sudah Berkunjung?
                  <p className="text-xs font-bold my-2">09 Sep 2024 | Ani Natalia</p>
                </div>
              </div>
            </div>
          </Link>
{/* artikel 3 */}
          <Link className="pointer">
            <div className="mini-card-article py-2">
              <div className="flex items-center items-center lg:justify-center">
                <img src="../src/assets/img/img-hero-art-3.png" alt="" className="w-20 h-auto "/>
                <div className="px-6 text-sm">
                  5 Taman Asri Penyejuk Mata dan Ramah Anak
                  <p className="text-xs font-bold my-2">11 Sep 2024 | Gio Raharjo</p>
                </div>
              </div>
            </div>
          </Link>
{/* artikel 4 */}
<Link className="pointer">
            <div className="mini-card-article py-2">
              <div className="flex items-center items-center lg:justify-center">
                <img src="../src/assets/img/img-hero-art-4.png" alt="" className="w-20 h-auto "/>
                <div className="px-6 text-sm">
                  Cuci Gudang Penerbit Republika, Semua Buku Diskon!
                  <p className="text-xs font-bold my-2">14 Sep 2024 | Jauhari Amdiyanto</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
 {/*ROW 2  */}
      <div className="">
        <div className="flex justify-end items-center text-right">
            <div className="text-left w-1/3 text-lg font-bold text-[#2A7C76]">
              TOP TRENDING HARI INI
            </div>
          <div className="w-full h-1 bg-gray-200"></div>
        </div>
      </div>
{/* ROW 3 */}
      <div className="space-y-10">
{/* Artikel Baris Atas */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-4">
{/* Artikel-1 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="
                  https://plus.unsplash.com/premium_photo-1673639729701-c903b5d2be4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFtZXJpa2F8ZW58MHx8MHx8fDA%3D"
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
                  src="https://plus.unsplash.com/premium_photo-1661779586447-fd6f64c795b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHJlYWRpbmclMjBib29rfGVufDB8fDB8fHww"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                RIP Buku, Kenapa Orang Tidak Lagi Baca Buku?  
                </div>
              </div>
          </Link>
        </div> 
{/* Artikel-3 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://images.unsplash.com/photo-1708831736377-9387cd8dec1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFsdGV8ZW58MHx8MHx8fDA%3D"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                Pinjam Buku di Halte, Sebuah Ulasan  
                </div>
              </div>
          </Link>
        </div> 
{/* Artikel-4 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNpbmVtYXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                Ternyata Kita Lebih Suka Menonton, Apa Alasannya? 
                </div>
              </div>
          </Link>
        </div>
{/* Artikel-5 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://images.unsplash.com/photo-1616628188467-8fb29f49bbe8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d3JpdGV8ZW58MHx8MHx8fDA%3D"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                Tips Ampuh Meningkatkan Keterampilan Menulis  
                </div>
              </div>
          </Link>
        </div>
{/* Artikel-6 */}
<div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://images.unsplash.com/photo-1582079767878-082f4300d386?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                5 Manfaat Membaca Buku Nonfiksi 
                </div>
              </div>
          </Link>
        </div>
{/* Artikel-7 */}
<div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://plus.unsplash.com/premium_photo-1672292536199-7a4cf2b78318?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                Manfaat Membaca Buku dan Kesehatan Mental
                </div>
              </div>
          </Link>
        </div>
{/* Artikel-6 */}
<div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683535508596-9216de2ad64b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlibGlvZ3JhcGh5fGVufDB8fDB8fHww"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                9 Julukan Bagi Penggemar Buku, Kamu yang Mana?
                </div>
              </div>
          </Link>
        </div>
{/* Artikel-7 */}
<div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMHdyaXRlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                Langkah-Langkah Menjadi Penulis Buku
                </div>
              </div>
          </Link>
        </div>
        </div>   

{/* Update Terbaru */}
 {/*ROW 4  */}
        <div className="flex justify-end items-center text-right">
            <div className="text-left text-lg font-bold w-1/5 text-[#2A7C76]">
              UPDATE TERBARU
            </div>
          <div className="w-full h-1 bg-gray-200"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{/* Artikel-1 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                    Kopi dan Buku: Mengapa Begitu Lekat?
                </div>
              </div>
          </Link>
        </div> 
{/* Artikel-6 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                    Ajak Anak Membaca Sejak Dini, Adakah Manfaatnya?
                </div>
              </div>
          </Link>
        </div> 
{/* Artikel-7 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://images.pexels.com/photos/1059380/pexels-photo-1059380.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                    Mengapa Nulis Jurnal di Buku Fisik Terasa Lebih Asik?  
                </div>
              </div>
          </Link>
        </div> 
{/* Artikel-8 */}
        <div className="card-article">
          <Link to="/">
              <div className="h-40">
                <img
                  src="https://images.pexels.com/photos/28894564/pexels-photo-28894564/free-photo-of-suasana-membaca-yang-nyaman-dengan-buku-terbuka-dan-lilin.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="card-image"
                  className="img-card-article"
                />
              </div>
              <div className="py-4 px-3 text-left">
                <div className="text-sm">
                    07 Okt 2024 | 09:24
                </div>
                <div className="text-base font-bold text-align-justify">
                    Ide Pembatas Buku Ala Kreasi Sendiri  
                </div>
              </div>
          </Link>
        </div>
        </div>   
        <Link className="w-full">
          <div className="flex mx-auto my-10 button-primary
          lg:w-1/3 sm:2/3 justify-center items-center">
            Baca artikel lainnya 
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F2F2F2"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
          </div>
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Article;