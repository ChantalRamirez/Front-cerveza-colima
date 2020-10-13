import React, { useState } from "react";
import Layout from "../components/Layout";
import Axios from "axios";
import './styles/Login.css';


const Login = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [ hasError, setHasError ] = useState(false);
    const [ passwordError, setPasswordError ] = useState(false);

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
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      })
      props.history.push("/products/list");
    };

  return (
    <Layout>
      <div className="Container">
        <div className="Product">
          <div className="Product__hero"></div>
        </div>
        <div className="Login__container">
          <h2 className="Text__center">Inicio de sesión</h2>
            {hasError &&
              <label className="Label__alert"> 
                Su contraseña o usuario son incorrectos 
                o no existen en nuestra plataforma.
              </label>
            }
            <form onSubmit={login} className="Login__container">
                <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="RegularStyle"
                    name="email"
                    id="email"
                    placeholder="Ingresa tu email"
                    onChange={onChangeEmail}
                    value={email}
                  />
                <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    className="RegularStyle"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    onChange={onChangePassword}
                    value={password}
                  />
                   { passwordError && 
                                <label className="Label__Error">
                                    Contraseña inválida o incompleta
                                </label>
                            }
                <input
                  type="submit"
                  className="btn btn-block btn-primary Button__container"
                  value="Login"
                />

            </form>
      
      </div>

      </div>
    </Layout>
  );
};

export default Login;
