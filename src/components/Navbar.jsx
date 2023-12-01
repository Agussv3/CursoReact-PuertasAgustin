import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartwidget from './CartWidget';

const NavBar = () => {

    return(
        <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TotalGames</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Juegos</Nav.Link>
            <NavDropdown title="Consolas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Microsoft</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sony
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nintendo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                PC
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Cartwidget />
      </Container>
    </Navbar>
        </div>
    )
}

export default NavBar;