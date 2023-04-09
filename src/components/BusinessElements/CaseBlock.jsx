import React from 'react';

const CaseBlock = ({ data }) => {
    const { num, title, title02, description } = data;
    return (
        <div className="business-case-block">
            <div className="inner-box">
                <h6>Case {num}</h6>
                <h3><a href="/service-details">{title} <br /> {title02}</a></h3>
                <div className="text">
                    {description}
                </div>
                <a href="/service-details" className="btn btn-two">
                    <span className="btn-wrap">
                        <span className="text-one">Case Details</span>
                        <span className="text-two">Case Details</span>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default CaseBlock;