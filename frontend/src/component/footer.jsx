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
        <div className="w-full flex flex-col items-start mb-4 md:mb-0 text-[#F9F9F9] items-center">
          <h3>DINAS ARSIP DAN PERPUSTAKAAN DAERAH KABUPATEN BEKASI</h3>
          <h4>J5PF+7Q3, Sukamahi, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530</h4>
          <h5>©2024 | Created by @putrialuthfi</h5>
        </div>
      
    </footer>
  );
}

export default Footer