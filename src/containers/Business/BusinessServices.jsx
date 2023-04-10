import React from 'react';
import ServiceBlock from '../../components/BusinessElements/ServiceBlock';

const BusinessServices = () => {
    const BusinessServiceData = [
        {
            id: '1',
            img: '../images/icons/1.png',
            title: 'Growth Consultation'
        },
        {
            id: '2',
            img: '../images/icons/2.png',
            title: 'Marketing Consultation'
        },
        {
            id: '3',
            img: '../images/icons/3.png',
            title: 'Digital Marketing'
        },
        {
            id: '4',
            img: '../images/icons/4.png',
            title: 'Leadership Strategy'
        },
        {
            id: '5',
            img: '../images/icons/5.png',
            title: 'Public Relation'
        },

    ];

    return (
        <section className="home-services-section p-0">
            <div className="container">

                <div className="blocks-column">
                    <div className="inner-column">
                        <div className="row row-cols-sm-3 row-cols-md-4 row-cols-lg-5 align-items-center justify-content-center">

                            {
                                BusinessServiceData.map(data => <ServiceBlock
                                    key={data.id}
                                    data={data}
                                />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessServices;