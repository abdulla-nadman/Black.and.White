import React from 'react';
import '../styles/Kontakt.css'; // Specific styles for Kontakt page

function Kontakt() {
  return (
    <div className="container">
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">E-Mail:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Nachricht:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Absenden</button>
      </form>
    </div>
  );
}

export default Kontakt;
