import React from 'react';
import CountUp from 'react-countup';


const InsuranceAbout = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="sec-title centered">
                    <div className="title">Why Choose Us</div>
                    <h1>Creating Great futures</h1>
                    <div className="separator"></div>
                </div>
                {/* <!-- Business Section --> */}
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="content-column col-lg-3 col-md-5 col-sm-5">
                            <div className="counter-box style-two">
                                <div className="counter-column">
                                    <div className="counter">
                                        <CountUp start={0} end={1345} delay={4}>
                                            <span className="odometer" data-count="1345"></span>
                                        </CountUp>
                                    </div>
                                    <h6>Claim Settlement</h6>
                                </div>

                                <div className="counter-column">
                                    <div className="counter">
                                        <CountUp start={0} end={673} delay={4}>
                                            <span className="odometer" data-count="673"></span>
                                        </CountUp>
                                    </div>
                                    <h6>Beneficiaries</h6>
                                </div>

                                <div className="counter-column">
                                    <div className="counter">
                                        <CountUp start={0} end={345} delay={4}>
                                            <span className="odometer" data-count="345"></span>
                                        </CountUp>
                                    </div>
                                    <h6>Insurance Agents</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-5 col-md-7 col-sm-7">
                            <div className="inner-column">
                                <div className="text">We’re a global community of individuals with a shared purpose. See how our people go above and beyond each day to help build future for all.</div>

                                {/* <!-- Feature Block --> */}
                                <div className="work-list">
                                    <ul>
                                        <li><img src="../images/icons/chevron-right-2.png" alt="img" /> Most Easy Premium Giving Process</li>
                                        <li><img src="../images/icons/chevron-right-2.png" alt="img" /> Triple benefits in accidental Death or Injury</li>
                                        <li><img src="../images/icons/chevron-right-2.png" alt="img" /> Education coverage in family Life Plans</li>
                                        <li><img src="../images/icons/chevron-right-2.png" alt="img" /> Provides assurance along with cash benefits</li>
                                    </ul>
                                </div>

                                <div className="author-block d-lg-flex align-items-center justify-content-between">
                                    <div className="author-profile d-flex align-items-center">
                                        <div className="author-img">
                                            <img src="../images/resource/author-4.jpg" alt="img" />
                                        </div>
                                        <div className="author-info">
                                            <h4>+0(412) 789-4432</h4>
                                            <p>Do you have any question?</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-4 col-md-12 col-sm-12 d-none d-lg-block">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="../images/resource/business-11.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsuranceAbout;