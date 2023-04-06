import React from 'react';
import { Outlet } from 'react-router-dom';
import '../assets/css/business.css';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';
import BusinessFooter from '../containers/Business/BusinessFooter';
import BusinessHeader from '../containers/Business/BusinessHeader';

const BusinessLayout = () => {
    return (
        <>
            <>
                <BusinessHeader />
                <Outlet />
                <BusinessFooter />

            </>
            <ScrollToTop />
        </>
    );
};

export default BusinessLayout;