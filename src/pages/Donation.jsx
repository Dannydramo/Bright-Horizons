import React from 'react';
import Donate from '../components/DonationPage/Donate';
import Contribute from '../components/DonationPage/Contribute';
import VolunteerSection from '../components/VolunteerSection';

const Donation = () => {
    return (
        <>
            <Donate />
            <Contribute />
            <VolunteerSection />
        </>
    );
};

export default Donation;
