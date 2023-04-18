import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import ServiceContainer01 from '../../containers/ServiceContainers/ServiceContainer01';

const Service01 = () => {
    return (
        <div className='page-wrapper mt-3'>
            <PageHeader title='Our Services' active='SERVICES' routeClass='d-none' />
            <ServiceContainer01 />
        </div>
    );
};

export default Service01;