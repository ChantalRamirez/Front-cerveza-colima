import React, { useState } from "react";
import Layout from "../components/Layout";
import Axios from "axios";
import './styles/Login.css';

const Login = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [ hasError, setHasError ] = useState(false);
    const [ errorDescription, setErrorDescription ] = useState('');

    const onChangeEmail = (e) => {
      const usr = e.target.value;
      setEmail(usr);
    };
  
    const onChangePassword = (e) => {
      const pass = e.target.value;
      setPassword(pass);
    };

    const login = async (e) => {
      e.preventDefault();
      await Axios({
        method: "POST", 
        data: {
          email: email,
          password: password
        },
        withCredentials: true,
        url: "https://cerveceria-app.herokuapp.com/auth/login"
      }).then((res) =>{
        if(res.data.token){
          console.log(res)
          console.log(res.statusText)
          localStorage.setItem("user", JSON.stringify(res.data));
          props.history.push("/products/list");
        }        
      })
      .catch((error) => {          
        console.log('Error en login: ',error.response)
        setHasError(true)
        const mess = (error.response.data.message === 'Missing credentials' ? 'El email y contraseña son obligatorios' : error.response.data.message);
        setErrorDescription(mess)
      });
      
    };

  return (
    <Layout>
      <div className="container mt-3">
        <h1>Login</h1>
        <form onSubmit={login}>
        <fieldset className="text-center">
          <legend>Inicio de sesión</legend>
        </fieldset>

  {hasError ? <label className="Label__alert">ERROR: {errorDescription}</label>: null}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            placeholder="Ingresa tu email"
             onChange={onChangeEmail}
             value={email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingresa tu contraseña"
            name="password"
             onChange={onChangePassword}
             value={password}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Login"
            
          />
        </div>
      </form>
      </div>
    </Layout>
  );
};

export default Login;
