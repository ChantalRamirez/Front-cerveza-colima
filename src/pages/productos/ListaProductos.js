import React, { useContext, useState } from "react";
import { ProductosContext } from "../../context/ProductosContext";
import { Link } from "react-router-dom";
import { MDBDataTable,MDBBtn } from "mdbreact";

const ListaProductos = () => {

   const { productos, setConsultar } = useContext(ProductosContext);

  const columnas = [
    {
      label: "ID",
      field: "id",
      sort: "asc",
      width: 150,
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Description",
      field: "description",
      sort: "asc",
      width: 150,
    },
    {
      label: "Price",
      field: "price",
      sort: "asc",
      width: 150,
    },
    {
      label: "Image",
      field: "image",
      sort: "asc",
      width: 150,
    },
    {
      label:"Update",
      field:"update",
      sort:"asc",
      width:100
    },
    {
      label:"Delete",
      field:"delete",
      sort:"asc",
      width:100
    }
    
  ];

  let records = productos.map((producto) => {
    let rObj = {};
    rObj['id'] = producto.id;
    rObj['name'] = producto.name;
    rObj['description'] = producto.description;
    rObj['price'] = producto.price;
    rObj['image'] = producto.image;
    rObj['update'] = <Link to={`/productos/edit/${producto.id}`}  className="btn btn-primary mt-3">Update</Link> 
    //rObj['delete'] = <MDBBtn color="btn btn-warning"  size="sm" href="/productos/edit" action={() =>{ setConsultar(false)   }     } >Update</MDBBtn>;
    //console.log('robj: ',rObj)

    return rObj;
  });



  // console.log('Records: ',records)
  const data = {
    columns: columnas,
    rows: records,
  };

  //console.log("Data: ", data);


  return (
    <div className="container mt-3">
      <h1>Lista de Productos</h1>
      <Link to="/productos/new" className="btn btn-primary mt-3">
        Nuevo Producto
      </Link>



      <MDBDataTable 
      striped 
      bordered 
      small 
      data={data} />



    
    </div>
  );
};

export default ListaProductos;
