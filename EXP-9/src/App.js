// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <nav style={styles.navbar}>
        <h1 style={styles.title}>Easy Shopping</h1>
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/products" style={styles.link}>Products</Link></li>
          <li><Link to="/cart" style={styles.link}>Cart</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333' },
  title: { color: '#fff' },
  navLinks: { listStyle: 'none', display: 'flex', gap: '1rem' },
  link: { color: '#fff', textDecoration: 'none' },
};

export default App;
