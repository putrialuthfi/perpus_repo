import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react"
import App from './App.jsx'
import './index.css'
import Navbar from './component/Navbar.jsx'
import Hero from './component/section-hero.jsx'
import Beranda from './component/homepage.jsx'
import TentangKami from './component/tentang-kami.jsx'
import Footer from './component/footer.jsx'
import LamanCatalog1 from './component/laman-catalog-1.jsx';
import LamanCatalog2 from './component/laman-catalog-2.jsx'
import FormPinjamBuku from './component/form-pinjambuku.jsx';
import Article from './component/article.jsx';
import LoginAdmin from './component/login-admin.jsx';
import LoginPembaca from './component/login-pembaca.jsx';
import RegisAdmin from './component/regis-admin.jsx';
import RegisPembaca from './component/regis-pembaca.jsx';
import ProfilAdmin from './component/profil-admin.jsx';
import ProfilPembaca from './component/profil-pembaca.jsx';
import { ThemeProvider } from "@material-tailwind/react";
import DataPeminjamBuku from './component/data-peminjam-buku.jsx';
import UploadDataBuku from './component/upload-data-buku.jsx';
import RiwayatPeminjaman from './component/riwayat-peminjaman.jsx';
import AktivitasSaya from './component/aktivitas-saya.jsx';
import AktivitasSaya2 from './component/aktivitas-saya-2.jsx';

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/loginpembaca" element={<LoginPembaca />} />
        <Route path="/regisadmin" element={<RegisAdmin />} />
        <Route path="/regispembaca" element={<RegisPembaca />} />
        <Route path="/profiladmin" element={<ProfilAdmin />} />
        <Route path="/profilpembaca" element={<ProfilPembaca />} />
        <Route path="/datapeminjambuku" element={<DataPeminjamBuku />} />
        <Route path="/uploaddatabuku" element={<UploadDataBuku />} />
        <Route path="/riwayatpeminjaman" element={<RiwayatPeminjaman />} />
        <Route path="/aktivitassaya" element={<AktivitasSaya />} />
        <Route path="/LamanCatalog1" element={<LamanCatalog1 />} />
        <Route path="/LamanCatalog2" element={<LamanCatalog2 />} />
        <Route path="/FormPinjamBuku" element={<FormPinjamBuku />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/Article" element={<Article />} />
      </Routes>
    </Router>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
        
//       </Routes>
//     </Router>
//     <LamanCatalog1 />
//     <Route path="/LamanCatalog2" element={<LamanCatalog2 />} />
//     <Beranda />


//   </React.StrictMode>,
// )
