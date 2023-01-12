import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartSectionStyle.css";
import CartItem1 from "../../Images/cart-item1.png";
import CartItem2 from "../../Images/cart-item2.png";
import CartItem3 from "../../Images/cart-item3.png";
import CartItem4 from "../../Images/cart-item4.png";
import { FaRegTrashAlt } from "react-icons/fa";

const CartSection = () => {
  const [quantity, setQuantity] = useState(1);
  let price;

  const handleIncrement = () => {
    if (quantity < 100) {
      setQuantity((count) => count + 1);
    }
  };

  const handledecrement = () => {
    if (quantity > 1) {
      setQuantity((count) => count - 1);
    }
  };

  return (
    <div className="cart-section">
      <div className="container">
        <div className="cart-container">
          <div className="cart-top">
            <h1>Cart</h1>
            <div className="cart-links">
              <Link to="/">Home</Link>
              <Link to="/Cart">Cart</Link>
            </div>
          </div>
          <div className="cart-item">
            <table>
              <tr>
                <th className="row-title">Image</th>
                <th className="row-title">Product name</th>
                <th className="row-title">Price</th>
                <th className="row-title">Quantity</th>
                <th className="row-title">Total</th>
                <th className="row-title">Trash</th>
              </tr>
              <tr>
                <td>
                  <img src={CartItem1} alt="Cart-Img" />
                </td>
                <td className="product">Anti-virus Mask</td>
                <td className="price">Rs. {(price = 19.0)}</td>
                <td>
                  <div className="quantity-box">
                    <button className="dec-btn" onClick={handledecrement}>
                      -
                    </button>
                    <div className="quantity">{quantity}</div>
                    <button className="inc-btn" onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                </td>
                <td className="total-price">Rs. {price * quantity}</td>
                <td>
                  <FaRegTrashAlt className="trash-icon" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={CartItem2} alt="Cart-Img" />
                </td>
                <td className="product">Personal Vaporizer</td>
                <td className="price">Rs. {(price = 59.0)}</td>
                <td>
                  <div className="quantity-box">
                    <button className="dec-btn" onClick={handledecrement}>
                      -
                    </button>
                    <div className="quantity">{quantity}</div>
                    <button className="inc-btn" onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                </td>
                <td className="total-price">Rs. {price * quantity}</td>
                <td>
                  <FaRegTrashAlt className="trash-icon" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={CartItem3} alt="Cart-Img" />
                </td>
                <td className="product">Blood Pressure Monitor</td>
                <td className="price">Rs. {(price = 99.0)}</td>
                <td>
                  <div className="quantity-box">
                    <button className="dec-btn" onClick={handledecrement}>
                      -
                    </button>
                    <div className="quantity">{quantity}</div>
                    <button className="inc-btn" onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                </td>
                <td className="total-price">Rs. {price * quantity}</td>
                <td>
                  <FaRegTrashAlt className="trash-icon" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={CartItem4} alt="Cart-Img" />
                </td>
                <td className="product">Hand Sanitizer Gel</td>
                <td className="price">Rs. {(price = 29.0)}</td>
                <td>
                  <div className="quantity-box">
                    <button className="dec-btn" onClick={handledecrement}>
                      -
                    </button>
                    <div className="quantity">{quantity}</div>
                    <button className="inc-btn" onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                </td>
                <td className="total-price">Rs. {price * quantity}</td>
                <td>
                  <FaRegTrashAlt className="trash-icon" />
                </td>
              </tr>
            </table>

            <div className="cart-buttons">
              <div className="coupon-box">
                <input type="text" name="" id="" />
                <button className="coupon-btn">Apply Coupon</button>
              </div>
              <div className="coupon-btn-s">
                <button className="update-btn">Update Cart</button>
              </div>
            </div>
          </div>

          <div className="cart-checkout">
            <h2>Checkout Summary</h2>
            <hr className="dark-line" />
            <span>Subtotal</span> <span>Rs. 196</span>
            <hr className="light-line" />
            <span>Shipping</span> <span>Rs. 196</span>
            <hr className="light-line" />
            <span>Total</span> <span>Rs. 196</span>
            <hr className="light-line" />
            <span>Payable</span> <span>Total Rs. 196</span>
            <button className="proceed-btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
