import React from 'react';
import NewsContainer02 from '../Business/NewsContainer02';
import CTA from './CTA';
import InvestmentProcess from './InvestmentProcess';
import InvestmentServices from './InvestmentServices';
import InvestmentSlider from './InvestmentSlider';
import WhyChooseUs from './WhyChooseUs';

const InvestmentHome = () => {
    return (
        <>
            <InvestmentSlider />
            <InvestmentServices />

            {/* <!-- Case Study Section --> */}
            <section className="case-study-section" style={{ backgroundImage: `url(../images/background/20.jpg)` }} >
                <div className="container">
                    {/* <!-- Sec Title --> */}
                    {/* <!-- Sec Title --> */}
                    <div className="sec-title text-center">
                        <div className="title"> <div className="separator"></div> Case Studies</div>
                        <h1>Explore Our Top <span>Cases</span></h1>
                        <div className="text">As a business firm our main goal is to provide best
                            services to our customers & create <br /> best ideas to
                            help grow our clients. </div>
                    </div>

                    <div className="case-list">
                        <div className="case-carousel owl-carousel owl-theme">
                            {/* <!-- Case Block Start --> */}
                            <div className="case-block">
                                <div className="inner-box">
                                    <div className="block-image">
                                        <img src="../images/case/1.jpg" alt="img" />
                                        <div className="block-bottom">
                                            <div className="front text-center">
                                                <h5><a href="service-details.html">Product Launch of P&G</a></h5>
                                                <div className="text">Market Research</div>
                                            </div>

                                            <div className="back">
                                                <h5><a href="service-details.html">Product Launch of P&G</a></h5>
                                                <div className="text">Market Research</div>
                                                <a href="service-details.html" className="read-more"><span><i className="visible bi bi-arrow-up-right-square"></i> <i className="hidden bi bi-arrow-up-right-square"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Case Block Start --> */}
                            <div className="case-block">
                                <div className="inner-box">
                                    <div className="block-image">
                                        <img src="../images/case/2.jpg" alt="img" />
                                        <div className="block-bottom">
                                            <div className="front text-center">
                                                <h5><a href="service-details.html">Data Analysis in MaxQDA</a></h5>
                                                <div className="text">Business Analysis</div>
                                            </div>

                                            <div className="back">
                                                <h5><a href="service-details.html">Data Analysis in MaxQDA</a></h5>
                                                <div className="text">Business Analysis</div>
                                                <a href="service-details.html" className="read-more"><span><i className="visible bi bi-arrow-up-right-square"></i> <i className="hidden bi bi-arrow-up-right-square"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Case Block Start --> */}
                            <div className="case-block">
                                <div className="inner-box">
                                    <div className="block-image">
                                        <img src="../images/case/3.jpg" alt="img" />
                                        <div className="block-bottom">
                                            <div className="front text-center">
                                                <h5><a href="service-details.html">Marketing Plan for Marico</a></h5>
                                                <div className="text">Marketing Analysis</div>
                                            </div>

                                            <div className="back">
                                                <h5><a href="service-details.html">Marketing Plan for Marico</a></h5>
                                                <div className="text">Marketing Analysis</div>
                                                <a href="service-details.html" className="read-more"><span><i className="visible bi bi-arrow-up-right-square"></i> <i className="hidden bi bi-arrow-up-right-square"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Case Block Start --> */}
                            <div className="case-block">
                                <div className="inner-box">
                                    <div className="block-image">
                                        <img src="../images/case/2.jpg" alt="img" />
                                        <div className="block-bottom">
                                            <div className="front text-center">
                                                <h5><a href="service-details.html">Data Analysis in MaxQDA</a></h5>
                                                <div className="text">Business Analysis</div>
                                            </div>

                                            <div className="back">
                                                <h5><a href="service-details.html">Data Analysis in MaxQDA</a></h5>
                                                <div className="text">Business Analysis</div>
                                                <a href="service-details.html" className="read-more"><span><i className="visible bi bi-arrow-up-right-square"></i> <i className="hidden bi bi-arrow-up-right-square"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Case Block Start --> */}
                            <div className="case-block">
                                <div className="inner-box">
                                    <div className="block-image">
                                        <img src="../images/case/3.jpg" alt="img" />
                                        <div className="block-bottom">
                                            <div className="front text-center">
                                                <h5><a href="service-details.html">Marketing Plan for Marico</a></h5>
                                                <div className="text">Marketing Analysis</div>
                                            </div>

                                            <div className="back">
                                                <h5><a href="service-details.html">Marketing Plan for Marico</a></h5>
                                                <div className="text">Marketing Analysis</div>
                                                <a href="service-details.html" className="read-more"><span><i className="visible bi bi-arrow-up-right-square"></i> <i className="hidden bi bi-arrow-up-right-square"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Case Study Section --> */}

            <WhyChooseUs />
            <CTA />
            <InvestmentProcess />

            {/* <!-- Business Section --> */}
            <section className="company-growth" style={{ backgroundImage: `url('../images/background/22.jpg)` }}>
                <div className="container">
                    <div className="inner-container">
                        <div className="row clearfix align-items-center">
                            {/* <!-- Image Column --> */}
                            <div className="image-column col-lg-6 col-md-12">
                                <div className="inner-column">
                                    <div className="image">
                                        <div id="barChart1"></div>
                                        {/* <!-- <img src="../images/resource/bar-chart.png" alt="img" > --> */}
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Content Column --> */}
                            <div className="content-column col-lg-6 col-md-12">
                                <div className="inner-column">
                                    {/* <!-- Sec Title --> */}
                                    <div className="sec-title">
                                        <div className="title"> <div className="separator"></div> Process</div>
                                        <h1>Jackcerra have achieved</h1>
                                        <h1 className="d-xl-flex align-items-center"><span className="achieve-count d-xl-flex"><span className="odometer" data-count="35"></span>%</span> Growth in the First Quarter</h1>
                                    </div>

                                    {/* <!-- Button Box --> */}
                                    <div className="button-box d-flex align-items-center flex-wrap">
                                        <a href="#" className="btn">
                                            <span className="btn-wrap">
                                                <span className="text-one">Download Brochure</span>
                                                <span className="text-two">Download Brochure</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Newsletter --> */}
                    <div className="subscribe-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                                <h2>Subscribe to our Newsletter!</h2>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <form className="subscribe-form" method="post" action="">
                                    <div className="form-group">
                                        <input type="email" name="email" value="" placeholder="Enter your email" required="" />
                                        <button type="submit" className="btn">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Business Section --> */}


            {/* <!-- Testimonial Section --> */}
            <section className="testimonial-section">
                <div className="container">
                    <div className="row clearfix">

                        {/* <!-- Title Column --> */}
                        <div className="title-column col-xl-3 col-lg-3 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* <!-- Sec Title --> */}
                                <div className="sec-title">
                                    <div className="title"><div className="separator"></div> TESTIMONIALS</div>
                                    <h1>Our Happy Clients</h1>
                                    <p>Our main goal is to provide best services to our customers & to help them grow</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Carousel Column --> */}
                        <div className="carousel-column col-xl-9 col-lg-9 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="testimonial-carousel owl-carousel owl-theme">

                                    {/* <!-- Testimonial Block --> */}
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="upper-box">
                                                <div className="rating">

                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                </div>
                                                <span className="quote fa fa-quote-right"></span>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <img src="../images/resource/reviewer-1.png" alt="img" />
                                                        </div>
                                                        <strong>Trent Ballinger</strong>
                                                        <span className="designation">CEO, Bizzbreak Inc.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Testimonial Block --> */}
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="upper-box">
                                                <div className="rating">

                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-half"></span>
                                                </div>
                                                <span className="quote fa fa-quote-right"></span>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <img src="../images/resource/reviewer-2.png" alt="img" />
                                                        </div>
                                                        <strong>Kevin Miller</strong>
                                                        <span className="designation">Manager, PPS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Testimonial Block --> */}
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="upper-box">
                                                <div className="rating">

                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star"></span>
                                                </div>
                                                <span className="quote fa fa-quote-right"></span>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <img src="../images/resource/reviewer-3.png" alt="img" />
                                                        </div>
                                                        <strong>Trent Ballinger</strong>
                                                        <span className="designation">CEO, Bizzbreak Inc.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Testimonial Block --> */}
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="upper-box">
                                                <div className="rating">

                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                </div>
                                                <span className="quote fa fa-quote-right"></span>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <img src="../images/resource/reviewer-4.png" alt="img" />
                                                        </div>
                                                        <strong>Kevin Miller</strong>
                                                        <span className="designation">Manager, PPS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Testimonial Block --> */}
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="upper-box">
                                                <div className="rating">

                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                </div>
                                                <span className="quote fa fa-quote-right"></span>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <img src="../images/resource/reviewer-5.png" alt="img" />
                                                        </div>
                                                        <strong>Trent Ballinger</strong>
                                                        <span className="designation">CEO, Bizzbreak Inc.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Testimonial Block --> */}
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="upper-box">
                                                <div className="rating">

                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                    <span className="bi bi-star-fill"></span>
                                                </div>
                                                <span className="quote fa fa-quote-right"></span>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <img src="../images/resource/reviewer-6.png" alt="img" />
                                                        </div>
                                                        <strong>Kevin Miller</strong>
                                                        <span className="designation">Manager, PPS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="our-clients d-flex flex-wrap align-items-center justify-content-around">
                        <div className="client-logo">
                            <a href="#"><img src="../images/resource/client-1.png" alt="img" /></a>
                        </div>
                        <div className="client-logo">
                            <a href="#"><img src="../images/resource/client-2.png" alt="img" /></a>
                        </div>
                        <div className="client-logo">
                            <a href="#"><img src="../images/resource/client-3.png" alt="img" /></a>
                        </div>
                        <div className="client-logo">
                            <a href="#"><img src="../images/resource/client-4.png" alt="img" /></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Testimonial Section --> */}

            <NewsContainer02 />
        </>
    );
};

export default InvestmentHome;