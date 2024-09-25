import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';

const projects = [
    {
    title: 'The Mood Bar',
    imageUrl: '/src/images/the mood bar.PNG',
    deployUrl: "https://eddiehinojosa.github.io/TheMoodBar/",
    repoUrl: 'https://github.com/AlexHappel/TheMoodBar',
    },
    {
    title: 'Zazzled',
    imageUrl: '/src/images/zozzled.PNG',
    deployUrl: "https://zozzled.onrender.com",
    repoUrl: 'https://github.com/AlexHappel/Cocktail-Directory',
    },
    {
    title: 'P2Omnissiah',
    imageUrl: '/src/images/P2omnissiah.PNG',
    deployUrl: "https://p2omnissiah.onrender.com",
    repoUrl: 'https://github.com/AlexHappel/P2Omnissiah',
    },
    {
    title: 'Agora',
    imageUrl: '/src/images/Agora.PNG',
    deployUrl: "https://agora-crafts.onrender.com/",
    repoUrl: 'https://github.com/AlexHappel/Agora',
    },
    {
    title: 'Whiskey Reclusiam',
    imageUrl: '/src/images/Work-in-Progress.jpg',
    deployUrl: "",
    repoUrl: 'https://github.com/AlexHappel/Whiskey',
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