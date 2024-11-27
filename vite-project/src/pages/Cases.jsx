import React from 'react';
import ProductCard from '../components/ProductCard';

const cases = [
  {
    name: 'Funda 1',
    description: 'Descripción de la Funda 1',
    image: '/img/f1.jpg',
    price: 150
  },
  {
    name: 'Funda 2',
    description: 'Descripción de la Funda 2',
    image: '/img/f1.jpg',
    price: 250
  },
  {
    name: 'Funda 3',
    description: 'Descripción de la Funda 3',
    image: '/img/f1.jpg',
    price: 350
  },

];

function Cases({ addToCart }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cases.map((product, index) => (
        <ProductCard key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Cases;
