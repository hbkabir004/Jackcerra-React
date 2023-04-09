import React from 'react';

const CaseBlock = ({ data }) => {
    return (
        <div className="case-block">
            <div className="inner-box">
                <div className="block-image">
                    <img src={img} alt="img" />
                    <div className="block-bottom">
                        <div className="front text-center">
                            <h5><a href="/service-details">Product Launch of P&G</a></h5>
                            <div className="text">Market Research</div>
                        </div>

                        <div className="back">
                            <h5><a href="/service-details">Product Launch of P&G</a></h5>
                            <div className="text">Market Research</div>
                            <a href="/service-details" className="read-more"><span><i className="visible bi bi-arrow-up-right-square"></i> <i className="hidden bi bi-arrow-up-right-square"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseBlock;