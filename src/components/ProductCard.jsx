import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain p-4"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
          <p className="mt-2 text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
