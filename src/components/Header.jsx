import './Header.css'
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <header className="header">

      <div className="logo">
        <Link to="/">E-commerce App</Link>
      </div>

      <div className="cart-icon">
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>

    </header>
  );
};

export default Header;
