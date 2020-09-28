import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AltaProducto = () => {
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

    // const prod = {name,description,price,image}
    console.log("prod: ", producto);

    fetch("https://cerveceria-app.herokuapp.com/products/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setProducto({ name: "", description: "", price: "", image: "" });
  };

  return (
    <div className="container">
      <h1 className="mt-3">Alta de Productos</h1>
        <Link to="/productos/list" className="btn btn-primary mt-3">
          Regresar
        </Link>

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
  );
};

export default AltaProducto;