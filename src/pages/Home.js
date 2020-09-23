import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import './styles/Home.css';
import imagen1 from '../images/bar.jpg';
import imagen2 from '../images/nosotros.jpg';
import imagen3 from '../images/products.jpg';

export default class Home extends Component {
  render() {
    return (
        <Carousel autoPlay showStatus>
        <div>
            {/* <p className="legend">Legend 1</p> */}
            <img src={imagen1} />
        </div>
        <div>
            <img src={imagen2} />
            <p className="legend">Nuestro Equipo</p>
        </div>
        <div>
            <img src={imagen3} />
            <p className="legend">Nuestros Productos</p>
        </div>
    </Carousel>
    );
  }
}
