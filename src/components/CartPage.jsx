import React from "react";
import './CartPage.css'

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {

  const calculateTotalCollective = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img src={item.image} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                <button
                  className="blue"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="blue"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <br className="br" />


      <div className="total-section">
        <h5 className="h5">Total : ${calculateTotalCollective().toFixed(2)}</h5>
        <button className="order-button">Order</button>
      </div>
    </div>
  );
};

export default CartPage;
