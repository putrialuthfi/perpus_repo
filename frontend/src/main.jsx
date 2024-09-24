import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './component/Navbar.jsx'
import Beranda from './component/homepage.jsx'
import AboutUs from './component/aboutus.jsx'
import Footer from './component/footer.jsx'
import CTA from './component/cta.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    {/* <Beranda /> */}
    {/* <App /> */}
    {/* <Footer /> */}
    {/* <AboutUs /> */}
    <CTA />

  </React.StrictMode>,
)
