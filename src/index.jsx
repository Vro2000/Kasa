import React from 'react';
import { createRoot } from 'react-dom/client'; //méthode spécifique à React 18, remplaçe l'ancienne méthode ReactDOM.render.
import App from './App';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container); // Crée une racine.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
