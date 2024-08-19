import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const RemoveButton = styled.button`
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id}>
          <span>{item.name}</span>
          <span>${item.price}</span>
          <RemoveButton onClick={() => removeFromCart(item.id)}>
            Remove
          </RemoveButton>
        </CartItem>
      ))}
      <h3>Total: ${total}</h3>
    </CartContainer>
  );
};

export default Cart;
