// src/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const toggleWishlist = (id) => {
    setWishlistItems(prevItems => {
      if (prevItems.find(item => item.id === id)) {
        return prevItems.filter(item => item.id !== id);
      } else {
        const item = cartItems.find(item => item.id === id);
        return [...prevItems, item];
      }
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems, wishlistItems, addToCart, updateQuantity, removeItem, toggleWishlist, getTotalPrice, getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
