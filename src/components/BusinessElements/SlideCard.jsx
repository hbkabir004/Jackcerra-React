import React from 'react';

const SlideTwo = ({ data }) => {
    const { header01, header02, header03, header04, img } = data;
    return (
        <div className="slide">
            <div className="container">
                <div className="slide-inner">
                    <div className="image-layer" style={{ backgroundImage: `url(../images/slider/8.jpg)` }}></div>
                    <div className="row clearfix align-items-center">

                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-6 col-md-7 col-sm-12">
                            <div className="inner-column">
                                <div className="title">{title}</div>
                                <h1>{header01} <br /> {header02} <span>{header03}</span> {header04}</h1>
                                <div className="options-box">
                                    {/* <!-- Button Box --> */}
                                    <div className="button-box d-flex flex-wrap">
                                        <a href="#" className="btn">
                                            <span className="btn-wrap">
                                                <span className="text-one">Learn More</span>
                                                <span className="text-two">Learn More</span>
                                            </span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="content-image-layer"><img src={img} alt="img" /></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default SlideTwo;