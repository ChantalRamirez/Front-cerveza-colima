import React from 'react';
import './styles/Nav_bar.css';
import {Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/cerveza.svg';


class Nav_bar extends React.Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar">
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Cerveza Colima
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
              <Nav.Link as={Link} to="/home" >Inicio</Nav.Link>
              <Nav.Link as={Link} to="/we">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/products">Productos</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
              <Button type="submit" as={Link} to="/login">Iniciar Sesión</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Nav_bar;
