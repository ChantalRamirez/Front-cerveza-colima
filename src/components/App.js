import React from 'react';
import {  Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import MiComponente404 from '../pages/NotFound';

function App() {
  return (
     <BrowserRouter>
        <Layout>
        <Switch> 
         <Route exact path="/home" component={Home} /> 
         <Route exact path="/badges" component={Badges} />
         <Route exact path="/badges/new" component={BadgeNew} />
         <Route exact path="/404" component={MiComponente404} />
         <Redirect from="*" to="/404" />
        </Switch> 
      </Layout>
   </BrowserRouter>
  );
}

export default App;
