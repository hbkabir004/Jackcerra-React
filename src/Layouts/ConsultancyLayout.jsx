import React from 'react';
import { Outlet } from 'react-router-dom';
import ConsultancyFooter from '../components/ConsultancyElements/ConsultancyFooter';
import ConsultancyHeader from '../components/ConsultancyElements/ConsultancyHeader';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';

const ConsultancyLayout = () => {
    return (
        <>
            <>
                {/* <div className="page-wrapper"> */}
                <ConsultancyHeader />
                <Outlet />
                <ConsultancyFooter />
                {/* </div> */}
            </>
            <ScrollToTop />
        </>
    );
};

export default ConsultancyLayout;