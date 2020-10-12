import React from 'react';
import Navbar from './Nav_bar';
import Footer from './Footer';

function Layout (props) {
  return (
    <React.Fragment>
      <Navbar/>
       {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
