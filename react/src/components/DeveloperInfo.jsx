import React from 'react';
import placeholderImage from '../images/myPhoto.jpg'; // Ensure you have a placeholder image in your assets

const DeveloperInfo = ({ name, imageUrl }) => {
  return (
    <div className="developer-info">
      <h2>{name}</h2>
      <img src={imageUrl || placeholderImage} alt={name} className="developer-image" />
    </div>
  );
};

export default DeveloperInfo;