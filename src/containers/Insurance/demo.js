import React from 'react';

const demo = () => {
    return (
        <>
          <div className="fourth-slider">
                <div className="main-slider-carousel owl-carousel owl-theme">

                    {/* <!-- Slide One --> */}
                    <div className="slide">
                        <div className="container">
                            <div className="slide-inner">
                                <div className="image-layer" style={{ backgroundImage: `url(../images/slider/10.jpg)` }}></div>
                                <div className="row clearfix align-items-center">

                                    {/* <!-- Content Column --> */}
                                    <div className="content-column col-lg-8 col-md-9 col-sm-10">
                                        <div className="inner-column">
                                            <div className="title">CREATING IMPACT THROUGH INSURANCE</div>
                                            <h1>Get <span>Insurance</span> For <br /> Security & Assurance</h1>
                                            <div className="text">We’re a global community of individuals with a shared purpose. See how <br />
                                                people go above & beyond each day to help build a confident future for all.
                                            </div>
                                            <div className="options-box">
                                                {/* <!-- Button Box --> */}
                                                <div className="button-box d-flex flex-wrap">
                                                    <a href="service-details.html" className="btn">
                                                        <span className="btn-wrap">
                                                            <span className="text-one">Learn More</span>
                                                            <span className="text-two">Learn More</span>
                                                        </span>
                                                    </a>

                                                    <a href="service.html" className="btn btn-two">
                                                        <span className="btn-wrap">
                                                            <span className="text-one">Get Service</span>
                                                            <span className="text-two">Get Service</span>
                                                        </span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="content-image-layer"><img src="../images/slider/11.png" alt="img" /></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Slide One -->  */}

                    {/* <!-- Slide Two --> */}
                    <div className="slide">
                        <div className="container">
                            <div className="slide-inner">
                                <div className="image-layer" style={{ backgroundImage: `url(../images/slider/10.jpg)` }}></div>
                                <div className="row clearfix align-items-center">

                                    {/* <!-- Content Column --> */}
                                    <div className="content-column col-lg-8 col-md-9 col-sm-10">
                                        <div className="inner-column">
                                            <div className="title">CREATING IMPACT THROUGH INSURANCE</div>
                                            <h1>Get <span>Insurance</span> For <br /> Risk-free Future</h1>
                                            <div className="text">We’re a global community of individuals with a shared purpose. See how <br />
                                                people go above & beyond each day to help build a confident future for all.
                                            </div>
                                            <div className="options-box">
                                                {/* <!-- Button Box --> */}
                                                <div className="button-box d-flex flex-wrap">
                                                    <a href="service-details.html" className="btn">
                                                        <span className="btn-wrap">
                                                            <span className="text-one">Learn More</span>
                                                            <span className="text-two">Learn More</span>
                                                        </span>
                                                    </a>

                                                    <a href="service.html" className="btn btn-two">
                                                        <span className="btn-wrap">
                                                            <span className="text-one">Get Service</span>
                                                            <span className="text-two">Get Service</span>
                                                        </span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="content-image-layer"><img src="../images/slider/11-2.png" alt="img" /></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Slide Two -->  */}

                </div>
            </div>   
        </>
    );
};

export default demo;