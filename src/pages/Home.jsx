import React from 'react';
import Hero from '../components/HomePage/Hero';
import KnowAbout from '../components/HomePage/KnowAbout';
import WhatWeDo from '../components/HomePage/WhatWeDo';
import ProjectsDone from '../components/HomePage/ProjectsDone';
import VolunteerSection from '../components/VolunteerSection';

const Home = () => {
    return (
        <>
            <Hero />
            <KnowAbout />
            <WhatWeDo />
            <ProjectsDone />
            <VolunteerSection />
        </>
    );
};

export default Home;
