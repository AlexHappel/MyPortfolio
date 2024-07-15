import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';

const projects = [
    {
    title: 'The Mood Bar',
    imageUrl: '/path-to-project1-image.jpg',
    repoUrl: 'https://github.com/AlexHappel/TheMoodBar',
    },
    {
    title: 'Zazzled',
    imageUrl: '/path-to-project1-image.jpg',
    repoUrl: 'https://github.com/AlexHappel/Cocktail-Directory',
    },
    {
    title: 'P2Omnissiah',
    imageUrl: '/path-to-project1-image.jpg',
    repoUrl: 'https://github.com/AlexHappel/P2Omnissiah',
    },
    {
    title: 'Project 4',
    imageUrl: '/path-to-project1-image.jpg',
    repoUrl: 'https://github.com/username/project1',
    },
    {
    title: 'Project 5',
    imageUrl: '/path-to-project1-image.jpg',
    repoUrl: 'https://github.com/username/project1',
    },

];

const Portfolio = () => (
    <section>
        <h2>Portfolio</h2>
        <div>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    deployUrl={project.deployUrl}
                    repoUrl={project.repoUrl}
                />
            ))}
        </div>
    </section>
);

export default Portfolio;