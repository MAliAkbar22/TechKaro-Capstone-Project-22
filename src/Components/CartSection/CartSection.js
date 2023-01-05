import React from "react";
import { Link } from "react-router-dom";
import "./CartSectionStyle.css";
import CartBg from "../../Images/cart-bg.png";
import CartItem1 from "../../Images/cart-item1.png";
import CartItem2 from "../../Images/cart-item2.png";
import CartItem3 from "../../Images/cart-item3.png";
import CartItem4 from "../../Images/cart-item4.png";
import { FaRegTrashAlt } from "react-icons/fa";

const CartSection = () => {
  return (
    <div className="cart-section">
      <div className="container">
        <div className="cart-container">
          <div className="cart-top">
            <div className="cart-left">
              <img src={CartBg} alt="Cart-Bg" />
            </div>
            <div className="cart-right">
              <h1>Cart</h1>
              <Link to="/">Home</Link>
              <Link to="/Cart">Cart</Link>
            </div>
          </div>
          <div className="cart-item">
            <table>
              <tr>
                <th>Image</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Trash</th>
              </tr>
              <tr>
                <td>
                  <img src={CartItem1} alt="Cart-Img" />
                </td>
                <td>Anti-virus Mask</td>
                <td className="price">Rs 19.00</td>
                <td>
                  <div className="btn-box">
                    <button className="dec-btn">-</button>
                    {"1"}
                    <button className="dec-btn">+</button>
                  </div>
                  <td className="price">Rs 19.00</td>
                  <td>
                    <FaRegTrashAlt className="trash-icon" />
                  </td>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={CartItem2} alt="Cart-Img" />
                </td>
                <td>Personal Vaporizer</td>
                <td className="price">Rs 19.00</td>
                <td>
                  <div className="btn-box">
                    <button className="dec-btn">-</button>
                    {"1"}
                    <button className="dec-btn">+</button>
                  </div>
                  <td className="price">Rs 19.00</td>
                  <td>
                    <FaRegTrashAlt className="trash-icon" />
                  </td>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={CartItem3} alt="Cart-Img" />
                </td>
                <td>Blood Pressure Monitor</td>
                <td className="price">Rs 19.00</td>
                <td>
                  <div className="btn-box">
                    <button className="dec-btn">-</button>
                    {"1"}
                    <button className="dec-btn">+</button>
                  </div>
                  <td className="price">Rs 19.00</td>
                  <td>
                    <FaRegTrashAlt className="trash-icon" />
                  </td>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={CartItem4} alt="Cart-Img" />
                </td>
                <td>Hand Sanitizer Gel</td>
                <td className="price">Rs 19.00</td>
                <td>
                  <div className="btn-box">
                    <button className="dec-btn">-</button>
                    {"1"}
                    <button className="dec-btn">+</button>
                  </div>
                  <td className="price">Rs 19.00</td>
                  <td>
                    <FaRegTrashAlt className="trash-icon" />
                  </td>
                </td>
              </tr>
            </table>
            <div className="coupon-box">
              <input type="text" name="" id="" />
              <button className="coupon-btn">Apply Coupon</button>
            </div>
            <button className="update-btn">Update Cart</button>
          </div>

          <div className="cart-checkout">
            <h2>Checkout Summary</h2>
            <hr className="dark-line" />
            <p>Subtotal Rs. 196</p>
            <hr className="light-line" />
            <p>Shipping Rs. 196</p>
            <hr className="light-line" />
            <p>Total Rs. 196</p>
            <hr className="light-line" />
            <p>Payable Total Rs. 196</p>
            <button className="cart-btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
