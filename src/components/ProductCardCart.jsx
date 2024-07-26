// src/components/ProductCardCart.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductCardCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt as solidTrashAlt, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt as regularTrashAlt, faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const ProductCardCart = ({
  product = { color: 'N/A' }, // Default value for product
  addToCart = () => {}, // Default value for addToCart
  removeFromCart,
  toggleWishlist,
  isWishlisted
}) => {
  const formattedPrice = (Math.round(product.price * product.quantity * 100) / 100).toFixed(2);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} className="product-image"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-color">Color: {product.color}</p>
          <p className="product-size">Size: {product.size}</p>
        </div>
        <div className="product-actions">
          <button className="action-button" onClick={() => removeFromCart(product.id)}>
            <FontAwesomeIcon icon={regularTrashAlt} className="regular-icon" />
            <FontAwesomeIcon icon={solidTrashAlt} className="solid-icon" />
          </button>
          <button className={`action-button ${isWishlisted ? 'wishlisted' : ''}`} onClick={() => toggleWishlist(product.id)}>
            <FontAwesomeIcon 
              icon={regularHeart} 
              className={`regular-icon ${isWishlisted ? 'wishlisted' : ''}`} 
            />
            <FontAwesomeIcon 
              icon={solidHeart} 
              className={`solid-icon ${isWishlisted ? 'wishlisted' : ''}`} 
            />
          </button>
        </div>
      </div>
      <div className="product-price">
        <p>{formattedPrice} €</p>
      </div>
    </div>
  );
};

ProductCardCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  toggleWishlist: PropTypes.func.isRequired,
  isWishlisted: PropTypes.bool.isRequired, // Add prop type for isWishlisted
};

export default ProductCardCart;
