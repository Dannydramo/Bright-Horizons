import React from 'react';
import NonProfit from '../components/AboutPage/NonProfit';
import Award from '../components/AboutPage/Award';
import VolunteerSection from '../components/VolunteerSection';

const About = () => {
    return (
        <div>
            <NonProfit />
            <Award />
            <VolunteerSection />
        </div>
    );
};

export default About;
