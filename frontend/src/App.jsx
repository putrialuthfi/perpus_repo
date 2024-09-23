import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './component/Home'
import AboutUs from './component/AboutUs';
import IniNavbar from './component/Navbar';
import Article from './component/Article';
import Footer from './component/Footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/IniNavbar" element={<IniNavbar />} />
        <Route path="/Footer" element={<Footer />} />

        <Route path="/Article" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
