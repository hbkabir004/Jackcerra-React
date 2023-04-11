import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';
import InvestmentFooter from '../containers/Investment/InvestmentFooter';
import InvestmentHeader from '../containers/Investment/InvestmentHeader';

const InvestmentLayout = () => {
    return (
        <div className='investment'>
            <div className="page-wrapper">
                <InvestmentHeader />
                <Outlet />
                <InvestmentFooter />

            </div>
            <ScrollToTop />
        </div>
    );
};

export default InvestmentLayout;