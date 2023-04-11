import React from 'react';

const FeatureBlock = ({ data }) => {
    const { img, title, description } = data;
    return (
        <div className="feature-block two">
            <div className="inner-box">
                <span className="icon"><img src={img} alt="img" /></span>
                <h5>{title}</h5>
                {description}
            </div>
        </div>
    );
};

export default FeatureBlock;