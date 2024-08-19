import React from 'react';
import styled from 'styled-components';

const ItemCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  width: 250px;
  text-align: center;
`;

const ItemButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

const MenuItem = ({ item }) => {
  return (
    <ItemCard>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <ItemButton>Add to Cart</ItemButton>
    </ItemCard>
  );
};

export default MenuItem;
