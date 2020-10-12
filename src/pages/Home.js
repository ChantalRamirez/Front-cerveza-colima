import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/Home.css';
import Layout from '../components/Layout';
import imagen1 from '../images/bar.jpg';
import imagen2 from '../images/nosotros.jpg';
import imagen3 from '../images/products.jpg';

// export default class Home extends Component {
//   render() {
//     return (
//       <Layout>
//         <div>
//           Carrousel  
//         </div>
//       </Layout>
//     );
//   }
// }


const Home = (props) => {
  return(
    <Layout>
    <div>
      Carrousel  
    </div>
  </Layout>
  )
}

export default Home;
