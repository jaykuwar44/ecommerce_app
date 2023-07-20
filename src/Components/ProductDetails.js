import React, { useState } from 'react';
import productsData from '../data/product.json';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <div className="product-card">
        <img src={`/image/${product.image}`} alt={product.name} />
        <div className="product-info mx-5">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={changeQuantity}
          />
          <button className='btn bg-primary text-light'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
