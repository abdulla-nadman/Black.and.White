// src/components/Warenkorb.jsx
import React, { useContext } from 'react';
import '../styles/Warenkorb.css';
import { CartContext } from '../CartContext';
import ProductCardCart from './ProductCardCart';

const Warenkorb = () => {
  const { cartItems, wishlistItems, addToCart, updateQuantity, removeItem, toggleWishlist, getTotalPrice } = useContext(CartContext);

  const checkout = () => {
    alert('Checkout functionality not implemented');
  };

  return (
    <div className="warenkorb-page">
      <div className="warenkorb-container">
        <h1>Your bag ({cartItems.length} items)</h1>
        <div className="shipping-info">
          <i className="fas fa-shipping-fast"></i>
          <span>Parcel shipped by Zalando</span>
          <span>Tomorrow, 27/07 - Tue, 30/07</span>
        </div>
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <ProductCardCart
                product={item}
                addToCart={addToCart}
                removeFromCart={removeItem}
                toggleWishlist={toggleWishlist}
                isWishlisted={wishlistItems.some(wishlistItem => wishlistItem.id === item.id)}
              />
              <div className="quantity-select">
                <label htmlFor={`quantity-${item.id}`}>Quantity</label>
                <select
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                >
                  {[...Array(10).keys()].map(n => (
                    <option key={n} value={n + 1}>{n + 1}</option>
                  ))}
                </select>
                <p className="product-price">{(item.price * item.quantity).toFixed(2)} €</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="summary-container">
        <div className="summary">
          <p className="subtotal">Subtotal: <span>{getTotalPrice().toFixed(2)} €</span></p>
          <p className="delivery">Delivery: <span>0.00 €</span></p>
          <div className="separator-line"></div>
          <p className="total">Total (VAT included): <span>{getTotalPrice().toFixed(2)} €</span></p>
          <button className="checkout-button" onClick={checkout}>Go to checkout</button>
        </div>
        <div className="payment-methods">
          <p>We accept</p>
          <div className="payment-icons">
            <img src="/icons/mastercard.svg" alt="Mastercard" className="payment-icon" />
            <img src="/icons/visa.svg" alt="Visa" className="payment-icon" />
            <img src="/icons/paypal.svg" alt="PayPal" className="payment-icon" />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warenkorb;
