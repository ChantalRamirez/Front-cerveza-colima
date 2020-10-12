import React, { useEffect, useState } from "react";
import Product from "./Product";
import Layout from '../components/Layout';
import axios from "axios";


const CatalogoProductos = () => {
  const [ products, setProducts]  = useState([])
  

  useEffect(() => {
      const obtenerProductos = async () => {
        const url = "https://cerveceria-app.herokuapp.com/getProducts";
        const resultado = await axios.get(url);
        setProducts(resultado.data.products);
      };
      obtenerProductos();
 
  }, []);
  
    console.log(products);

  return (
    <Layout>
      
      <div className="container">
        <h1 className="mt-3">Catálogo de Products</h1>
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      
    </Layout>
  );
};

export default CatalogoProductos;
