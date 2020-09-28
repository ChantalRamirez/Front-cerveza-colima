import React from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from '../pages/Start';
import Home from'../pages/Home';
import Products from '../pages/Products';
import ProductNew from '../pages/ProductNew';
import MiComponente404 from '../pages/NotFound';
import We from '../pages/We';
import Contact from '../pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route exact path="/" component={Start} /> 
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/we" component={We} /> 
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/new" component={ProductNew} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/404" component={MiComponente404} />
        <Redirect from="*" to="/404" />
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
