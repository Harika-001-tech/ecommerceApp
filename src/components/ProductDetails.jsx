import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-600">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center text-red-600">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 h-96 object-contain"
      />
      <div className="flex flex-col flex-grow">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-indigo-600 font-bold text-xl mb-6">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
