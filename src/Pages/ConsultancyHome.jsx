import React from 'react';
import CallToAction from '../components/ConsultancyElements/CallToAction';
import ContactForm from '../components/ConsultancyElements/ContactForm';
import About from '../containers/Consultancy/About';
import BusinessSection02 from '../containers/Consultancy/BusinessSection02';
import BussinessSection from '../containers/Consultancy/BussinessSection';
import MainSliders from '../containers/Consultancy/MainSliders';
import NewsContainer from '../containers/Consultancy/NewsContainer';
import ProcessSection from '../containers/Consultancy/ProcessSection';
import TeamContainer from '../containers/Consultancy/TeamContainer';
import Testimonials from '../containers/Consultancy/Testimonials';

const ConsultancyHome = () => {
    return (
        <>
            <MainSliders />
            <About />
            <BussinessSection />
            <BusinessSection02 />
            <TeamContainer />
            <CallToAction />
            <ProcessSection />
            <Testimonials textColor='text-white' />
            <NewsContainer />
            <ContactForm />
        </>
    );
};

export default ConsultancyHome;