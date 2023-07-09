import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import './CardComponent.css';

export const CardComponent = ({ item }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={item.image} alt={item.id} width="250px" height="250px" />
      </div>
      <div className="name-container">
        <p>
          <MdLocationOn /> {item.name}
        </p>
      </div>
    </div>
  );
};
