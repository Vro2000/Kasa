import React from 'react';
import LogementItem from '../LogementItem/LogementItem';
import './LogementList.scss';

const LogementList = ({ logements }) => {
  return (
    <div className="logement-list">
      {logements.map(logement => (
        <LogementItem key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default LogementList;
