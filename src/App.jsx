// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

const Home = ({ addToCart, removeFromCart, cartItems, setCartItems }) => (
  <div>
    <ProductList addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} setCartItems={setCartItems}
    />
  </div>
);



const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: Math.max(newQuantity, 1) }; // we ensure quantity doesn't go below 1
      }
      return item;
    });
    setCartItems(updatedCart);
  };


  return (
    <Router>
      <div>
        <Header cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <Home addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
