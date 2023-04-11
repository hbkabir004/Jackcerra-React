import React from 'react';

const ServiceBlock = ({ data }) => {
    const { img, title } = data;

    return (
        <div className="col p-0 mb-3">
            <div className="service-block">
                <div className="inner-box">
                    <div className="icon"><img src={img} alt="" /></div>
                    <h5><a href="/service-details">{title}</a></h5>
                </div>
            </div>
        </div>
    );
};

export default ServiceBlock;