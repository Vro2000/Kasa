// src/components/Collapse/Collapse.jsx
import React, { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ label, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
       <button className="collapse-button">
        {label}
        <img
          src={process.env.PUBLIC_URL + '/images/arrow_back_ios-24px 2.png '} alt="Icône ouvert-fermé"
          className={`collapse-icon ${isOpen ? 'rotate' : ''}`}
          onClick={toggleCollapse}
        />
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}> {content} </div>
    </div>
  );
};

export default Collapse;
