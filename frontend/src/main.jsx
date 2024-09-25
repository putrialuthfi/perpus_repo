import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './component/Navbar.jsx'
import Hero from './component/hero-section.jsx'
import Beranda from './component/homepage.jsx'
import AboutUs from './component/aboutus.jsx'
import Footer from './component/footer.jsx'
import Service from './component/service-section.jsx'
import LoginAdmin from './component/login-admin.jsx'
import LoginPembaca from './component/login-pembaca.jsx'
import Catalog2 from './component/catalog-2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Beranda />
    {/* <Navbar /> */}
    {/* <Service /> */}
    {/* <App /> */}
    {/* <Footer /> */}
    {/* <LoginAdmin /> */}
    {/* <LoginPembaca /> */}
    {/* <Catalog2 /> */}

  </React.StrictMode>,
)
