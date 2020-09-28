import React, { useContext } from "react";
import Producto from "../pages/Producto";
// import Image_NotFound from "../images/404Error2.svg";
import "./styles/Home.css";

import { ProductosContext } from "../context/ProductosContext";

const CatalogoProductos = () => {
  const { productos } = useContext(ProductosContext);
  console.log(productos);
  return (
    <div className="container">
      <h1 className="mt-3">Catálogo de Productos</h1>
      <div className="row">
        {productos.map((producto) => (
          <Producto key={productos.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default CatalogoProductos;
