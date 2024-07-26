import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App';
import { CartProvider } from './CartContext';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Correct usage

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found.");
}
