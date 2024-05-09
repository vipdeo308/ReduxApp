import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductList = () => {
  const products = useSelector((state) => state.products); // Assuming you have a products slice
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded shadow">
          <img src={product.thumbnail} alt={product.title} className="w-full" />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
