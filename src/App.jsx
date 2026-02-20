import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Background />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <footer className="footer">
            <p>&copy; 2024 FakeStore. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
