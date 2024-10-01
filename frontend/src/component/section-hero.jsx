// // import Navbar from "./Navbar"
// import Footer from "./footer"

// function Hero() {
//     return (
//         <>
//         <div style={{ position: 'relative' }}>
//           <Navbar />
//           <div style={{
//             position: 'absolute', 
//             top: '50%', 
//             left: '50%', 
//             transform: 'translate(-50%, -50%)', 
//             color: 'red',
//           }}>
//             <h2 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '700'
//                 }}>
//                 Si Perpus <br></br>
//                 Temukan Buku, Perluas Wawasan, <br></br>
//                 Kapan Saja, Di Mana Saja
//             </h2>
//             <br />
//             <p>
//                 Mencari dan meminjam buku jadi lebih mudah! 
//                 Akses ribuan koleksi dengan cepat, periksa ketersediaan buku secara real-time, dan dapatkan rekomendasi bacaan yang sesuai dengan minatmu. 
//                 Nikmati pengalaman membaca yang lebih praktis, <br />kapan pun kamu butuhkan.
//             </p>
//           </div>
//           {/* <p style={{
//               position: 'absolute', 
//               top: '50%', 
//               left: '50%', 
//               transform: 'translate(-50%, -50%)', 
//               color: 'white', 
//               fontSize: '.5rem'
//           }}
//           >
//             Mencari dan meminjam buku jadi lebih mudah! 
//             Akses ribuan koleksi dengan cepat, periksa ketersediaan buku secara real-time, dan dapatkan rekomendasi bacaan yang sesuai dengan minatmu. 
//             Nikmati pengalaman membaca yang lebih praktis, kapan pun kamu butuhkan.
//           </p> */}
          
//         </div>
//         {/* <Footer /> */}
//         </>
//     )
// };
// export default Hero


import Footer from "./footer";

function Hero() {
  return (
    <>
      <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
        {/* Konten Hero */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundImage: `url('../src/assets/img/img-hero-2.png')`, // Menggunakan backtick untuk template string
          backgroundSize: 'cover', // Perbaikan di sini
          backgroundPosition: 'center', // Perbaikan di sini
          backgroundRepeat: 'no-repeat', // Perbaikan di sini
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'white',
          }}>
            Si Perpus <br />
            Temukan Buku, Perluas Wawasan, <br />
            Kapan Saja, Di Mana Saja
          </h2>
          <p style={{
            marginTop: '20px',
            fontSize: '1.2rem',
            color: 'white',
            maxWidth: '600px',
          }}>
            Mencari dan meminjam buku jadi lebih mudah! 
            Akses ribuan koleksi dengan cepat, periksa ketersediaan buku secara real-time, 
            dan dapatkan rekomendasi bacaan yang sesuai dengan minatmu. 
            Nikmati pengalaman membaca yang lebih praktis, kapan pun kamu butuhkan.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Hero;
