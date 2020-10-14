import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBDataTable,MDBBtn } from "mdbreact";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout";
import './styles/UsersList.css'

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

const UsersList = (props) => {

    // Configuración del modal de material-ui
    const usr = JSON.parse(localStorage.getItem("user"))
    const token = (usr ? usr.token : '')

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const [idUser, setIdUser] = useState(0);
  
    const classes = useStyles();
  
    const handleOpen = (id) => {
      setIdUser(id)
      setOpen(true);
    };
    const handleClose = (idProducto) => {
      // deleteProduct(idProducto)
      setOpen(false);
    };

    const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('entra a useeffect')
      const getUsers = async () => {
        const url = "https://cerveceria-app.herokuapp.com/users";
        const headers = {
          "Authorization": `Bearer ${token}`
        }


        const resultado = await axios.get(url,{
          headers: headers
        }).then(res => {
          setUsers(res.data.users)
        }).catch((error) => {
          console.log(error)
          props.history.push("/login2");
        })
        ;
      };
      getUsers();
  }, []);

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
      label: "Email",
      field: "email",
      sort: "asc",
      width: 150,
    },
    
    {
      label:"Update",
      field:"update",
      sort:"asc",
      width:50
    }
   
    
  ];

  let records = users.map((user) => {
    let rObj = {};
    rObj['id'] = user.id;
    rObj['name'] = user.name;
    rObj['email'] = user.email;
    rObj['update'] = <Link to={`/users/edit/${user.id}`}  className="btn-warning ">Update</Link> 
  

    return rObj;
  });

  const data = {
    columns: columnas,
    rows: records,
  };



  return (
      
    <Layout>
    <div className="Container">
          <div className="Products">
            <div className="Products__hero">
              <div className="Products__container">
                <h3>Gestión de usuarios</h3>
              </div> 
            </div>
          </div>
          <div className="Table__container">
          <div className="Products__buttons">
            <Link to="/users/add" className="btn btn-primary mt-3">
              Nuevo Usuario
            </Link>
          </div>
      

      <MDBDataTable responsiveSm
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
          <button type="button"  className="btn-danger"  onClick={() => {handleClose(idUser)}}
                        > Confirma la eliminación
                      </button>
        </div>
      </Modal>
    </div>
    </div>
    </Layout>
  );
};

export default UsersList;
