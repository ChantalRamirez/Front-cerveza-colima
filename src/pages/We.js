import React from 'react';
import './styles/We.css';
import Layout from '../components/Layout';
import ImageTeam from '../images/nosotros.jpg';

class We extends React.Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <div className="Container">
          <div className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container">
                <h3>Empresa Cerveza Colima</h3>
              </div> 
            </div>
          </div>
          <div className="Badges__container">
          <img className="We__image" src={ImageTeam} alt="Nosotros" />
            <div>
                
          <p>
          Cerveza Colima fundada en 1998, es líder en la elaboración, distribución y venta de cerveza en México 
          y desde 2013 es la séptima zona del mayor grupo cervecero a nivel mundial Anheuser-Busch InBev.<br/><br/>
        
          Actualmente, Cerveza Colima cuenta con 17 marcas nacionales, entre las que destacan Corona Extra, la marca más 
          valiosa de América Latina, Modelo Especial, Victoria, Pacífico y Negra Modelo.<br/><br/>

          A través de más de 20 décadas, hemos invertido y crecido con México. Hoy, generamos más de 10,000 empleos directos 
          en nuestras cervecerías y operaciones verticales, ubicadas a lo largo y ancho del país. Además, generamos miles de 
          empleos indirectos que van desde los campos de cebada, la distribución primaria y los puntos de venta como misceláneas, 
          tiendas de abarrotes, hoteles, bares y restaurantes, etc.<br/><br/>

          Nuestro equipo se conforma de 25 empleados, 4 directivos y 1 presidente corporativo el Sr. Braulio de la O.<br/><br/>

        <strong>¡Bienvenidos a nuestro sitio Web!</strong>



          </p>
            </div>
          </div>
          </div>
        </React.Fragment>
      </Layout>
    );
  }
}

export default We;