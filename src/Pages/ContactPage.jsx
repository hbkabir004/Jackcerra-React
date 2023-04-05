import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactContainer from '../containers/ContactContainer';

const ContactPage = () => {
    return (
        <div className='mt-5'>
            <PageHeader title='Our Services' active='SERVICES' routeClass='d-none' />
            <ContactContainer />
        </div>
    );
};

export default ContactPage;