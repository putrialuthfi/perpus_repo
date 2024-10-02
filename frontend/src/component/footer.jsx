import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#333C3F] text-left w-full py-8">
      <div className="flex md:flex-row justify-center mb-4">
        {/* Section: Image */}
          <img src="../src/assets/img/logo-1.png" alt="Logo-1" className="mx-4" style={{width:'50px ',height:'50px'}}/>
          <img src="../src/assets/img/logo-2.png" alt="Logo-2" style={{width:'50px ',height:'50px'}} />
      </div>
        {/* Section: Informasi */}
        <div className="w-full flex flex-col items-start mb-4 md:mb-0 text-[#F9F9F9] items-center justify-center text-center grid grid-rows-3 gap-1">
          <div className='text-xs md:text-base'>
            DINAS ARSIP DAN PERPUSTAKAAN DAERAH KABUPATEN BEKASI
          </div>
          <div className='text-xs md:text-base'>
            J5PF+7Q3, Sukamahi, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530
          </div>
          <div className='text-xs'>
            ©2024 | Created by @putrialuthfi
          </div>
        </div>
      
    </footer>
  );
}

export default Footer