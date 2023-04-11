import React from 'react';
import NewsContainer from '../Consultancy/NewsContainer';
import HomeSliders04 from './HomeSliders04';
import InsuranceAbout from './InsuranceAbout';
import InsuranceCaseStudy from './InsuranceCaseStudy';
import InsuranceContact from './InsuranceContact';
import InsuranceServices from './InsuranceServices';
import InsuranceTestimonials from './InsuranceTestimonials';

const InsuranceHome = () => {
    return (
        <>
            <HomeSliders04 />
            <InsuranceCaseStudy />
            <InsuranceServices />
            <InsuranceAbout />
            <InsuranceTestimonials />
            <NewsContainer />
            <InsuranceContact />
        </>
    );
};

export default InsuranceHome;