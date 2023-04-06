import React from 'react';
import CallToAction from '../../components/ConsultancyElements/CallToAction';
import NewsContainer from '../Consultancy/NewsContainer';
import ProcessSection from '../Consultancy/ProcessSection';
import TeamContainer from '../Consultancy/TeamContainer';
import Testimonials from '../Consultancy/Testimonials';
import BusinessFooter from './BusinessFooter';
import BusinessHeader from './BusinessHeader';

const BusinessHome = () => {
    return (
        <>
            <BusinessHeader />
            {/* <!-- Slider Section --> */}
            <div class="third-slider">
                <div class="main-slider-carousel owl-carousel owl-theme">

                    {/* <!-- Slide One --> */}
                    <div class="slide">
                        <div class="container">
                            <div class="slide-inner">
                                <div class="image-layer" style={{ backgroundImage: `url(images/slider/8.jpg)` }}></div>
                                <div class="row clearfix align-items-center">

                                    {/* <!-- Content Column --> */}
                                    <div class="content-column col-lg-6 col-md-7 col-sm-12">
                                        <div class="inner-column">
                                            <div class="title">Intelligent Decision Making</div>
                                            <h1>As a <span>Business Firm</span> <br /> We are ready to set Big Milestones</h1>
                                            <div class="options-box">
                                                {/* <!-- Button Box --> */}
                                                <div class="button-box d-flex flex-wrap">
                                                    <a href="#" class="btn">
                                                        <span class="btn-wrap">
                                                            <span class="text-one">Learn More</span>
                                                            <span class="text-two">Learn More</span>
                                                        </span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="content-image-layer"><img src="images/slider/9.png" alt="img" /></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Slide One -->  */}

                    {/* <!-- Slide Two --> */}
                    <div class="slide">
                        <div class="container">
                            <div class="slide-inner">
                                <div class="image-layer" style={{ backgroundImage: `url(images/slider/8.jpg)` }}></div>
                                <div class="row clearfix align-items-center">

                                    {/* <!-- Content Column --> */}
                                    <div class="content-column col-lg-6 col-md-7 col-sm-12">
                                        <div class="inner-column">
                                            <div class="title">Intelligent Decision Making</div>
                                            <h1>We appreciate <br /> Unique <span>Business Ideas</span> from you</h1>
                                            <div class="options-box">
                                                {/* <!-- Button Box --> */}
                                                <div class="button-box d-flex flex-wrap">
                                                    <a href="#" class="btn">
                                                        <span class="btn-wrap">
                                                            <span class="text-one">Learn More</span>
                                                            <span class="text-two">Learn More</span>
                                                        </span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="content-image-layer"><img src="images/slider/9-2.png" alt="img" /></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Slide Two -->  */}

                </div>
            </div>
            {/* <!-- End Slider Section --> */}

            {/* <!-- Services Section --> */}
            <section className="home-services-section p-0">
                <div className="container">

                    <div className="blocks-column">
                        <div className="inner-column">
                            <div className="row row-cols-sm-3 row-cols-md-4 row-cols-lg-5 align-items-center justify-content-center">

                                {/* <!-- Service Block --> */}
                                <div className="col p-0 mb-3">
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="icon"><img src="images/icons/1.png" alt="" /></div>
                                            <h5><a href="service-details.html">Growth Consultation</a></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col p-0 mb-3">
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="icon"><img src="images/icons/2.png" alt="" /></div>
                                            <h5><a href="service-details.html">Marketing Consultation</a></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col p-0 mb-3">
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="icon"><img src="images/icons/3.png" alt="" /></div>
                                            <h5><a href="service-details.html">Digital Marketing</a></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col p-0 mb-3">
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="icon"><img src="images/icons/4.png" alt="" /></div>
                                            <h5><a href="service-details.html">Leadership Strategy</a></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col p-0 mb-3">
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="icon"><img src="images/icons/5.png" alt="" /></div>
                                            <h5><a href="service-details.html">Public Relation</a></h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Services Section --> */}

            {/* <!-- Process Section --> */}
            <section className="business-process">
                <div className="container">
                    <div className="inner-container">
                        <div className="row clearfix align-items-center">
                            {/* <!-- Image Column --> */}
                            <div className="image-column col-lg-7 col-md-7 col-sm-12">
                                <div className="inner-column text-center">
                                    <div className="image" data-tilt>
                                        <img src="images/resource/business-9.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Content Column --> */}
                            <div className="content-column col-lg-5 col-md-5 col-sm-12 ps-0">
                                <div className="inner-column">
                                    {/* <!-- Sec Title --> */}
                                    <div className="sec-title">
                                        <div className="title"> Our Business Process</div>
                                        <h1>Business Progress Depend on how we implement it</h1>
                                    </div>

                                    <div className="text">We help businesses bring ideas to life in the digital world
                                        by designing and implementing the technology tools that
                                        they need to win.We help businesses bring ideas to life in
                                        the digital  world, by designing.</div>

                                    {/* <!-- Button Box --> */}
                                    <div className="button-box d-flex align-items-center flex-wrap">
                                        <a href="#" className="btn">
                                            <span className="btn-wrap">
                                                <span className="text-one">Learn More</span>
                                                <span className="text-two">Learn More</span>
                                            </span>
                                        </a>
                                        {/* <!-- Play Box --> */}
                                        <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box">
                                            <span><i className="bi bi-play-fill"></i></span> Watch Video
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Process Section --> */}

            {/* <!-- Business Section --> */}
            <section className="business-section">
                <div className="image-layer" style={{ backgroundImage: `url(images/background/31.jpg)` }}></div>
                <div className="container">
                    {/* <!-- Upper Box --> */}
                    <div className="upper-box">
                        <div className="separator"></div>
                        <h1>We help businesses bring <span>ideas & implementing</span> them. Have a look on The Case Studies</h1>
                    </div>
                    <div className="inner-container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="business-case-column">
                                    <div className="business-case-carousel owl-carousel owl-theme">
                                        {/* <!-- Case Block Start --> */}
                                        <div className="business-case-block">
                                            <div className="inner-box">
                                                <h6>Case One</h6>
                                                <h3><a href="service-details.html">Marketing Campaign For XYZ Corp 2021</a></h3>
                                                <div className="text">
                                                    Jackcerra is a full service consultation firm with record of winning so many campaigns under most challenging circumstances by team of our expert
                                                    consultants. We help businesses bring ideas to life in the digital world by designing and implementing the technology tools that they need to win.
                                                </div>
                                                <a href="service-details.html" className="btn btn-two">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Case Details</span>
                                                        <span className="text-two">Case Details</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                        {/* <!-- Case Block Start --> */}
                                        <div className="business-case-block">
                                            <div className="inner-box">
                                                <h6>Case Two</h6>
                                                <h3><a href="service-details.html">Data Analysis for Share Holders</a></h3>
                                                <div className="text">
                                                    Jackcerra is a full service consultation firm with record of winning so many campaigns under most challenging circumstances by team of our expert
                                                    consultants. We help businesses bring ideas to life in the digital world by designing and implementing the technology tools that they need to win.
                                                </div>
                                                <a href="service-details.html" className="btn btn-two">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Case Details</span>
                                                        <span className="text-two">Case Details</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                        {/* <!-- Case Block Start --> */}
                                        <div className="business-case-block">
                                            <div className="inner-box">
                                                <h6>Case Three</h6>
                                                <h3><a href="service-details.html">Marketing Campaign For XYZ Corp 2021</a></h3>
                                                <div className="text">
                                                    Jackcerra is a full service consultation firm with record of winning so many campaigns under most challenging circumstances by team of our expert
                                                    consultants. We help businesses bring ideas to life in the digital world by designing and implementing the technology tools that they need to win.
                                                </div>
                                                <a href="service-details.html" className="btn btn-two">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Case Details</span>
                                                        <span className="text-two">Case Details</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="video-post">
                                    <div className="ytube-video">
                                        <iframe id="ytvideo" src="https://www.youtube.com/embed/fEErySYqItI" allow="autoplay;" allowfullscreen=""></iframe>
                                        <div className="post-content">
                                            <div className="ytplay-btn"><i className="fa fa-play"></i></div>
                                            <img src="images/background/25.jpg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Business Section --> */}

            <TeamContainer />
            <CallToAction />
            <ProcessSection />
            <Testimonials />
            <NewsContainer />
            {/* <ContactForm /> */}

            <BusinessFooter />
        </>
    );
};

export default BusinessHome;