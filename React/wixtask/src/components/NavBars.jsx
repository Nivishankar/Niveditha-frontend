import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{height:"7rem"}}>
      <Container>
        <Navbar.Brand href="#home" style={{marginLeft:"2rem",fontSize:"2rem"}}>WIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft:"30rem"}}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/ClientAlbums">ClientAlbums</Nav.Link>
            <Nav.Link href="/Contacts">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;