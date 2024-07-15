import React from 'react';
import placeholderImage from '../images/myPhoto.jpg'; // Ensure you have a placeholder image in your assets
import './DeveloperInfo.css';

const DeveloperInfo = ({ name, imageUrl, bio }) => {
  return (
    <div className="developer-info">
      <img src={imageUrl || placeholderImage} alt={name} className="developer-image" />
      <p className="developer-bio">{bio}</p>
    </div>
  );
};

export default DeveloperInfo;