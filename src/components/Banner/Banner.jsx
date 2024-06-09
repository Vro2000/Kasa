//src/components/Banner/Banner.jsx
import React from 'react';
import './Banner.scss';

const Banner = ({ text, backgroundUrl, altText, showOverlay = true }) => {
  return (
    <div className="banner">
      <img src={backgroundUrl} alt={altText} className="background-image" />
      {showOverlay && <div className="overlay"></div>}
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;

