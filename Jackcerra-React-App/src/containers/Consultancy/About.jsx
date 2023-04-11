import React from 'react';

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                {/* <!-- Business Section --> */}
                <div className="inner-container">
                    <div className="row clearfix">
                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-6 col-md-5 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="images/resource/business-6.png" alt="img" />
                                    <div className="experience-counter">
                                        <div className="experience-counter-inner">
                                            20
                                            <p>Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-6 col-md-7 col-sm-12 px-lg-0">
                            <div className="inner-column">
                                {/* <!-- Title Box --> */}
                                <div className="title-box">
                                    <div className="title">About Jackcerra Consultancy</div>
                                    <h1>We deliver customer driven business success</h1>
                                    <p>Blending insight, strategy and imagination, we help clients explore
                                        and act on opportunity. We help them to adapt to the changing customer landscape and maintain positive momentum towards their goals.</p>
                                </div>
                                {/* <!-- End Title Box --> */}

                                {/* <!-- Feature Block --> */}
                                <div className="work-list d-md-flex align-items-center justify-content-between">
                                    <ul>
                                        <li><img src="images/icons/chevron-right.png" alt="img" /> Market Competitor Analysis</li>
                                        <li><img src="images/icons/chevron-right.png" alt="img" /> Research & Development</li>
                                        <li><img src="images/icons/chevron-right.png" alt="img" /> Marketing Decision Making</li>
                                    </ul>
                                    <ul>
                                        <li><img src="images/icons/chevron-right.png" alt="img" /> New Branding Strategies</li>
                                        <li><img src="images/icons/chevron-right.png" alt="img" /> Leadership Training program</li>
                                        <li><img src="images/icons/chevron-right.png" alt="img" /> Auditing & Taxation Service</li>
                                    </ul>
                                </div>

                                <div className="author-block d-lg-flex align-items-center justify-content-between">
                                    <div className="author-profile d-flex align-items-center">
                                        <div className="author-img">
                                            <img src="images/resource/author-3.png" alt="img" />
                                        </div>
                                        <div className="author-info">
                                            <h4>+0(412) 789-4432</h4>
                                            <p>Do you have any question?</p>
                                        </div>
                                    </div>

                                    <div className="author-signature">
                                        <img src="images/resource/signature.png" alt="img" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;