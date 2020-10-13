import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';
import iconFacebook from '../images/facebook.svg';
import iconTwitter from '../images/twitter.svg';
import iconInstagram from '../images/instagram.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__container">
          Derechos reservados <br/>
          Contacto Cerveza Colima
        </div> 
        <div>
          <Link to="https://www.facebook.com/">
            <img
              className="social-link"
              src={iconFacebook}
              alt="facebook icon"
            />
          </Link>
          <Link to="https://twitter.com/">
            <img
              className="social-link"
              src={iconTwitter}
              alt="twitter icon"
            />
          </Link>
          <Link to="https://instagram.com/">
            <img
              className="social-link"
              src={iconInstagram}
              alt="instagram icon"
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default Footer;