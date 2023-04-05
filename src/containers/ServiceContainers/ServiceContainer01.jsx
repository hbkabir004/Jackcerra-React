import React from 'react';
import SectionTitle from '../../components/ConsultancyElements/SectionTitle';
import Service01Block from '../../components/ServiceElements/Service01Block';

const ServiceContainer01 = () => {
    const ServiceData = [
        {
            id: '1',
            icon01: 'images/services/icons/1-1.png',
            icon02: 'images/services/icons/1-2.png',
            bg: 'images/services/bg-1.png',
            bgHover: 'images/services/bg-hover-1.png',
            title: 'Financial Consultation',
            description: 'We are providing growth consultancies & financial services for companies who want to excel their business.'
        },
        {
            id: '2',
            icon01: 'images/services/icons/2-1.png',
            icon02: 'images/services/icons/2-2.png',
            bg: 'images/services/bg-1.png',
            bgHover: 'images/services/bg-hover-2.png',
            title: 'Leadership Training',
            description: 'We try to provide new project Ideas for new entrepreneurs who already have investor & looking for ideas.'
        },
        {
            id: '3',
            icon01: 'images/services/icons/3-1.png',
            icon02: 'images/services/icons/3-2.png',
            bg: 'images/services/bg-1.png',
            bgHover: 'images/services/bg-hover-3.png',
            title: 'Global Operation Plan',
            description: 'For a growing business firm we provide market research & competitor analysis before a product launch in market.'
        },
        {
            id: '4',
            icon01: 'images/services/icons/4-1.png',
            icon02: 'images/services/icons/4-2.png',
            bg: 'images/services/bg-1.png',
            bgHover: 'images/services/bg-hover-4.png',
            title: 'Global Operation Plan',
            description: 'Do you have dream to expand your business globally? we are providing the best planning proposal for this.'
        },
        {
            id: '5',
            icon01: 'images/services/icons/5-1.png',
            icon02: 'images/services/icons/5-2.png',
            bg: 'images/services/bg-1.png',
            bgHover: 'images/services/bg-hover-5.png',
            title: 'Leadership Evaluation',
            description: 'For a growing business firm we provide market research & competitor analysis before a product launch in market.'
        },
        {
            id: '6',
            icon01: 'images/services/icons/6-1.png',
            icon02: 'images/services/icons/6-2.png',
            bg: 'images/services/bg-1.png',
            bgHover: 'images/services/bg-hover-6.png',
            title: 'Digital Marketing',
            description: 'No one can deny the importance of digital marketing now a days so we are providing this service also.'
        },

    ];

    return (
        <section className="services-section">
            <div className="container">
                <SectionTitle
                    title='INTELLIGENT DECISION MAKING'
                    header='Providing Best Services' />

                <div className="inner-column">
                    <div className="row clearfix">
                        {
                            ServiceData.map(data => <Service01Block
                                key={data.id}
                                data={data}
                            />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceContainer01;