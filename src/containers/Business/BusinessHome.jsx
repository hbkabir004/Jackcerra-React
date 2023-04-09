import React from 'react';
import ContactForm02 from '../../components/BusinessElements/ContactForm02';
import TeamContainer02 from '../Business/TeamContainer02';
import BusinessHeader from './BusinessHeader';
import BusinessIdeas from './BusinessIdeas';
import BusinessProcess from './BusinessProcess';
import NewsContainer02 from './NewsContainer02';
import Testimonials02 from './Testimonials02';

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
                                <div class="image-layer" style={{ backgroundImage: `url(../images/slider/8.jpg)` }}></div>
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
                                        <div class="content-image-layer"><img src="../images/slider/9.png" alt="img" /></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Slide One -->  */}



                </div>
            </div>



            <section className="home-services-section p-0">
                <div className="container">

                    <div className="blocks-column">
                        <div className="inner-column">
                            <div className="row row-cols-sm-3 row-cols-md-4 row-cols-lg-5 align-items-center justify-content-center">

                                {/* <!-- Service Block --> */}
                                <div className="col p-0 mb-3">
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="icon"><img src="../images/icons/1.png" alt="" /></div>
                                            <h5><a href="service-details.html">Growth Consultation</a></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col p-0 mb-3">
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="icon"><img src="../images/icons/2.png" alt="" /></div>
                                            <h5><a href="service-details.html">Marketing Consultation</a></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col p-0 mb-3">
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="icon"><img src="../images/icons/3.png" alt="" /></div>
                                            <h5><a href="service-details.html">Digital Marketing</a></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col p-0 mb-3">
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="icon"><img src="../images/icons/4.png" alt="" /></div>
                                            <h5><a href="service-details.html">Leadership Strategy</a></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col p-0 mb-3">
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="icon"><img src="../images/icons/5.png" alt="" /></div>
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


            <BusinessProcess />

            <BusinessIdeas />

            <TeamContainer02 />

            <ContactForm02 />

            <NewsContainer02 />

            <Testimonials02 />
        </>
    );
};

export default BusinessHome;