import React from 'react';

const ServiceBlock = ({ data }) => {
    const { bg, img, title, description } = data;
    return (
        <div className="service-block-style-two col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box bg-white">
                <div className="hidden-image" style={{ backgroundImage: `url(${bg})` }}></div>
                <div className="icon">
                    <img src={img} alt="" />
                </div>
                <h5><a href="/service-details">{title}</a></h5>
                <div className="text">{description}</div>
                <a href="/service-details" className="read-more"><span><img src="images/services/arrow-right.png" alt="arrow" /></span> Read More</a>
            </div>
        </div>
    );
};

export default ServiceBlock;