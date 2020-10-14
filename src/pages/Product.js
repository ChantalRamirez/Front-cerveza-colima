import React, { useState } from "react";
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

const Product = ({ product }) => {
  // Configuring modal window
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="col-md-4 mb-3 mt-2">
      <div className="card">
        <h2 className="card-header">{product.name}</h2>
        <img className="img-fluid my-4"  src={product.image} />
        <img className="card-img-top" />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              // guardarIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Cerveza
          </button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
      >
        <div style={modalStyle} className={classes.paper}>
          <h3 className="mt-4">{product.name}</h3>
          <img className="img-fluid my-4"  src={product.image} />
          <p>Descripción: {product.description}</p>
          <p>Precio: ${product.price}</p>

          
        </div>
      </Modal>
    </div>
  );
};

export default Product;
