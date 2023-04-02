import React from 'react';
import { Outlet } from 'react-router-dom';
import ConsultancyFooter from '../components/ConsultancyElements/ConsultancyFooter';
import ConsultancyHeader from '../components/ConsultancyElements/ConsultancyHeader';

const ConsultancyLayout = () => {
    return (
        <>
            <ConsultancyHeader />
            <Outlet />
            <ConsultancyFooter />
        </>
    );
};

export default ConsultancyLayout;