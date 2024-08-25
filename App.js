import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Ficus', price: 10, image: '/images/ficus.jpg' },
    { id: 2, name: 'Monstera', price: 15, image: '/images/monstera.jpg' },
    // Añade más productos aquí
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/products">
          <ProductList products={products} addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
