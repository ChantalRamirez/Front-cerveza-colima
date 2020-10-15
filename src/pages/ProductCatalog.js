import React, { useEffect, useState } from "react";
import Product from "./Product";
import Layout from "../components/Layout";
import axios from "axios";
import "./styles/Products.css";

const CatalogoProductos = () => {
  const [products, setProducts] = useState([]);

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
      <div className="Container">
        <div className="Products__hero">
          <div className="Products__container">
            <h3>Catálogo de productos</h3>
          </div> 
        </div>
        <div className="List__container">
          <div className="row">
            {products.map((product) => (
            <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CatalogoProductos;
