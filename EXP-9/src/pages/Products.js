// pages/Products.js
import React from 'react';

const Products = () => {
  const productList = [
    { id: 1, name: 'Product A', price: '$10' },
    { id: 2, name: 'Product B', price: '$15' },
    { id: 3, name: 'Product C', price: '$20' },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
