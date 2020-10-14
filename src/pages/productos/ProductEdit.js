import Axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from 'react-router'
import { Link } from "react-router-dom";
import './styles/ProductList.css'
import Layout from "../../components/Layout";

const EdicionProducto = (props)=>{

  const { match } = props;

    let {id} = match.params;

    // const usr = JSON.parse(localStorage.getItem("user"))
    // const token = usr.token

  //guardar cambios
  //implementar borrado de producto

    const [producto,setProducto] = useState({
      name:"",
      description:"",
      price:"",
      image:""
    });

    const {name,description,price,image} = producto;
    //const [image, setImage] = useState(null)
    const [hasError,setHasError] = useState(false);  

        //Leer datos del producto
        const onChangeProducto = e =>{
          
          setProducto({
              ...producto,
              [e.target.name] : e.target.value
          })
     }
 

    useEffect(()=>{
       const usr = JSON.parse(localStorage.getItem("user"))

      const token = usr.token; 

      const getProductoById = async () => {
    
        const headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        };

    

        const result = await Axios.get(`https://cerveceria-app.herokuapp.com/products/${id}`,{headers})
        setProducto(result.data.product)
      }
  
      getProductoById();

    },[id])


    const sendForm = async (e) =>{
        e.preventDefault();

        let usr = JSON.parse(localStorage.getItem("user"));    
        let token = usr.token;

        if(name.trim()===''||description.trim()==='' ){      
          setHasError(true);
          return;
        }

        const headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        };

        fetch(`https://cerveceria-app.herokuapp.com/products/update/${id}`, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(producto),
        })
        .then((res) => {
          setProducto({ name: "", description: "", price: "", image:"" });
          props.history.push("/products/list");
        })      
        .catch((error) => {
          console.log(error);
          setHasError(true)
        });
 
    }

  return (
    <Layout>
      <div className="Container">
            <div className="Products">
              <div className="Products__hero">
                <div className="Products__container">
                  <h3>Edición de Productos</h3>
                </div> 
              </div>
            </div>
     
      <div className="Table__container">
        <div className="Products__buttons">
        <Link to="/products/list" className="btn btn-primary mt-3">
          Regresar
        </Link>
        </div>
      <form onSubmit={sendForm}>
      <fieldset className="text-center">
            <legend>Modificación de Productos para catálogo</legend>
          </fieldset>

          {hasError ? <label className="Label__alert">Todos los campos son obligatorios</label>: null}

        <div className="form-group">
            <label htmlFor="nameInput">Nombre del Producto</label>
            <input type="text" className="form-control" name="name" id="nameInput" placeholder="Captura el nombre del producto" onChange={onChangeProducto}  value={name} />
        </div>

        <div className="form-group">
        <label htmlFor="descInput">Descripción</label>
            <input type="text" className="form-control" id="descInput" placeholder="Captura la descripción del producto" name="description" onChange={onChangeProducto}  value={description}/>
            
        </div>

        <div className="form-group">
        <label htmlFor="priceInput">Precio</label>
            <input type="text" className="form-control" id="priceInput" placeholder="Captura el precio del producto" name="price" onChange={onChangeProducto} value={price}/>
            
        </div>

        <div className="form-group">
        <label htmlFor="nameInput">Imagen</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Selecciona la imagen del producto" name="image" onChange={onChangeProducto} value={image}/>
            
        </div> 

        <div className="form-group">
        
            <input type="submit" className="btn btn-block btn-primary"  value="Guardar Producto" />
            
        </div> 



      </form>

      </div>
    </div>
  </Layout>
  );
};

export default EdicionProducto;
