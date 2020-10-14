import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import './styles/UsersList.css'

const UserEdit = (props)=>{

  const usr = JSON.parse(localStorage.getItem("user"))

  if(!usr){
    props.history.push("/login2");
  }

  const [hasError,setHasError] = useState(false);
  const [ errorDescription, setErrorDescription ] = useState('');

  const { match } = props;

    let {id} = match.params;

    const [user,setUser] = useState({
      name:"",
      email:"",
      password:""
    });

    const {name,email,password} = user;

        //Leer datos del producto
        const onChangeUser = e =>{
          setUser({
              ...user,
              [e.target.name] : e.target.value
          })
     }
 

    useEffect(()=>{
      const token = usr.token; 

      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };

      const getUserById = async () => {
        const resultado = await axios.get(`https://cerveceria-app.herokuapp.com/users/${id}`,{
          headers:headers
        })
        setUser(resultado.data.user)
      }
  
      getUserById();

    },[id])


    const sendForm = async (e) =>{
        e.preventDefault();
        let usr = JSON.parse(localStorage.getItem("user"));    
    let token = usr.token;

    if(name.trim()===''||email.trim()===''||password.trim()==='' ){
      setErrorDescription('Todos los datos del usuario son obligatorios')
      setHasError(true);

      return;
    }

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };

        // const prod = {name,description,price,image}
        console.log('sendForm: ',user)
        
        fetch(`https://cerveceria-app.herokuapp.com/users/update/${id}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(user),
          })
          .then((res) => {
            setUser({ name: "", email: "", password: "" });
            props.history.push("/users/list");
          })      
          .catch((error) => {
            console.log(error);
          });
    }

  return (
    <Layout>
    <div className="Container">
          <div className="Products">
            <div className="Products__hero">
              <div className="Products__container">
                <h3>Edición de usuarios</h3>
              </div> 
            </div>
          </div>
          <div className="Table__container">
          <div className="Products__buttons">
      <Link to="/users/list" className="btn btn-primary mt-3">
          Regresar
        </Link>
        </div>
      <form onSubmit={sendForm}>
      <fieldset className="text-center">
            <legend>Modificación de datos de Usuarios</legend>
          </fieldset>

          {hasError ? <label className="Label__alert">{errorDescription}</label>: null}

        <div className="form-group">
            <label htmlFor="nameInput">Nombre del Usuario</label>
            <input type="text" className="form-control" name="name" id="nameInput" placeholder="Captura el nombre del usuario" onChange={onChangeUser}  value={name} />
        </div>

        <div className="form-group">
        <label htmlFor="descInput">Email</label>
            <input type="text" className="form-control" id="descInput" placeholder="Captura el email" name="email" onChange={onChangeUser}  value={email}/>
            
        </div>

        <div className="form-group">
        <label htmlFor="priceInput">Password</label>
            <input type="password" className="form-control" id="priceInput" placeholder="Captura el password" name="password" onChange={onChangeUser} value={password}/>
            
        </div>

        <div className="form-group">
        
            <input type="submit" className="btn btn-block btn-primary"  value="Guardar Usuario" />
            
        </div> 



      </form>

      </div>  
    </div>
    </Layout>
  );
};

export default UserEdit;
