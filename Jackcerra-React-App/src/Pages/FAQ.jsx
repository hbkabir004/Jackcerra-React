import React from 'react';
import Accordion from '../components/common/Accordion';
import PageHeader from '../components/common/PageHeader';

const FAQ = () => {
    return (
        <div className='page-wrapper mt-3'>
            <PageHeader title='FAQ' active='FAQ' route02='PAGES' />
            <Accordion />
        </div>
    );
};

export default FAQ;