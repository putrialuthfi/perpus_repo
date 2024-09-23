import React from 'react';
import IniNavbar from './Navbar';

const AboutUs = () => {
  return (
    <aboutus>
      <IniNavbar />
        <div className="w-full h-full flex flex-wrap place-items-center pt-[70px] pb-[100px] px-[100px]">
          <div className="flex flex-col lg:flex-row items-center justify-between p-8">
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:ml-8 mx-auto justify-center">
              <h1 className="text-[20px] text-wrap font-semibold text-gray-800 mt-4 mb-4 text-center">Tentang Kami</h1>
                <div className="flex item-center border border-black m-10">
                  <div className="border border-red">
                    <img src="img-1.jpg" width="50px" alt="ini gambar" />
                  </div>
                  <div className="content-aboutus-text">
                    <p className="text-gray-600 mb-4 text-center">
                    <b>SiPerpus</b> hadir sebagai pusat literasi modern yang menyediakan ribuan buku dan sumber daya digital secara mudah dan praktis.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </aboutus>
  );
};

export default AboutUs;