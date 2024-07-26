import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} className="product-image"/>
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-category">{product.category}</p>
        <p className="product-price">{product.price} €</p>
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>
          Zum Warenkorb hinzufügen
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
