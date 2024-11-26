import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    name: 'Producto 1',
    description: 'Descripción del Producto 1',
    image: '/img/3.jpg',
  },
  {
    name: 'Producto 2',
    description: 'Descripción del Producto 2',
    image: '/img/3.jpg',
  },
  {
    name: 'Producto 3',
    description: 'Descripción del Producto 3',
    image: '/img/3.jpg',
  },
  // Añade más productos según sea necesario
];

function Products() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default Products;
