// src/pages/Erreur404/Erreur404.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Erreur404.scss';

const Erreur404 = () => {
  return (
    <div>
      <div className="erreur-container">
        <h1>404</h1>
        <p>Oups! la page que vous demandez n'existe pas.</p>
        <NavLink to="/" className='link'>Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  );
};

export default Erreur404;
