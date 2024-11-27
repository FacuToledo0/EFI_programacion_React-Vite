import React from 'react';
import ProductCard from '../components/ProductCard';

const promos = [
  {
    name: 'Promo 1',
    description: 'Descripción de la Promo 1',
    image: '/img/promo1.jpg',
    price: 80
  },
  {
    name: 'Promo 2',
    description: 'Descripción de la Promo 2',
    image: '/img/promo2.jpg',
    price: 160
  },
  {
    name: 'Promo 3',
    description: 'Descripción de la Promo 3',
    image: '/img/promo3.jpg',
    price: 240
  },
  // Añade más promociones según sea necesario
];

function Promos({ addToCart }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {promos.map((promo, index) => (
        <ProductCard key={index} product={promo} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Promos;
