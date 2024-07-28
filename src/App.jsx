import React, { useState, useEffect } from 'react';
import { Route, Routes, Link , useLocation } from 'react-router-dom';
import Startseite from './components/Startseite';
import Kategorie from './components/Kategorie';
import UeberUns from './components/UeberUns';
import Kontakt from './components/Kontakt';
import Warenkorb from './components/Warenkorb';
import NotFound from './components/NotFound';
import WarenkorbButton from './components/WarenkorbButton'; // Import WarenkorbButton component
import SearchBar from './components/SearchBar'; // Import SearchBar component
import './styles/App.css';
import './components/Schalterknopf';








function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const isStartseite = location.pathname === '/';
  return (
    <div>
      <header className={`header-logo ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <img src={`${process.env.PUBLIC_URL}/Mein Logo.png`} alt="Logo" className="logo" />
          <span className="subtitle">Black and White</span>
        </div>
        
       

       

      </header>

      

      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/">Startseite</Link>
        <Link to="/kategorie">Kategorie</Link>
        <Link to="/ueber-uns">Über uns</Link>
        <Link to="/kontakt">Kontakt</Link>
        {isStartseite && <SearchBar isScrolled={isScrolled} />}
        <Link to="/warenkorb" className="warenkorb-button-link">
          <WarenkorbButton isScrolled={isScrolled} />
        </Link>
      </nav>


      <section className="product-showcase">
          <div className="carousel">
            <div className="product" style={{ transform: 'rotateY(0deg) translateZ(400px)' }}>Product 1</div>
            <div className="product" style={{ transform: 'rotateY(45deg) translateZ(400px)' }}>Product 2</div>
            <div className="product" style={{ transform: 'rotateY(90deg) translateZ(400px)' }}>Product 3</div>
            <div className="product" style={{ transform: 'rotateY(135deg) translateZ(400px)' }}>Product 4</div>
            <div className="product" style={{ transform: 'rotateY(180deg) translateZ(400px)' }}>Product 5</div>
            <div className="product" style={{ transform: 'rotateY(225deg) translateZ(400px)' }}>Product 6</div>
            <div className="product" style={{ transform: 'rotateY(270deg) translateZ(400px)' }}>Product 7</div>
            <div className="product" style={{ transform: 'rotateY(315deg) translateZ(400px)' }}>Product 8</div>
          </div>
        </section>

        
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


