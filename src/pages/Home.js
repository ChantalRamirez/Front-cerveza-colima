import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../images/welcome.png';
import image2 from '../images/nosotros.jpg';
import image3 from '../images/nuestros_productos.jpg';


export default class Home extends Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <div className="Container">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="Sucursal"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <Link to="/we">
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Nuestro equipo"
                />
                </Link>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/products">
                  <img
                    className="d-block w-100"
                    src={image3}
                    alt="Productos"
                  />
                </Link>
              </Carousel.Item>
            </Carousel>
          </div>
        </React.Fragment>
      </Layout>
    );
  }
}



