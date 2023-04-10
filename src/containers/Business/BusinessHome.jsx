import React from 'react';
import ContactForm02 from '../../components/BusinessElements/ContactForm02';
import TeamContainer02 from '../Business/TeamContainer02';
import BusinessIdeas from './BusinessIdeas';
import BusinessProcess from './BusinessProcess';
import BusinessServices from './BusinessServices';
import BusinessSliders from './BusinessSliders';
import NewsContainer02 from './NewsContainer02';
import Testimonials02 from './Testimonials02';

const BusinessHome = () => {
    return (
        <>
            {/* <!-- Slider Section --> */}
            <BusinessSliders />
            <BusinessServices />
            <BusinessProcess />
            <BusinessIdeas />
            <TeamContainer02 />
            <ContactForm02 />
            <NewsContainer02 />
            <Testimonials02 />
        </>
    );
};

export default BusinessHome;