import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar font-awesome

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">MobxTec</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/products">Celulares</NavDropdown.Item>
              <NavDropdown.Item href="/cases">Fundas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Promos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Beneficios!</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contact">Contacto</Nav.Link>
          </Nav>
          <Nav.Link href="#cart" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
            </Nav.Link>
          <Nav className=" align-items-center">
            <Button variant="primary" href="/Login">Iniciar Sesión</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
