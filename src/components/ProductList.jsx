import './ProductList.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = ({ addToCart, removeFromCart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")

      .then((response) => {
        setProducts(response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="product-list">

        {products.map((product) => (
          
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <button className="btnAdd" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button className="btnRemove" onClick={() => removeFromCart(product.id)}>
              Remove
            </button>

          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
