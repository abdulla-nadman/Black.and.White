// src/components/Startseite.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../styles/Startseite.css'; // Import CSS file
import { CartContext } from '../CartContext';
import ProductCard from './ProductCard'; 

const Startseite = () => {
  const { addToCart } = useContext(CartContext);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('alle');
  const [filteredProducts, setFilteredProducts] = useState([
    // Sample products, replace with actual product data
    { id: 1, name: 'Produkt 1', category: 'Kleidung', color: 'Red',size:'M', price: '19.99', image: 'produkt1.jpg' },
    { id: 2, name: 'Produkt 2', category: 'Schuhe', color: 'Blue',size:'M', price: '24.99', image: 'produkt2.jpg' },
    { id: 3, name: 'Produkt 3', category: 'Schuhe', color: 'Green',size:'M', price: '34.99', image: 'produkt3.jpg' },
    { id: 4, name: 'Produkt 4', category: 'Schuhe', color: 'Green',size:'M', price: '44.99', image: 'produkt4.jpg' },
  ]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/items')
      .then(response => {
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const search = () => {
    // Implement search functionality here
  };

  return (
    <div>
      

      <div className="container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <footer>
        &copy; 2024 Black and White | <a href="#">Datenschutz</a> | <a href="#">AGB</a>
      </footer>
    </div>
  );
};

export default Startseite;
