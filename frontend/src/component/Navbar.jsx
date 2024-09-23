import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from '../img/logo-1.png';
import logo2 from '../img/logo-2.png';

function IniNavbar() {
  return (
    <Navbar expand="lg" style={{backgroundColor:'#2A7C76'}}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo1} alt="ini logo" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
            <img src={logo2} alt="ini logo" style={{ width: '50px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft: '21rem'}}>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color: 'white'}}>Beranda</Nav.Link>
            <NavDropdown title="Kategori" id="basic-nav-dropdown" style={{color: 'white'}}>
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" style={{color: 'white'}}>Artikel</Nav.Link>
            <Nav.Link href="#link" style={{color: 'white'}}>Tentang Kami</Nav.Link>
            <NavDropdown title="Masuk ke Akun" id="basic-nav-dropdown" style={{color: 'white'}}>
              <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Pembaca</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default IniNavbar;