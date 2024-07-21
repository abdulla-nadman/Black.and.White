import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/App.css'; // Import CSS file

const Startseite = () => {
    const [searchInput, setSearchInput] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('alle');
    const [filteredProducts, setFilteredProducts] = useState([
      // Sample products, replace with actual product data
      { id: 1, name: 'Produkt 1', category: 'Kleidung', price: '19,99', image: 'produkt1.jpg' },
      { id: 2, name: 'Produkt 2', category: 'Schuhe', price: '24,99', image: 'produkt2.jpg' },
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

  const addToCart = (productId) => {
    // Implement add to cart functionality here
  };

  return (
    <div>

      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Suche..."
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="alle">Alle Kategorien</option>
          <option value="kleidung">Kleidung</option>
          <option value="schuhe">Schuhe</option>
          <option value="accessoires">Accessoires</option>
        </select>
        <button onClick={search}>Suchen</button>
      </div>

      <div className="container">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Kategorie: {product.category}</p>
            <p>Beschreibung des Produkts...</p>
            <p>Preis: {product.price} €</p>
            <button onClick={() => addToCart(product.id)}>Zum Warenkorb hinzufügen</button>
          </div>
        ))}
      </div>





      <footer>
        &copy; 2024 Black and White | <a href="#">Datenschutz</a> | <a href="#">AGB</a>
      </footer>
    </div>
  );
};

export default Startseite;
