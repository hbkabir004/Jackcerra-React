import React from 'react';
import ServiceAbout from '../components/common/ServiceAbout';
import BusinessSectionAbout from './BusinessSectionAbout';
import TeamContainer from './Consultancy/TeamContainer';
import FunFact from './FunFact';
import TestimonialContainer from './TestimonialContainer';

const AboutPageContainer = () => {
    return (
        <>
            <ServiceAbout />
            <BusinessSectionAbout />
            <TeamContainer />
            <FunFact />
            <TestimonialContainer />
        </>
    );
};

export default AboutPageContainer;