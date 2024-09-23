import logo1 from '../img/logo-1.png';
import logo2 from '../img/logo-2.png';

function Footer() {
    return(
        <div style={{alignItems: 'center'}}>
            <img src={logo1} alt="ini logo" style={{width: '50px'}} />
            <img src={logo2} alt="ini logo" style={{width: '50px'}} />
            <p>
                <h3>DINAS ARSIP DAN PERPUSTAKAAN DAERAH KABUPATEN BEKASI</h3>
                <h4>J5PF+7Q3, Sukamahi, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530</h4>
                <h5>©2024 | Created by @putrialuthfi</h5>
            </p>
        </div>
    );
}

export default Footer;