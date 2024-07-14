import React from 'react';

const Project = ({ title, imageUrl, deployUrl, repoUrl }) => (
        <div>
            <h3>{title}</h3>
            <a href={deployUrl} target="_blank" rel="noopener noreferrer">
            <img src={imageUrl} alt={title} />
            </a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
);

export default Project;