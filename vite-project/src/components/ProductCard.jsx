import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard({ product, addToCart }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          <strong>Precio: ${product.price}</strong>
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
