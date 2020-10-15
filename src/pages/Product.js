import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import './styles/Image.css'

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
    width: 300,
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
    <div className=".col-md-offset-6">
      <div className="card Card__container">
        <img className="img-fluid my-6 Image__card "  src={product.image} />
        <div className="card-body">
          <h4 class="card-title text__container">{product.name}</h4>
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
          <img className="img-fluid my-4 image_style"  src={product.image} />
          <p>Descripción: {product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
