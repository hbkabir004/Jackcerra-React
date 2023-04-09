import React from 'react';

const InvestmentSlider = () => {
    return (
        <div class="second-slider">
            <div class="main-slider-carou">

                {/* <!-- Slide One --> */}
                <div class="slide">
                    <div class="container">
                        <div class="slide-inner">
                            <div class="image-layer" style={{ backgroundImage: `url(../images/slider/7.jpg)` }}></div>
                            <div class="row clearfix align-items-center">

                                {/* <!-- Content Column --> */}
                                <div class="content-column col-lg-8 col-md-12 col-sm-12 offset-lg-2">
                                    <div class="inner-column text-center">
                                        <div class="title">Intelligent Decision Making</div>
                                        <h1>Give Your <span>Investment</span> <br /> Great Future</h1>
                                        <div class="text">Jackcerra is a full-service consultation firm with record <br /> of winning many successful campaigns.</div>
                                        <div class="options-box">
                                            {/* <!-- Button Box --> */}
                                            <div class="button-box d-flex flex-wrap">
                                                <a href="#" class="btn btn-gradient">
                                                    <span class="btn-wrap">
                                                        <span class="text-one">Learn More</span>
                                                        <span class="text-two">Learn More</span>
                                                    </span>
                                                </a>
                                                <a href="#" class="btn btn-two">
                                                    <span class="btn-wrap">
                                                        <span class="text-one">Get Service</span>
                                                        <span class="text-two">Get Service</span>
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