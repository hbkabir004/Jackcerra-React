import React from 'react';
import { Outlet } from 'react-router-dom';
import '../assets/css/business.css';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';
import BusinessFooter from '../containers/Business/BusinessFooter';
import BusinessHeader from '../containers/Business/BusinessHeader';

const BusinessLayout = () => {
    return (
        <div className='business'>
            <div className="page-wrapper">
                <BusinessHeader />
                <Outlet />
                <BusinessFooter />

            </div>
            <ScrollToTop />
        </div>
    );
};

export default BusinessLayout;