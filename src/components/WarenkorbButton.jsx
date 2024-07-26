// src/components/WarenkorbButton.jsx
import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../CartContext';
import '../styles/WarenkorbButton.css';

const WarenkorbButton = ({ isScrolled }) => {
  const { getItemCount } = useContext(CartContext);
  const itemCount = getItemCount();

  return (
    <Button className={`custom-button ${isScrolled ? 'scrolled' : ''}`}>
      <div className="custom-button-content">
        <div className="cart-icon-container">
          <ShoppingCartIcon className={`custom-cart-icon ${isScrolled ? 'scrolled' : ''}`} />
          {itemCount > 0 && <div className="cart-badge">{itemCount}</div>}
        </div>
        <span className="button-text">Basket</span>
      </div>
    </Button>
  );
};

export default WarenkorbButton;
