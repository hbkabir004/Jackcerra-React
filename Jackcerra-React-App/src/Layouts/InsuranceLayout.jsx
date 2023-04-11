import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';
import InsuranceFooter from '../containers/Insurance/InsuranceFooter';
import InsuranceHeader from '../containers/Insurance/InsuranceHeader';

const InsuranceLayout = () => {
    return (
        <div className='insurance'>
            <div className="page-wrapper">
                <InsuranceHeader />
                <Outlet />
                <InsuranceFooter />

            </div>
            <ScrollToTop />
        </div>
    );
};

export default InsuranceLayout;