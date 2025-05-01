import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center text-gray-600">
        Your cart is empty. <Link to="/" className="text-indigo-600 hover:underline">Shop now</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-indigo-600 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:text-red-800"
              aria-label={`Remove ${item.title} from cart`}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <Link
          to="/checkout"
          className="inline-block mt-4 bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
