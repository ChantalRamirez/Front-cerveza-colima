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
    price: "",
    image: "",
  });

  const { name, description, price, image } = producto;

  //Leer datos del producto
  const onChangeProducto = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    let tok = JSON.parse(localStorage.getItem("user"));
    console.log("El token recuperado es:", tok.token);
    let toki = tok.token;

    console.log("prod: ", producto);
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${toki}`,
    };

    Axios.post(
      "https://cerveceria-app.herokuapp.com/products/create",
      producto,
      {
        headers: headers,
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setProducto({ name: "", description: "", price: "", image: "" });

    props.history.push("/products/list");
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
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Captura la imagen del producto"
            name="image"
            onChange={onChangeProducto}
            value={image}
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
