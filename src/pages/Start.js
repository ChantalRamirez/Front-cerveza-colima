import React from 'react';
import './styles/Start.css';
import { Link } from 'react-router-dom';
import LogoImage from '../images/cerveza.svg';
import Footer from '../components/Footer'

function Start()  {
  return (
    <React.Fragment>
      <div className="Home">
        <div className="container">
          <div className="Logo">
            <img
              src={LogoImage}
              alt="Cerveza Logo"
              className="img-fluid mb-4"
            />
            <h1>Cerveza Colima</h1>
          </div>
          <div className="button_start">
            <Link className="btn btn-primary btn-lg" to="/home">
              Entrar
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default Start;
