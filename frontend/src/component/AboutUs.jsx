import imgaboutus from '../img/img-about-us.png';

function AboutUs() {
    return(
        <div style={{alignItems: 'center'}}>
            <h3>Tentang Kami</h3>
            <img src={imgaboutus} alt="ini logo" style={{width: '250px'}} />
            <p>
                <b>SiPerpus</b> hadir sebagai pusat literasi modern yang menyediakan ribuan buku dan sumber daya digital secara mudah dan praktis. Nikmati akses koleksi lengkap dari berbagai genre, kapan saja dan di mana saja, langsung dari perangkat Anda. Temukan pengetahuan tanpa batas dalam satu klik! 😉
            </p>
        </div>
    );
}

export default AboutUs;