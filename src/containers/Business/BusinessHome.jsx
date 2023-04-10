import React from 'react';
import ContactForm02 from '../../components/BusinessElements/ContactForm02';
import TeamContainer02 from '../Business/TeamContainer02';
import BusinessIdeas from './BusinessIdeas';
import BusinessProcess from './BusinessProcess';
import BusinessServices from './BusinessServices';
import NewsContainer02 from './NewsContainer02';
import Testimonials02 from './Testimonials02';

const BusinessHome = () => {
    return (
        <>
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

            <BusinessServices />
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