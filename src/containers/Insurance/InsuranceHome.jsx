import React from 'react';
import NewsContainer from '../Consultancy/NewsContainer';
import InsuranceAbout from './InsuranceAbout';
import InsuranceCaseStudy from './InsuranceCaseStudy';
import InsuranceContact from './InsuranceContact';
import InsuranceServices from './InsuranceServices';
import InsuranceTestimonials from './InsuranceTestimonials';

const InsuranceHome = () => {
    return (
        <>
            {/* <!-- Slider Section --> */}
            {/* <div className='mb-5 mt-5'></div> */}
            {/* <!-- End Slider Section --> */}

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