import React from 'react';
import {  Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import MiComponente404 from '../pages/NotFound';
import ProductosProvider from "../context/ProductosContext";

import CatalogoProductos from '../pages/CatalogoProductos';
import AltaProducto from '../pages/productos/AltaProducto';
import EditaProducto from '../pages/productos/EdicionProducto'
import ListaProductos from '../pages/productos/ListaProductos'

function App() {
  return (

    <BrowserRouter>  
      <ProductosProvider>
        <Layout>
        <Switch> 
         {/* <Route exact path="/" component={Home} />  */}
         <Route exact path="/productos/new" component={AltaProducto} />  
         <Route path="/productos/edit/:id" component={EditaProducto} />  
         <Route exact path="/productos/list" component={ListaProductos} />  
         <Route exact path="/catalogo" component={CatalogoProductos}/>
         <Route exact path="/badges" component={Badges} />
         <Route exact path="/badges/new" component={BadgeNew} />
         <Route exact path="/404" component={MiComponente404} />
         <Redirect from="*" to="/404" />
        </Switch> 
      </Layout>
   </ProductosProvider>
   </BrowserRouter>     
  );
}

export default App;
