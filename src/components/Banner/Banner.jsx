//src/components/Banner/Banner.jsx
import React from 'react';
import './Banner.scss'; // Assurez-vous que le chemin est correct

const Banner = ({ text, backgroundUrl }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="overlay"></div>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;

