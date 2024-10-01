import "/src/App.css"

function SectionCatalog() {
  return (
    <div className="my-8">
      <div className="grid grid-cols-2 gap-4 px-20">
        <div className="text-left">
          <p className="text-[#333c3f] text-xl md:text-2xl font-bold font-['Source Sans Pro'] mb-2">
            Mau Baca Apa Hari Ini?
          </p>
          <p className="text-base w-full font-normal">
            Temukan pilihan bacaan yang menarik sesuai minatmu! Dari fiksi, non-fiksi, hingga artikel terbaru—selalu ada sesuatu yang bisa memperkaya harimu. Yuk, jelajahi dan pilih bacaan favoritmu hari ini!
          </p>
        </div>
        <div className="text-right">
          <img src="" alt="search bar" />
          <button className="mt-10 px-4 py-2 border rounded-xl">
            Lihat Selengkapnya
          </button>
        </div>
      </div>

    <div className="grid grid-cols-5 gap-6 my-10 px-20">
{/* 1 */}
        <div className="card-catalog border rounded-2xl h-26">
          <div className="h-30">
            <img
              src="../src/assets/img/buku-1.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
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
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex flex-items items-center justify-center border border-[#2A7C76] rounded-lg">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex flex-items items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>

{/* 2 */}
        <div className="card-catalog border rounded-2xl h-26">
          <div className="h-30">
            <img
              src="../src/assets/img/buku-2.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Pendidikan Agama Islam  
            </div>
            <div className="text-sm">
              Kemendikbud
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex flex-items items-center justify-center border border-[#2A7C76] rounded-lg">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex flex-items items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>

{/* 3 */}
        <div className="card-catalog border rounded-2xl h-26">
          <div className="h-30">
            <img
              src="../src/assets/img/buku-3.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Kisah, Perjuangan, Inspirasi, B.J. Habibie
            </div>
            <div className="text-sm">
              Weda S. Atma
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex flex-items items-center justify-center border border-[#2A7C76] rounded-lg">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex flex-items items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>

{/* 4 */}
        <div className="card-catalog border rounded-2xl h-26">
          <div className="h-30">
            <img
              src="../src/assets/img/buku-4.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Novel Biografi Buya Hamka  
            </div>
            <div className="text-sm">
              Ahmad Syafii Maarif
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex flex-items items-center justify-center border border-[#2A7C76] rounded-lg">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex flex-items items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
        
{/* 5 */}
      <div className="card-catalog border rounded-2xl h-26">
          <div className="h-30">
            <img
              src="../src/assets/img/buku-5.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold">
              Menjadi Dewasa Tanpa Tahu Apa-Apa  
            </div>
            <div className="text-sm">
              Ulnyangnyi
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex flex-items items-center justify-center border border-[#2A7C76] rounded-lg">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex flex-items items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
{/* 6 */}
        <div className="card-catalog border rounded-2xl h-26">
          <div className="h-30">
            <img
              src="../src/assets/img/buku-6.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Lost Connections: Penyebab Depresi
            </div>
            <div className="text-sm">
              Johann Hari
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex flex-items items-center justify-center border border-[#2A7C76] rounded-lg">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex flex-items items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
{/* 7 */}
        <div className="card-catalog border rounded-2xl h-26">
          <div className="h-30">
            <img
              src="../src/assets/img/buku-7.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Seorang Pria yang Melalui Duka          
            </div>
            <div className="text-sm">
              dr. Andreas Kurniawan
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex flex-items items-center justify-center border border-[#2A7C76] rounded-lg">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex flex-items items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
{/* 8 */}
        <div className="card-catalog border rounded-2xl h-26">
          <div className="h-30">
            <img
              src="../src/assets/img/buku-8.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Semua Hal yang Perlu Anda Ketahui  
            </div>
            <div className="text-sm">
              Catherine de Lange
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex flex-items items-center justify-center border border-[#2A7C76] rounded-lg">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex flex-items items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
{/* 9 */}
        <div className="card-catalog border rounded-2xl h-26">
          <div className="h-30">
            <img
              src="../src/assets/img/buku-9.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
              Beautiful World, Where are You  
            </div>
            <div className="text-sm">
              Sally Rooney
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex flex-items items-center justify-center border border-[#2A7C76] rounded-lg">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex flex-items items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
{/* 10 */}
        <div className="card-catalog border rounded-2xl h-26">
          <div className="h-30">
            <img
              src="../src/assets/img/buku-10.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="py-4 px-3">
            <div className="text-base font-bold ">
                MetroPop: Summer in Seoul 
            </div>
            <div className="text-sm">
              Ilana Tan
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex flex-items items-center justify-center border border-[#2A7C76] rounded-lg">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex flex-items items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1 mt-0.5"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
    </div>
    {/* <button className="bg-[#2A7C76] text-white font-semibold py-2 px-4 rounded flex flex-items mx-auto items-center justify-center rounded-xl">
        <p className="text-left">Lihat Selengkapnya</p>
        <img src="../src/assets/img/arrow-1.svg" alt="" className="w-6 mt-1 ml-2"/>
    </button> */}
    </div>
  );
}

export default SectionCatalog;
