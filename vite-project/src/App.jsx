import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CartPage from './pages/CartPage';
import Promos from './pages/Promos';
import Benefits from './pages/Benefits';
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      toast.success(`${product.name} ha sido añadido al carrito.`);
      return updatedCart;
    });
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const product = prevCart[index];
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      toast.warn(`${product.name} ha sido eliminado del carrito.`);
      return updatedCart;
    });
  };

  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/cases" element={<Cases addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartPage cartItems={cart} removeFromCart={removeFromCart} />} />
            <Route path="/promos" element={<Promos addToCart={addToCart} />} />
            <Route path="/benefits" element={<Benefits />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
