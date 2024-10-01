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
