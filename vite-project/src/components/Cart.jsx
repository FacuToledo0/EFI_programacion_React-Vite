import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Precio: ${item.price}</p>
                </div>
                <Button variant="danger" onClick={() => removeFromCart(index)}>Eliminar</Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;
