import React from 'react';

const InvestmentServiceBlock = ({ data }) => {
    const { img, title, description } = data;

    return (
        <div className="service-block">
            <div className="inner-box">
                <div className="icon"><img src={img} alt="" /></div>
                <h5><a href="/service-details">{title}</a></h5>
                <div className="text">{description}</div>
                <a href="/service-details" className="read-more">Read More <span><i className="visible bi bi-plus-lg"></i> <i className="hidden bi bi-arrow-right"></i></span></a>
            </div>
        </div>


    );
};

export default InvestmentServiceBlock;