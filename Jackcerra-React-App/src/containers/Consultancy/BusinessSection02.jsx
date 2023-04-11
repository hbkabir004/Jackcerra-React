import React from 'react';

const BusinessSection02 = () => {
    return (
        <section className="business-section-two">
            <div className="container">
                <div className="row clearfix">

                    {/* <!-- Content Column --> */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="title-box">
                                <div className="title">Why Choose Us</div>
                                <h1>Bringing  Business Innovation in the real world of consultation</h1>
                                <div className="text">We help businesses bring ideas to life in the digital  world, by designing and implementing the technology tools that they need to win.We help businesses bring ideas to life in the digital  world, by designing.</div>
                            </div>
                            <div className="row clearfix">
                                {/* <!-- Column --> */}
                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                    <ul className="options">
                                        <li><span className="icon"><img src="images/icons/business-1.png" alt="img" /></span> 98% Success Rate</li>
                                        <li><span className="icon"><img src="images/icons/business-2.png" alt="img" /></span> 200+ Expert Analyst</li>
                                    </ul>
                                </div>
                                {/* <!-- Column --> */}
                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                    <ul className="options">
                                        <li><span className="icon"><img src="images/icons/business-3.png" alt="img" /></span> 25 Years Experience</li>
                                        <li><span className="icon"><img src="images/icons/business-4.png" alt="img" /></span> Big Collaborations</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="user-group d-flex align-items-center justify-content-between">
                                <div className="avatar-group d-flex align-items-center">
                                    <div className="avatar rounded-circle">
                                        <img className="avatar-img rounded-circle" src="images/blog/commenter1.png" alt="img" />
                                    </div>
                                    <div className="avatar rounded-circle">
                                        <img className="avatar-img rounded-circle" src="images/blog/commenter2.png" alt="img" />
                                    </div>
                                    <div className="avatar rounded-circle">
                                        <img className="avatar-img rounded-circle" src="images/blog/commenter1.png" alt="img" />
                                    </div>
                                    <div className="text">
                                        <h4 className="number">1500 +</h4>
                                        <p className="content">Happy Reviews</p>
                                    </div>
                                </div>

                                <div className="rating-point">
                                    <span className="vote">4.9</span> <span className="d/ivider"></span><span className="total">5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Image Column --> */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image wow fadeInRight">
                                <img src="images/resource/business-5.png" alt="img" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BusinessSection02;