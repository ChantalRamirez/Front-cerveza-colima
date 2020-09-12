import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios'

export const ProductosContext = createContext();

const ProductosProvider = (props) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () =>{ 
            const url = 'https://cerveceria-app.herokuapp.com/products'
            const resultado = await axios.get(url)
             setProductos(resultado.data.products)
             
        }
      obtenerProductos()
                                
    }, [])

    // console.log('hola ',productos)  
    return (
         
        <ProductosContext.Provider 
            value={{
                productos
            }}
        >
            {props.children}
            
        </ProductosContext.Provider>
    )
} 

export default ProductosProvider;
