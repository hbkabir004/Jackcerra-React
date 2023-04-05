import React from 'react';

const ServiceDetailsContainer = () => {
    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">

                    {/* <!-- Service Navigation List --> */}
                    <div className="col-lg-4 col-md-5">
                        <div className="sidebar">
                            <div className="sidenav">
                                <ul className="side_menu">
                                    <li className="menu-item active">
                                        <a href="service-details.html">
                                            <img src="images/services/nav/1-1.png" alt="icon" />
                                            <img src="images/services/nav/1-2.png" alt="icon" />
                                            Growth Consultation
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="service-details.html">
                                            <img src="images/services/nav/2-1.png" alt="icon" />
                                            <img src="images/services/nav/2-2.png" alt="icon" />
                                            Financial Adivice
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="service-details.html">
                                            <img src="images/services/nav/3-1.png" alt="icon" />
                                            <img src="images/services/nav/3-2.png" alt="icon" />
                                            Marketing Strategy
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="service-details.html">
                                            <img src="images/services/nav/4-1.png" alt="icon" />
                                            <img src="images/services/nav/4-2.png" alt="icon" />
                                            Public Relation
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="service-details.html">
                                            <img src="images/services/nav/5-1.png" alt="icon" />
                                            <img src="images/services/nav/5-2.png" alt="icon" />
                                            HR Management
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="service-details.html">
                                            <img src="images/services/nav/6-1.png" alt="icon" />
                                            <img src="images/services/nav/6-2.png" alt="icon" />
                                            New Idea Creation
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7 mt-5 mt-md-0">
                        <div className="blog-details-inner">
                            <div className="post-content">
                                <div className="post-header mt-0">
                                    <h1 className="post-title">Growth Consultation</h1>
                                </div>
                                <div className="fulltext">
                                    <p> We guide our clients through difficult issues, bringing insight and judgment to each situation. Our innovative approaches create original solutions to our clients' most complex domestic & multi juristictional deals and disputes. By thinking on behalf of our clients every day, we anticipate what they want, provide what they need and build lasting relationships.</p>
                                    <h5 className="highlight">Over the last 35 Years we made an impact that is strong & we have long way to go.</h5>
                                    <p>These are the concepts that shape our distinctive culture & differentiate us from others. They true the unique spirit of our Firm guide the behaviors that enable us to deliver  the promises we make to our clients and our people.</p>

                                    <h4 className="widget-title">Service Process</h4>
                                    <p>At Jackcerra our culture comes to life through three core values:</p>
                                    <ul className="point-order">
                                        <li>We seize opportunities to innovate and grow</li>
                                        <li>We are one firm with a shared sense of purpose</li>
                                        <li>We care about each other and the world around us</li>
                                    </ul>

                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="image-post">
                                                <img src="images/services/details-1.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="image-post">
                                                <img src="images/services/details-2.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="process-step d-flex">
                                                <div className="serial">1</div>
                                                <div className="process-step-content">
                                                    <h5>First Appointment</h5>
                                                    <p>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                                </div>
                                            </div>
                                            <div className="process-step d-flex">
                                                <div className="serial">2</div>
                                                <div className="process-step-content">
                                                    <h5>Project Brief</h5>
                                                    <p>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                                </div>
                                            </div>
                                            <div className="process-step d-flex">
                                                <div className="serial">3</div>
                                                <div className="process-step-content">
                                                    <h5>Financial Analysis</h5>
                                                    <p>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="process-step d-flex">
                                                <div className="serial">4</div>
                                                <div className="process-step-content">
                                                    <h5>Campain Design</h5>
                                                    <p>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                                </div>
                                            </div>
                                            <div className="process-step d-flex">
                                                <div className="serial">5</div>
                                                <div className="process-step-content">
                                                    <h5>Exit Strategy</h5>
                                                    <p>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                                </div>
                                            </div>
                                            <div className="process-step d-flex">
                                                <div className="serial">6</div>
                                                <div className="process-step-content">
                                                    <h5>Final Project</h5>
                                                    <p>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                                </div>
                                            </div>
                                        </div>
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

export default ServiceDetailsContainer;