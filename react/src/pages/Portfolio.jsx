import React from 'react';

const projects = [
    {
    title: 'Project 1',
    imageUrl: '/path-to-project1-image.jpg',
    deployUrl: 'https://deploy-link1.com',
    repoUrl: 'https://github.com/username/project1',
    },
    {
    title: 'Project 2',
    imageUrl: '/path-to-project1-image.jpg',
    deployUrl: 'https://deploy-link1.com',
    repoUrl: 'https://github.com/username/project1',
    },
    {
    title: 'Project 3',
    imageUrl: '/path-to-project1-image.jpg',
    deployUrl: 'https://deploy-link1.com',
    repoUrl: 'https://github.com/username/project1',
    },
    {
    title: 'Project 4',
    imageUrl: '/path-to-project1-image.jpg',
    deployUrl: 'https://deploy-link1.com',
    repoUrl: 'https://github.com/username/project1',
    },
    {
    title: 'Project 5',
    imageUrl: '/path-to-project1-image.jpg',
    deployUrl: 'https://deploy-link1.com',
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