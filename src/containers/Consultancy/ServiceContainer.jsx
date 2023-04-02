import React from 'react';
import ServiceBlock from '../../components/ConsultancyElements/ServiceBlock';
import ServiceBlock02 from '../../components/ConsultancyElements/ServiceBlock02';

const ServiceContainer = () => {
    const ServiceData = [
        {
            id: '1',
            img: 'images/services/icons/7-1.png',
            bg: 'images/services/bg-hover-1.png',
            title: 'Financial Consultation',
            description: 'We are providing growth consultancies & financial services for companies who want to excel their business.'
        },
        {
            id: '2',
            img: 'images/services/icons/8-1.png',
            bg: 'images/services/bg-hover-2.png',
            title: 'Leadership Training',
            description: 'We try to provide new project Ideas for new entrepreneurs who already have investor & looking for ideas.'
        },
        {
            id: '3',
            img: 'images/services/icons/10-1.png',
            bg: 'images/services/bg-hover-4.png',
            title: 'Global Operation Plan',
            description: 'Do you have dream to expand your business globally? we are providing the best planning proposal for this.'
        },
        {
            id: '4',
            img: 'images/services/icons/11-1.png',
            bg: 'images/services/bg-hover-5.png',
            title: 'Leadership Evaluation',
            description: 'We are providing growth consultancies & financial services for companies who want to excel their business.'
        },
        {
            id: '5',
            img: 'images/services/icons/8-1.png',
            bg: 'images/services/bg-hover-1.png',
            title: 'Company Receives Recognition for Excellence',
            description: 'The construction industry has the capacity to absorb more people into the workforce...'
        },

    ];

    return (
        <div className="inner-column">
            <div className="row clearfix">

                {
                    ServiceData.map(data => <ServiceBlock
                        key={data.id}
                        data={data}
                    />)
                }


                <ServiceBlock02
                    bg='images/services/bg-2.png'
                    title='Explore all the Other services by Jackcerra' />


            </div>
        </div>
    );
};

export default ServiceContainer;