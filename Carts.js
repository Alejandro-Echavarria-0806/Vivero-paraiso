import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => (
  <div className="cart">
    <h2>Carrito de Compras</h2>
    {cartItems.map(item => (
      <div key={item.id} className="cart-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.price} USD</p>
        <button onClick={() => removeFromCart(item.id)}>Suprimir</button>
      </div>
    ))}
    <button>Pagar</button>
  </div>
);

export default Cart;
