import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>  {/* Replace Switch with Routes */}
        <Route path="/" element={<Home />} />  {/* Updated Route syntax */}
        <Route path="/menu" element={<MenuPage />} />  {/* Updated Route syntax */}
        <Route path="/cart" element={<CartPage />} />  {/* Updated Route syntax */}
      </Routes>
    </Router>
  );
}

export default App;
