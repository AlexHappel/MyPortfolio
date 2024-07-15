import React from 'react';
import DeveloperInfo from '../components/DeveloperInfo';

const About = () => (
    <section>
        <DeveloperInfo imageUrl={null} /> {/* Update imageUrl with the real image path when available */}
        <p>Short bio about the developer.</p>
    </section>
);

export default About;