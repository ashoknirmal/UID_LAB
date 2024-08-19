import React from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const Menu = ({ items }) => {
  return (
    <MenuContainer>
      {items.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </MenuContainer>
  );
};

export default Menu;
