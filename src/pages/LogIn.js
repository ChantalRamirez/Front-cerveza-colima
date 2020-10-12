import React, {useState} from 'react';
import Layout from '../components/Layout';
import {Button} from 'react-bootstrap';
import Input from '../components/Input';
import './styles/Login.css';

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);
    const [ hasError, setHasError ] = useState(false);

    function handleChange(name, value){
        if (name === 'usuario'){
            setUser(value)
            setHasError(false);
        }else{
            if(value.length < 6) {
                setPasswordError(true);
                setHasError(false);
            }else{
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }    
        }
    };

    function ifMatch(param){
        if (param.user.length > 0 && param.password.length > 0){
            if(param.user === 'Chantal' && param.password === '123456'){
                const { user, password } = param;
                let ac = { user, password };
                let account = JSON.stringify(ac);
                localStorage.setItem('accont', account);
                setIsLogin(true);
                setHasError(false);
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        }else {
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit(){
        let account = { user, password }
        if(account) {
            ifMatch(account);
        }
    };

    return (
        <Layout>
            <div className="Container">
                <div className="Product">
                    <div className="Product__hero"></div>
                </div>
                { isLogin ? 
                    <div className="Login__container">
                        <h1>¡Hola, {user}!</h1>
                        <label> Felicidades, estas logueado.</label>
                    </div>
                    :
                    <div className="Login__container">
                            <h2 className="Text__center">¡Bienvenido!</h2>
                            {hasError &&
                                <label className="Label__alert"> 
                                    Su contraseña o usuario son incorrectos 
                                    o no existen en nuestra plataforma.
                                </label>
                            }
                            <label>Usuario</label>
                            <Input
                                attribute= {{
                                    id:'usuario',
                                    name: 'usuario',
                                    type: 'text',
                                    placeholder: 'Ingrese su usuario'
                                }}
                            handleChange={handleChange}
                            />
                            <label>Contraseña</label>
                            <Input
                                attribute= {{
                                    id:'contraseña',
                                    name: 'contraseña',
                                    type: 'password',
                                    placeholder: 'Ingrese su contraseña'
                                }}
                            handleChange={handleChange}
                            param = {passwordError}
                            />
                            { passwordError && 
                                <label className="Label__Error">
                                    Contraseña inválida o incompleta
                                </label>
                            }
                            <Button className="btn btn-primary Button__container" onClick={handleSubmit}>Ingresar</Button>
                    </div>
                }
            </div>
        </Layout>
    )
};

export default Login;