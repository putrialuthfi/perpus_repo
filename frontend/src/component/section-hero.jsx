import "/src/App.css";

function Hero() {
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center" 
      style={{ 
        backgroundImage: 'url("../src/assets/img/img-hero-2.png")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="grid grid-cols-3 absolute top-25 w-2/3 text-left bg-cover bg-center text-white justify-center md:mt-10">
        {/* Text Hero */}
        <div className="col-span-2 leading-normal">
          <div className="font-bold text-2xl mb-2 md:text-4xl md:mb-4">
            SiPerpus  
          </div>
          <div className="text-base md:text-2xl font-bold mb-4">
            Temukan Buku, Perluas Wawasan, <br />Kapan Saja, Di Mana Saja
          </div>
          <div className="text-sm md:text-lg">
            Mencari dan meminjam buku jadi lebih mudah! 
            Akses ribuan koleksi dengan cepat, periksa ketersediaan buku secara real-time, dan dapatkan rekomendasi bacaan yang sesuai dengan minatmu. 
            Nikmati pengalaman membaca yang lebih praktis, kapan pun kamu butuhkan.
          </div>
          <a href="#service">
          <button className="mt-6 bg-[#27A37F] px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-lg text-sm md:text-lg hover:bg-[#F9F9F9] hover:text-[#2A7C76] hover:font-bold">
            Jelajahi SiPerpus Sekarang!
          </button>
          </a>
        </div>  
        {/* Image Hero */}
        <div className="flex flex-col justify-end h-full">
          <img src="../src/assets/img/anim-hero-1.png" alt="anim-hero" 
          className="w-full h-auto"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;