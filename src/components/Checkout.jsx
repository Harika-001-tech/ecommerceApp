import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, here would be API call to process order
    setSubmitted(true);
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (cartItems.length === 0 && !submitted) {
    return (
      <div className="text-center text-gray-600">
        Your cart is empty. Please add items before checkout.
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Thank you for your purchase!</h2>
        <p className="text-gray-700">Your order has been received and is being processed.</p>
        <p className="mt-4 text-gray-600">You will be redirected to the homepage shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="address" className="block font-semibold mb-1">Address</label>
          <textarea
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="3"
          />
        </div>
        <div className="text-right font-bold text-xl text-indigo-600">
          Total: ${totalPrice.toFixed(2)}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
