import React from 'react'
import ReactDOM from 'react-dom/client'
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
import AboutUs from './component/aboutus.jsx'
import Footer from './component/footer.jsx'
import Service from './component/section-service.jsx'
import LoginAdmin from './component/login-admin.jsx'
import LoginPembaca from './component/login-pembaca.jsx'
import RegisPembaca from './component/regis-pembaca.jsx'
import Catalog2 from './component/catalog-2.jsx'
import FAQ from './component/section-faq.jsx'
import SectionCatalog from './component/section-catalog.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Beranda />
    {/* <Hero /> */}
    {/* <SectionCatalog /> */}
    {/* <Navbar /> */}
    {/* <Service /> */}
    {/* <App /> */}
    {/* <Footer /> */}
    {/* <RegisPembaca /> */}
    {/* <LoginPembaca /> */}
    {/* <Catalog2 /> */}
    {/* <FormPinjamBuku /> */}
    {/* <Navbar/> */}

  </React.StrictMode>,
)
