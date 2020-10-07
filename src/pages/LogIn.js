import React from 'react';
import './styles/LogIn.css';
import Layout from '../components/Layout';
import {Form, Button} from 'react-bootstrap';

function LogIn() {
    return (
        <Layout>
            <div className="Container">
                <div className="Product">
                    <div className="Product__hero"></div>
                </div>
                <div className="Form__container">
                
                <Form>
                    <h2>¡Bienvenido!</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="user"  />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <div className="Button__container">
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </div>
                    </Form>
                 
                </div>
            </div>
        </Layout>
    );
}

export default LogIn;