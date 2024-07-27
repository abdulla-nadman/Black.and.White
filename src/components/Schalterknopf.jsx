import React, { useState } from 'react';
import 'styles/App.css'; // Importiere deine CSS-Datei

const App = () => {
  const [navActive, setNavActive] = useState(false);
  const [theme, setTheme] = useState('dark-theme');

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'));
  };

  return (
    <div className={`App ${theme}`}>
      <nav className={`mobile-nav ${navActive ? 'active' : ''}`}>
        <button className="nav-menu-btn" onClick={toggleNav}>
          Menu
        </button>
        {navActive && (
          <button className="nav-close-btn" onClick={toggleNav}>
            Close
          </button>
        )}
      </nav>

      <div className="theme-toggle">
        <button className={`theme-btn ${theme === 'light-theme' ? 'light' : 'dark'}`} onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default App;
