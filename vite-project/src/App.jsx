import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import Login from './pages/Login'; // Importa la nueva página de inicio de sesión
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} /> {/* Nueva ruta */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
