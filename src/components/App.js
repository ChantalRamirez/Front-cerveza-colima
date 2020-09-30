import React from "react";
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import Start from "../pages/Start";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductNew from "../pages/ProductNew";
import MiComponente404 from "../pages/NotFound";
import ProductosProvider from "../context/ProductosContext";

import ProductCatalog from "../pages/ProductCatalog";
import ProductAdd from "../pages/productos/ProductAdd";
import ProductEdit from "../pages/productos/ProductEdit";
import ProductList from "../pages/productos/ProductList";
import Layout from "../components/Layout";

//users
import UsersList from "../pages/users/UsersList";
import UserAdd from "../pages/users/UserAdd";

function App() {
  return (
    
      <BrowserRouter>
        <ProductosProvider>
          <Switch>
            <Route exact path="/" component={Start} /> 
            <Route exact path="/home" component={Home} />
            <Route exact path="/products" component={ProductCatalog} />
            {/* <Route exact path="/products" component={Products} /> */}
            {/* <Route exact path="/products/new" component={ProductNew} /> */}
            <Route exact path="/products/add" component={ProductAdd} />
            <Route path="/products/edit/:id" component={ProductEdit} />
            <Route exact path="/products/list" component={ProductList} />
            <Route exact path="/users/list" component={UsersList} />
            <Route exact path="/users/add" component={UserAdd} />
            <Route exact path="/404" component={MiComponente404} />
            <Redirect from="*" to="/404" />
          </Switch>
        </ProductosProvider>
      </BrowserRouter>
  );
}

export default App;
