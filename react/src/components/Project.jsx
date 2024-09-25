import React from 'react';
import './Project.css';

const Project = ({ title, imageUrl, deployUrl, repoUrl }) => (
  <div className="project-box">
    <h3>{title}</h3>
    <a href={deployUrl} target="_blank" rel="noopener noreferrer"></a>
      <img src={imageUrl} alt={title} className="project-image" />
    
    <div className="project-links">
      <a href={deployUrl} target="_blank" rel="noopener noreferrer" className="project-link">Deployed Application</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
    </div>
  </div>
);

export default Project;