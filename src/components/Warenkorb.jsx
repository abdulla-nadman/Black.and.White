// src/components/Warenkorb.jsx
import React, { useContext } from 'react';
import '../styles/Warenkorb.css';
import { CartContext } from '../CartContext';

function Warenkorb() {
  const { cartItems, updateQuantity, removeItem, getTotalPrice } = useContext(CartContext);

  const checkout = () => {
    // Implement checkout functionality here
    alert('Checkout functionality not implemented');
  };

  return (
    <div className="container">
      <h1>Warenkorb</h1>
      <div id="cart">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <div className="item-quantity">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="item-actions">
              <button onClick={() => removeItem(item.id)}>Entfernen</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        Gesamtbetrag: <span id="total-price">{getTotalPrice()}</span> €
      </div>
      <button className="checkout-button" onClick={checkout}>Zur Kasse</button>
    </div>
  );
}

export default Warenkorb;
