import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Layout from "../../components/Layout";
import './styles/ProductList.css'

const AltaProducto = (props) => {


  const usr = JSON.parse(localStorage.getItem("user"))

  if(!usr){
    props.history.push("/login2");
  }

  const token = (usr ? usr.token : '')

  const [producto, setProducto] = useState({
    name: "",
    description: "",
    price: ""    
  });

  const [image, setImage] = useState(null)

  const [hasError,setHasError] = useState(false);  

  const { name, description, price } = producto;

  //Leer datos del producto
  const onChangeProducto = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  

  const sendForm = async (e) => {
    e.preventDefault();

    if(name.trim()===''||description.trim()===''||price.trim()==='' ){      
      setHasError(true);
      return;
    }
    
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };


    const formData = new FormData();
    formData.append('name',name)
    formData.append('description',description)
    formData.append('price',price)
    formData.append('image',image)

    Axios.post(
      "https://cerveceria-app.herokuapp.com/products/create",
      formData,
      {
        headers: headers,
      }
    )
      .then((response) => {
        console.log(response);
        setProducto({ name: "", description: "", price: "" });
        setImage(null);
        props.history.push("/products/list");
      })
      .catch((error) => {
        console.log(error);
        setHasError(true)
      });

    

    
  };

  return (
    <Layout>
      <div className="Container">
            <div className="Products">
              <div className="Products__hero">
                <div className="Products__container">
                  <h3>Alta de productos</h3>
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
          <legend>Registro de Productos para catálogo</legend>
        </fieldset>

        {hasError ? <label className="Label__alert">Todos los campos son obligatorios</label>: null}

        <div className="form-group">
          <label htmlFor="nameInput">Nombre del Producto</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="nameInput"
            placeholder="Captura el nombre del producto"
            onChange={onChangeProducto}
            value={name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="descInput">Descripción</label>
          <input
            type="text"
            className="form-control"
            id="descInput"
            placeholder="Captura la descripción del producto"
            name="description"
            onChange={onChangeProducto}
            value={description}
          />
        </div>

        <div className="form-group">
          <label htmlFor="priceInput">Precio</label>
          <input
            type="text"
            className="form-control"
            id="priceInput"
            placeholder="Captura el precio del producto"
            name="price"
            onChange={onChangeProducto}
            value={price}
          />
        </div>

        <div className="form-group">
          <label htmlFor="nameInput">Imagen</label>
          <input
            type="file"
            className="form-control"
            id="nameInput"
            placeholder="Seleccionar la imagen del producto"
            name="image"
            onChange={(event) => setImage(event.target.files[0])}
            
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Guardar Producto"
          />
        </div>
      </form>
    </div>
    </div>
   </Layout>
  );
};

export default AltaProducto;
