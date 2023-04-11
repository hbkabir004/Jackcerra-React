import React from 'react';

const ProcessBlock = ({ data }) => {
    const { img, title, description, num } = data;

    return (
        <div className="process-block col-lg-3 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInLeft">
                <div className="image-outer">
                    <div className="number">{num}</div>
                    <div className="image">
                        <img src={img} alt="img" />
                    </div>
                </div>
                <div className="lower-content">
                    <h4>{title}</h4>
                    <div className="text">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default ProcessBlock;