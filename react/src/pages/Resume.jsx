import React from 'react';
import './Resume.css';

const Resume = () => (
    <div className="resume-container">
        <div className="resume-content">
            <h2>Resume</h2>
            <p>Download my resume <a href="react\src\assets\Resume-Happel.pdf" download>here</a>.</p>
            <h3>Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>Express.jsNode.js</li>
                <li>React</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>NoSQL</li>
            </ul>
        </div>
    </div>
);

export default Resume;