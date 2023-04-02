import React from 'react';
import { Outlet } from 'react-router-dom';
import ConsultancyFooter from '../components/ConsultancyElements/ConsultancyFooter';
import ConsultancyHeader from '../components/ConsultancyElements/ConsultancyHeader';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';

const ConsultancyLayout = () => {
    return (
        <>
            <ConsultancyHeader />
            <Outlet />
            <ConsultancyFooter />
            <ScrollToTop />
        </>
    );
};

export default ConsultancyLayout;