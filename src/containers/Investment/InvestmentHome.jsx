import React from 'react';
import NewsContainer02 from '../Business/NewsContainer02';
import CTA from './CTA';
import InvestmentCaseStudy from './InvestmentCaseStudy';
import InvestmentChart from './InvestmentChart';
import InvestmentProcess from './InvestmentProcess';
import InvestmentServices from './InvestmentServices';
import InvestmentSlider from './InvestmentSlider';
import InvestmentTestimonials from './InvestmentTestimonials';
import WhyChooseUs from './WhyChooseUs';

const InvestmentHome = () => {
    return (
        <>
            <InvestmentSlider />
            <InvestmentServices />
            <InvestmentCaseStudy />
            <WhyChooseUs />
            <CTA />
            <InvestmentProcess />
            <InvestmentChart />


            ,<InvestmentTestimonials />

            <NewsContainer02 />
        </>
    );
};

export default InvestmentHome;