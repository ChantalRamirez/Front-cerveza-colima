import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/cerveza.svg';
import {Navbar, Nav, Button } from 'react-bootstrap';
import './styles/Nav_bar.css';


const Nav_bar = () => {

  const usr = useState(JSON.parse(localStorage.getItem("user")))

  const logout = () =>{
    localStorage.removeItem("user");
  }

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
            {usr[0] ? <Nav.Link as={Link} to="/products/list">Gestión de Productos</Nav.Link> : null}            
            {usr[0] ? <Nav.Link as={Link} to="/users/list">Gestión de Usuarios</Nav.Link> : null}            
            {usr[0] ? <Button onClick={logout} variant="btn btn-secondary" type="submit" as={Link} to="/login2" >Logout</Button> :
             <Nav.Link className="btn btn-primary" as={Link} to="/login2">Iniciar sesión</Nav.Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );

} 

export default Nav_bar;