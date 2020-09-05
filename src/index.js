//  const element = document.createElement('h1')
//  element.innerText = 'Hello, Platzi Badges!';

//  const container = document.getElementById ('app');
//  container.appendChild(element); 



//  const jsx = <h1> Hello, Platzi Badges from React! </h1>;
//  const element = React.createElement(
//      'a',
//      { href: 'https://platzi.com'},
//      'Ir a platzi',
//  );
//  const name = 'chantal';
//  const element = React.createElement ('h1',{},`Hola, soy ${name}`)
//  const jsx = <h1> Hola soy, {2+2}</h1>;
import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import './global.css';

import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import App from './components/App';


//  const element = (
//      <div>
//         <h1>Hola, soy chantal</h1>
//         <p> Soy ingeniera fronted.</p>
//     </div>
//  );
const container = document.getElementById('app');

ReactDOM.render(<App />,container);
    
    //  firstName="Lily" 
    // lastName="ramirez" 
    // jobTitle="Enginner"
    // avatarUrl="https://estadodeltiempo.mx/wp-content/uploads/2020/05/avatar-Faceboook.jpg"
    // twitter="chantalramirez"