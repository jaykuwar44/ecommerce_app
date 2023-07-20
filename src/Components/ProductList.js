import React from 'react';
import productsData from '../data/product.json';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();

  const viewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <h2 className='title'>Product List</h2>
      <div className="product-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`/image/${product.image}`} alt={product.name} />
            <div className="product-info text-center">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => viewDetails(product.id)} className='btn bg-primary text-light'>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
