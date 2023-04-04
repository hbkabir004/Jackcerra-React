import React from 'react';
import Accordion from '../components/common/Accordion';
import PageHeader from '../components/common/PageHeader';

const FAQ = () => {
    return (
        <div className='mt-5'>
            <PageHeader title='FAQ' active='FAQ' route02='PAGES' />
            <Accordion />
        </div>
    );
};

export default FAQ;