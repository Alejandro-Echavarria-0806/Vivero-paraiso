import React from 'react';

const Product = ({ product, addToCart }) => (
  <div className="product">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.price} USD</p>
    <button onClick={() => addToCart(product)}>Añadir al carrito</button>
  </div>
);

export default Product;
