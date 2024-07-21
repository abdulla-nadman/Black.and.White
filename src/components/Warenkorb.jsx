import React, { useState } from 'react';
import '../styles/Warenkorb.css';

function Warenkorb() {
  const [cartItems, setCartItems] = useState([
    // Example items, replace with actual cart data
    { id: 1, name: 'Produkt 1', quantity: 1, price: 19.99 },
    { id: 2, name: 'Produkt 2', quantity: 2, price: 24.99 },
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: quantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

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
