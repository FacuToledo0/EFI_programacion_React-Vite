import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const benefits = [
  {
    title: 'Envío Gratis',
    description: 'Obtén envío gratis en todos tus pedidos a nivel nacional.',
    image: '/img/envio_gratis.jpg'
  },
  {
    title: 'Devoluciones sin Costo',
    description: 'Devoluciones sin costo en un plazo de 30 días.',
    image: '/img/devoluciones_sin_costo.jpg'
  },
  {
    title: 'Descuentos Exclusivos',
    description: 'Accede a descuentos exclusivos solo para miembros.',
    image: '/img/descuentos_exclusivos.jpg'
  },
  // Añade más beneficios según sea necesario
];

function Benefits() {
  return (
    <div className="container mt-5">
      <h1>Beneficios!</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {benefits.map((benefit, index) => (
          <Card key={index} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={benefit.image} />
            <Card.Body>
              <Card.Title>{benefit.title}</Card.Title>
              <Card.Text>
                {benefit.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
