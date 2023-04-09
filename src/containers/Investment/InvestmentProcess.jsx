import React from 'react';

const InvestmentProcess = () => {
    return (
        <section className="business-section-four">
            <div className="container">
                <div className="inner-container">
                    <div className="row clearfix">
                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-7 col-md-12 col-sm-12 px-lg-0">
                            <div className="inner-column d-md-flex align-items-center justify-content-lg-between">
                                <div className="counter-box style-two">
                                    <div className="counter-column">
                                        <div className="counter-icon"><img src="../images/icons/settings.png" alt="icon2" /></div>
                                        <div className="counter"><span className="odometer" data-count="1500"></span></div>
                                        <h6>Projects Completed</h6>
                                    </div>

                                    <div className="counter-column">
                                        <div className="counter-icon"><img src="../images/icons/medal.png" alt="icon2" /></div>
                                        <div className="counter"><span className="odometer" data-count="41"></span></div>
                                        <h6>Prestigious Award</h6>
                                    </div>
                                </div>
                                <div className="image">
                                    <img src="../images/resource/business-8.png" alt="img" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* <!-- Sec Title --> */}
                                <div className="sec-title">
                                    <div className="title"> <div className="separator"></div> Process</div>
                                    <h1>Helping Ventures<br />
                                        For Being Successful</h1>
                                </div>

                                {/* <!-- Feature Block --> */}
                                <div className="feature-block">
                                    <div className="inner-box">
                                        <span className="icon"><img src="../images/icons/globe-star.png" alt="img" /></span>
                                        <h5>Project Analysis</h5>
                                        A business firm is either the sole partner ship owned by an individual.
                                    </div>
                                </div>

                                {/* <!-- Feature Block --> */}
                                <div className="feature-block">
                                    <div className="inner-box">
                                        <span className="icon"><img src="../images/icons/settings-o.png" alt="img" /></span>
                                        <h5>Decision & Consultancy</h5>
                                        Designing and implementing technology tools that they need to win.
                                    </div>
                                </div>

                                {/* <!-- Button Box --> */}
                                <div className="button-box d-flex align-items-center flex-wrap">
                                    <a href="#" className="btn">
                                        <span className="btn-wrap">
                                            <span className="text-one">Learn More</span>
                                            <span className="text-two">Learn More</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentProcess;