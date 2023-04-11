import React from 'react';

const InvestmentSlider = () => {
    return (
        <div className="second-slider">
            <div className="main-slider-carou">

                {/* <!-- Slide One --> */}
                <div className="slide">
                    <div className="container">
                        <div className="slide-inner">
                            <div className="image-layer" style={{ backgroundImage: `url(../images/slider/7.jpg)` }}></div>
                            <div className="row clearfix align-items-center">

                                {/* <!-- Content Column --> */}
                                <div className="content-column col-lg-8 col-md-12 col-sm-12 offset-lg-2">
                                    <div className="inner-column text-center">
                                        <div className="title">Intelligent Decision Making</div>
                                        <h1>Give Your <span>Investment</span> <br /> Great Future</h1>
                                        <div className="text">Jackcerra is a full-service consultation firm with record <br /> of winning many successful campaigns.</div>
                                        <div className="options-box">
                                            {/* <!-- Button Box --> */}
                                            <div className="button-box d-flex flex-wrap">
                                                <a href="#" className="btn btn-gradient">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Learn More</span>
                                                        <span className="text-two">Learn More</span>
                                                    </span>
                                                </a>
                                                <a href="#" className="btn btn-two">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Get Service</span>
                                                        <span className="text-two">Get Service</span>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Slide One -->  */}

            </div>
        </div>
    );
};

export default InvestmentSlider;