import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
