import React from 'react';
import Menu from '../components/Menu';

const MenuPage = () => {
  const items = [
    { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: 10 },
    { id: 2, name: 'Burger', description: 'Juicy beef burger', price: 8 },
    { id: 3, name: 'Pasta', description: 'Creamy alfredo pasta', price: 12 },
  ];

  return <Menu items={items} />;
};

export default MenuPage;
