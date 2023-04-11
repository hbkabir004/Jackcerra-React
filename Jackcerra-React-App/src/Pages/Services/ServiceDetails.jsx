import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import ServiceDetailsContainer from '../../containers/ServiceContainers/ServiceDetailsContainer';

const ServiceDetails = () => {
    return (
        <div className='mt-5'>
            <PageHeader title='Growth Consultation' active='SINGLE SERVICE' route02='OUR SERVICES' />
            <ServiceDetailsContainer />
        </div>
    );
};

export default ServiceDetails;