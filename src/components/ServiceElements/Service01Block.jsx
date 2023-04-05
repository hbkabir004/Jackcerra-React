import React from 'react';

const Service01Block = ({ data }) => {
    const { bg, bgHover, icon01, icon02, title, description } = data;
    return (
        <div className="service-block-style-two col-lg-4 col-md-4 col-sm-12">
            <div className="inner-box" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hidden-image" style={{ backgroundImage: `url(${bgHover})` }}></div>
                <div className="icon">
                    <img src={icon01} alt="" className="open_image" />
                    <img src={icon02} alt="" className="hidden_image" />
                </div>
                <h5><a href="/service-details">{title}</a></h5>
                <div className="text">{description}</div>
                <a href="/service-details" className="read-more"><span><img src="images/services/arrow-right.png" alt="arrow" /></span> Read More</a>
            </div>
        </div>
    );
};

export default Service01Block;