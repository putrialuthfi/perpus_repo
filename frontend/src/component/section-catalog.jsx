import "/src/App.css"

function SectionCatalog() {
  return (
    <div className="my-10">
      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-20">
        <p className="text-[#333c3f] text-xl md:text-2xl font-bold font-['Source Sans Pro'] mb-2">
          Mau Baca Apa Hari Ini?
        </p>
        <p className="text-base w-full md:w-3/4 font-normal mx-auto">
          Temukan pilihan bacaan yang menarik sesuai minatmu! Dari fiksi, non-fiksi, hingga artikel terbaru—selalu ada sesuatu yang bisa memperkaya harimu. Yuk, jelajahi dan pilih bacaan favoritmu hari ini!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-10 px-4 sm:px-8 md:px-16 lg:px-20">
        {/* 1 */}
        <div className="card-catalog border rounded-2xl h-auto">
          <div className="h-40">
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
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card-catalog border rounded-2xl h-auto">
          <div className="h-40">
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
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card-catalog border rounded-2xl h-auto">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-3.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
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
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="card-catalog border rounded-2xl h-auto">
          <div className="h-40">
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
                Haidar Musyafa
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="card-catalog border rounded-2xl h-auto">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-5.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
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
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div className="card-catalog border rounded-2xl h-auto">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-6.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
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
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
        {/* 7 */}
        <div className="card-catalog border rounded-2xl h-auto">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-7.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
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
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
        {/* 8 */}
        <div className="card-catalog border rounded-2xl h-auto">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-8.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
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
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
        {/* 9 */}
        <div className="card-catalog border rounded-2xl h-auto">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-9.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
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
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div>
        {/* 10 */}
        <div className="card-catalog border rounded-2xl h-auto">
          <div className="h-40">
            <img
              src="../src/assets/img/buku-10.png"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
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
              <button className="bg-[#F9F9F9] text-[#333C3F] font-semibold py-2 px-4 rounded flex items-center justify-center border border-[#2A7C76]">
                <img 
                  src="../src/assets/img/icon-detail.svg" 
                  alt="icon-detail" 
                  className="w-4 h-auto mr-1"
                />
                Detail
              </button>
              <button className="bg-[#27A37F] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center">
                <img 
                  src="../src/assets/img/icon-book-2.svg" 
                  alt="icon-pinjam" 
                  className="w-4 h-auto mr-1"
                />
                Pinjam
              </button>
            </div>
          </div>
        </div> 
      </div>
      <div className="mx-20">
        <div className="flex justify-end items-center text-right">
          <div className="w-full h-1 bg-gray-200"></div>
          <button className="w-1/3 bg-[#2A7C76] text-white py-2 px-4 rounded-lg ml-50 hover:bg-[#27A37F]">
            <a href="">
              Lihat Selengkapnya
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionCatalog;