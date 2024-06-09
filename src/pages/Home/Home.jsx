// src/pages/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import LogementList from '../../components/LogementList/LogementList';
import logementsJson from '../../assets/logements.json';
import './Home.scss';

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsJson);
  }, []);

  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" backgroundUrl={process.env.PUBLIC_URL + '/images/paysageMer.jpg'} altText="paysage mer"/>
      <LogementList logements={logements} />
    </div>
  );
};

export default Home;
