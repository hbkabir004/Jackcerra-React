import React from 'react';
import PageHeader from '../components/common/PageHeader';
import AboutPageContainer from '../containers/AboutPageContainer';

const AboutPage = () => {
    return (
        <div className="page-wrapper">
            <PageHeader title='About Us' active='ABOUT' routeClass='d-none' />

            <AboutPageContainer />
        </div>
    );
};

export default AboutPage;