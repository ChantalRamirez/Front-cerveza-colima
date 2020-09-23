import React from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Inicio from '../pages/Inicio';
import Home from'../pages/Home';
import Products from '../pages/Badges';
import ProductNew from '../pages/BadgeNew';
import MiComponente404 from '../pages/NotFound';

function App() {
  return (
     <BrowserRouter>
      <Layout>
        <Switch> 
         <Route exact path="/" component={Inicio} /> 
         <Route exact path="/home" component={Home} /> 
         <Route exact path="/products" component={Products} />
         <Route exact path="/product/new" component={ProductNew} />
         <Route exact path="/404" component={MiComponente404} />
         <Redirect from="*" to="/404" />
        </Switch> 
      </Layout>
   </BrowserRouter>
  );
}

export default App;
