// src/pages/APropos/APropos.jsx
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import aboutData from '../../assets/about.json';  // fichier créé pour alimenter les collapses A propos
import './APropos.scss';

const APropos = () => {
  return (
    <div>
      <Banner text="" backgroundUrl="/Images/paysageMontagne.jpg" />
      <div className="apropos-collapses">
        {aboutData.map((item, index) => (
          <Collapse key={index} label={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default APropos;

