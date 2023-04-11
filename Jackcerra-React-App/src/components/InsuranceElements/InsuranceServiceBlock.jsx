import React from 'react';

const InsuranceServiceBlock = ({ data }) => {
    const { img, title, description } = data;

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="service-block">
                <div className="inner-box">
                    <div className="icon"><img src={img} alt="" /></div>
                    <h5><a href="service-details.html">{title}</a></h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InsuranceServiceBlock;