import React from 'react';
import ProductCard from '../components/ProductCard';

const cases = [
  {
    name: 'Funda 1',
    description: 'Descripción de la Funda 1',
    image: '/img/f1.jpg',
  },
  {
    name: 'Funda 2',
    description: 'Descripción de la Funda 2',
    image: '/img/f1.jpg',
  },
  {
    name: 'Funda 3',
    description: 'Descripción de la Funda 3',
    image: '/img/f1.jpg',
  },
  // Añade más fundas según sea necesario
];

function Cases() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cases.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  );
}

export default Cases;
