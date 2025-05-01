import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">Ecomm-Shop</Link>
          <nav>
            <Link to="/cart" className="text-gray-700 hover:text-indigo-600 mr-4">
              <i className="fas fa-shopping-cart"></i> Cart
            </Link>
            <Link to="/checkout" className="text-gray-700 hover:text-indigo-600">
              Checkout
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <footer className="bg-white shadow-inner py-4 text-center text-gray-600">
        &copy; 2025 Ecomm-Shop. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
