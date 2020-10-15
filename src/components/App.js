import React from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from '../pages/Start';
import Home from'../pages/Home';
import Products from '../pages/Products';
import ProductNew from '../pages/ProductNew';
import MiComponente404 from '../pages/NotFound';
import We from '../pages/We';
import Contact from '../pages/Contact';

//products
import ProductCatalog from "../pages/ProductCatalog";
import ProductAdd from "../pages/productos/ProductAdd";
import ProductEdit from "../pages/productos/ProductEdit";
import ProductList from "../pages/productos/ProductList";

//users
import UsersList from "../pages/users/UsersList";
import UserAdd from "../pages/users/UserAdd";
import UserEdit from "../pages/users/UserEdit";

//Login2
import Login from "../pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route exact path="/" component={Start} /> 
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/we" component={We} />         
        <Route exact path="/product/new" component={ProductNew} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={ProductCatalog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/products/add" component={ProductAdd} />
        <Route exact path="/products/edit/:id" component={ProductEdit} />
        <Route exact path="/products/list" component={ProductList} />
        <Route exact path="/users/list" component={UsersList} />
        <Route exact path="/users/add" component={UserAdd} />
        <Route exact path="/users/edit/:id" component={UserEdit} />
        <Route exact path="/404" component={MiComponente404} />
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
