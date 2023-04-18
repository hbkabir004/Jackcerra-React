import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactContainer from '../containers/ContactContainer';

const ContactPage = () => {
    return (
        <div className='page-wrapper mt-3'>
            <PageHeader title='Contact Us' active='CONTACT' routeClass='d-none' />
            <ContactContainer />
        </div>
    );
};

export default ContactPage;