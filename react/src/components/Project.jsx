import React from 'react';
import './Project.css';

const Project = ({ title, imageUrl, deployUrl, repoUrl }) => {
  // Check if the project is Whiskey Reclusiam
  const isWhiskeyReclusiam = title === 'Whiskey Reclusiam';

  return (
    <div className="project-box">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} className="project-image" />
      
      <div className="project-links">
        {isWhiskeyReclusiam ? (
          
          <a href={deployUrl} className="project-link">Deployed Application</a>
        ) : (
        
          <a href={deployUrl} target="_blank" rel="noopener noreferrer" className="project-link">Deployed Application</a>
        )}
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;