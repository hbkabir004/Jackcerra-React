import React from 'react';

const ServiceBlock02 = (props) => {

    return (
        <div className="service-block-style-two all-services-link col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box" style={{ backgroundImage: `url(${props.bg})` }}>
                <h5>{props.title}</h5>
                <a href="service.html" className="btn btn-two">
                    <span className="btn-wrap">
                        <span className="text-one">See All Services</span>
                        <span className="text-two">See All Services</span>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default ServiceBlock02;