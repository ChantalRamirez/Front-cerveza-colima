import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import LogoImage from '../images/cerveza.svg';
import astronautsImage from '../images/astronauts.svg';

export default class Inicio extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="logo">
              <img
                src={LogoImage}
                alt="Platzi Conf Logo"
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
    );
  }
}