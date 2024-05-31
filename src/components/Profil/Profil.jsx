import React from 'react';
import './Profil.scss';

const Profil = ({ imageUrl, name, rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starFile = index < rating ? 'Star-active.png' : 'star-inactive 1.png';
    return (
      <img key={index} src={`/Images/${starFile}`} alt={index < rating ? 'active star' : 'inactive star'} />
    );
  });

  return (
    <div className="profil">
      <div className="name-and-photo">
        <div className="name">{name}</div>
        <img src={imageUrl} alt={name} />
      </div>
      <div className="rating">{stars}</div>
    </div>
  );
};

export default Profil;
