import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../images/cerveza.svg';

const Navbar = (props) => {
  
  const usr = useState(JSON.parse(localStorage.getItem("user")))
  //console.log('usr',usr)

  const logout = () => {
    localStorage.removeItem("user");
    //props.history.push("/login");
  }

  return(
    <div className="Navbar">
      <div className="container-fluid"> 
        <Link className="Navbar__brand" to="/">
        <div>
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="font-weight-bold">Cerveza Colima</span>
        </div>
        <nav className="menu"> 
          <ol>
            <li>
              <Link className="link" to="/home">Inicio</Link>
            </li>
            <li>
              <Link className="link" to="/">Nosotros</Link>
            </li>
            <li>
              <Link className="link" to="/products">Productos</Link>
            </li>
            <li>
              {usr[0] ? <Link className="link" to="/products/list">Gestión de Productos</Link>
               : null    
              }
            </li>
          </ol>
          {usr[0] ? <button className="btn btn-secondary" onClick={logout}> Logout </button> :
          <Link className="btn btn-primary"  to="/login"> Log In </Link>}
        </nav>           
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
