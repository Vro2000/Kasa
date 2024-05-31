import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogementItem.scss';

const LogementItem = ({ logement }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${logement.id}`);
  };

  return (
    <figure className="logement-item" onClick={handleClick}>
      <img src={logement.cover} alt={logement.title} />
      <figcaption><p>{logement.title}</p></figcaption> 
    </figure>
  );
};

export default LogementItem;
