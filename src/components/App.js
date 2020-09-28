import React from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from '../pages/Start';
import Home from'../pages/Home';
import Products from '../pages/Products';
import ProductNew from '../pages/ProductNew';
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
        <Switch> 
         {/* <Route exact path="/" component={Home} />  */}
         <Route exact path="/" component={Start} /> 
         <Route exact path="/home" component={Home} /> 
         <Route exact path="/products" component={Products} />
         <Route exact path="/product/new" component={ProductNew} />
         <Route exact path="/productos/new" component={AltaProducto} />  
         <Route path="/productos/edit/:id" component={EditaProducto} />  
         <Route exact path="/productos/list" component={ListaProductos} />  
         <Route exact path="/catalogo" component={CatalogoProductos}/>
         <Route exact path="/404" component={MiComponente404} />
         <Redirect from="*" to="/404" />
        </Switch> 
   </ProductosProvider>
   </BrowserRouter>     
        
        
  );
}

export default App;
