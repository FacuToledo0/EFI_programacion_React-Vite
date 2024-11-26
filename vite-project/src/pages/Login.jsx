import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="container mt-5">
      <h1>Iniciar Sesión</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mt-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu contraseña" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
}

export default Login;
