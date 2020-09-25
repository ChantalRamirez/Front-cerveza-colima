import React, { useContext, useState } from "react";
import { ProductosContext } from "../../context/ProductosContext";
import { Link } from "react-router-dom";
import { MDBDataTable,MDBBtn } from "mdbreact";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ListaProductos = () => {
    // Configuración del modal de material-ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const [idProducto, setIdProducto] = useState(0);
  
    const classes = useStyles();
  
    const handleOpen = (id) => {
      setIdProducto(id)
      setOpen(true);
    };
    const handleClose = (idProducto) => {
      deleteProduct(idProducto)
      setOpen(false);
    };

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
      width:50
    },
    {
      label:"Delete",
      field:"delete",
      sort:"asc",
      width:50
    }
    
  ];

  let records = productos.map((producto) => {
    let rObj = {};
    rObj['id'] = producto.id;
    rObj['name'] = producto.name;
    rObj['description'] = producto.description;
    rObj['price'] = producto.price;
    rObj['image'] = producto.image;
    rObj['update'] = <Link to={`/productos/edit/${producto.id}`}  className="btn-warning ">Update</Link> 
    rObj['delete'] =  <button type="button"  className="btn-danger"  onClick={() => {handleOpen(producto.id);}}
                        > Eliminar
                      </button>

    return rObj;
  });

  const data = {
    columns: columnas,
    rows: records,
  };

  const deleteProduct = (idProducto) =>{
    console.log("el idProducto: ",idProducto)
    fetch(`https://cerveceria-app.herokuapp.com/products/delete/${idProducto}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

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

<Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
      >
        <div style={modalStyle} className={classes.paper}>
           <h3 className="mt-4">¿Seguro que desea eliminar el producto?</h3> 
          {/* <img className="img-fluid my-4" src={informacion.strDrinkThumb} /> */}
          
          <button type="button"  className="btn-danger"  onClick={() => {handleClose(idProducto)}}
                        > Confirma la eliminación
                      </button>
           
          {/*<p>Precio: ${producto.price}</p> */}

          <ul>{/* { mostrarIngredientes(informacion) } */}</ul>
        </div>
      </Modal>
    
    </div>
  );
};

export default ListaProductos;
