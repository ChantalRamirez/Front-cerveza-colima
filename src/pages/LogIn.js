import React, { useState } from "react";
import Layout from "../components/Layout";
import Axios from "axios";

const Login = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onChangeEmail = (e) => {
      const usr = e.target.value;
      setEmail(usr);
    };
  
    const onChangePassword = (e) => {
      const pass = e.target.value;
      setPassword(pass);
    };

    const login = (e) => {
      e.preventDefault();
      Axios({
        method: "POST",
        data: {
          email: email,
          password: password
        },
        withCredentials: true,
        url: "https://cerveceria-app.herokuapp.com/auth/login"
      }).then((res) =>{
        console.log('res.data.accessToken: ',res.data.token)
        if(res.data.token){
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      })
      props.history.push("/products/list");
    };

  return (
    <Layout>
      <div className="container mt-3">
        <h1>Login</h1>
        <form onSubmit={login}>
        <fieldset className="text-center">
          <legend>Inicio de sesión</legend>
        </fieldset>

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
          <label htmlFor="password">Descripción</label>
          <input
            type="text"
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
