import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Startseite from './components/Startseite';
import Kategorie from './components/Kategorie';
import UeberUns from './components/UeberUns';
import Kontakt from './components/Kontakt';
import Warenkorb from './components/Warenkorb';
import NotFound from './components/NotFound';
import './styles/App.css';
// import 'https://fonts.googleapis.com/icon?family=Material+Icons';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('alle');
  const [filteredProducts, setFilteredProducts] = useState([
    // Sample products, replace with actual product data
    { id: 1, name: 'Produkt 1', category: 'Kleidung', price: '19,99', image: 'produkt1.jpg' },
    { id: 2, name: 'Produkt 2', category: 'Schuhe', price: '24,99', image: 'produkt2.jpg' },
  ]);

  const search = () => {
    // Implement search functionality here
  };

  const addToCart = (productId) => {
    // Implement add to cart functionality here
  };

  return (
    <div>
      <nav className="nav-primary">
        <Link to="/warenkorb">
          <i className="fas fa-shopping-cart"></i> 
        </Link>
      </nav>

      <header className="header-logo">
        <img src={`${process.env.PUBLIC_URL}/Mein Logo.png`} alt="Logo" className="logo" />
        <span className="subtitle">Black and White</span>
      </header>

      <nav>
        <Link to="/">Startseite</Link>
        <Link to="/kategorie">Kategorie</Link>
        <Link to="/ueber-uns">Über uns</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/kategorie" element={<Kategorie />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/warenkorb" element={<Warenkorb />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      

    </div>
    
  );
}



export default App;


