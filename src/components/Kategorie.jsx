import React from 'react';
import 'styles/Kategorie.css';

function Kategorie() {
  return (
    <div className="container">
      <div className="product">
        <img src={`${process.env.PUBLIC_URL}/produkt1.jpg`} alt="Produkt 1" />
        <h2>Produkt 1</h2>
        <p>Beschreibung des Produkts 1...</p>
        <p>Preis: 19,99 €</p>
        <button>Zum Warenkorb hinzufügen</button>
      </div>
      <div className="product">
        <img src={`${process.env.PUBLIC_URL}/produkt2.jpg`} alt="Produkt 2" />
        <h2>Produkt 2</h2>
        <p>Beschreibung des Produkts 2...</p>
        <p>Preis: 24,99 €</p>
        <button>Zum Warenkorb hinzufügen</button>
      </div>
    </div>
  );
}

export default Kategorie;
