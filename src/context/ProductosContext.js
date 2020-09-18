import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosContext = createContext();

const ProductosProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const [consultar,setConsultar] = useState(true);

  useEffect(() => {
    //agregar if para validar ejecución de "obtenerProductos" cuando es para catálogo o para listado
    console.log('entra a useeffect')
    if(consultar){
      const obtenerProductos = async () => {
        const url = "https://cerveceria-app.herokuapp.com/products";
        const resultado = await axios.get(url);
        setProductos(resultado.data.products);
      };
      obtenerProductos();
    }  
    // else{
    //   console.log('ID-else: ',id)
    //   const getProductoById = async (id) => {
    //     const url = "https://cerveceria-app.herokuapp.com/products/:id";
    //     const resultado = await axios.get(url);
    //     console.log(resultado.data)
    //     //setProducto(resultado.data)
    //   };
    //   getProductoById(id)
      
    // }

  }, []);

  // console.log('hola ',productos)
  return (
    <ProductosContext.Provider
      value={{
        productos,
        setConsultar
      }}
    >
      {props.children}
    </ProductosContext.Provider>
  );
};

export default ProductosProvider;
