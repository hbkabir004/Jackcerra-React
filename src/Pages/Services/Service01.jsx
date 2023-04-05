import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import ServiceContainer01 from '../../containers/ServiceContainers/ServiceContainer01';

const Service01 = () => {
    return (
        <div className='mt-5'>
            <PageHeader title='Our Services' active='SERVICES' routeClass='d-none' />
            <ServiceContainer01 />
        </div>
    );
};

export default Service01;