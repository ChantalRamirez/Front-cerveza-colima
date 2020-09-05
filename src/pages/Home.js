import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import LogoImage from '../images/cerveza.svg';
import astronautsImage from '../images/astronauts.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            
              <img
                src={LogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-4"
              />

              <h1>Cerveza Colima</h1>
              
          

            {/* <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={LogoImage}
                alt="Cerveza"
                className="img-fluid p-4"
              />
            </div> */}
          </div>
          <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
        </div>
      </div>
    );
  }
}
