import React from 'react';

const CaseBlock02 = ({ data }) => {
    const { img, title } = data

    return (
        <div className="case-block">
            <div className="inner-box">
                <div className="block-image">
                    <img src={img} alt="img" />
                    <div className="block-bottom">
                        <div className="front">
                            <h5><a href="/service-details">{title}</a></h5>
                        </div>

                        <div className="back">
                            <h5><a href="/service-details">{title}</a></h5>
                            <a href="/service-details" className="read-more"><span><i className="visible bi bi bi-arrow-up-right-square-fill"></i> <i className="hidden bi bi bi-arrow-up-right-square-fill"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseBlock02;