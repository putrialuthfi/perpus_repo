import Navbar from "./Navbar"
import Footer from "./footer"

function Hero() {
    return (
        <>
        <div style={{ position: 'relative' }}>
          <Navbar />
          <div style={{
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            color: 'white',
          }}>
            <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700'
                }}>
                Si Perpus <br></br>
                Temukan Buku, Perluas Wawasan, <br></br>
                Kapan Saja, Di Mana Saja
            </h2>
            <br />
            <p>
                Mencari dan meminjam buku jadi lebih mudah! 
                Akses ribuan koleksi dengan cepat, periksa ketersediaan buku secara real-time, dan dapatkan rekomendasi bacaan yang sesuai dengan minatmu. 
                Nikmati pengalaman membaca yang lebih praktis, <br />kapan pun kamu butuhkan.
            </p>
          </div>
          {/* <p style={{
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              color: 'white', 
              fontSize: '.5rem'
          }}
          >
            Mencari dan meminjam buku jadi lebih mudah! 
            Akses ribuan koleksi dengan cepat, periksa ketersediaan buku secara real-time, dan dapatkan rekomendasi bacaan yang sesuai dengan minatmu. 
            Nikmati pengalaman membaca yang lebih praktis, kapan pun kamu butuhkan.
          </p> */}
          
        </div>
        {/* <Footer /> */}
        </>
    )
};
export default Hero