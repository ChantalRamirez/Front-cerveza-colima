import React, { useContext } from "react";
import Product from "./Product";
import Layout from '../components/Layout';
import { ProductosContext } from "../context/ProductosContext";

const CatalogoProductos = () => {
  const { productos } = useContext(ProductosContext);
  console.log(productos);
  return (
    <Layout>
      
      <div className="container">
        <h1 className="mt-3">Catálogo de Productos</h1>
        <div className="row">
          {productos.map((producto) => (
            <Product key={productos.id} producto={producto} />
          ))}
        </div>
      </div>
      
    </Layout>
  );
};

export default CatalogoProductos;
