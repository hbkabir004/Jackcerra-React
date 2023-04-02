import React from 'react';
import About from '../containers/Consultancy/About';
import BussinessSection from '../containers/Consultancy/BussinessSection';

const ConsultancyHome = () => {
    return (
        <>
            {/* <!-- Main Section --> */}
            <section className="main-slider p-0">
                <div className="main-slider-carousel owl-carousel owl-theme">

                    {/* <!-- Slide One --> */}
                    <div className="slide" style={{ backgroundImage: `url(images/slider/1.jpg)` }}>
                        <div className="container">
                            <div className="row clearfix">
                                {/* <!-- Content Column --> */}
                                <div className="content-column col-xl-7 col-lg-7 col-md-10 col-sm-12">
                                    <div className="inner-column">
                                        <div className="title">Intelligent Decision Making</div>
                                        <h1>Convert Business Ideas <br /> into <span>Great Opportunities</span></h1>
                                        <div className="text">Jackcerra is a full-service consultation firm with record of winning many <br /> successful campaigns. Have a great journey with us</div>
                                        <div className="options-box">
                                            {/* <!-- Button Box --> */}
                                            <div className="button-box d-flex flex-wrap">
                                                <a href="#" className="btn">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Learn More</span>
                                                        <span className="text-two">Learn More</span>
                                                    </span>
                                                </a>
                                                <a href="#" className="btn btn-three">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Get Service</span>
                                                        <span className="text-two">Get Service</span>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- End Slide One --> */}

                    {/* <!-- Slide Two --> */}
                    <div className="slide" style={{ backgroundImage: `url(images/slider/2.jpg)` }}>
                        <div className="container">
                            <div className="row clearfix">
                                {/* <!-- Content Column --> */}
                                <div className="content-column col-xl-7 col-lg-7 col-md-10 col-sm-12">
                                    <div className="inner-column">
                                        <div className="title">Best Consultation Service</div>
                                        <h1>We appreciate Unique <br /> <span>Business Ideas</span> from you</h1>
                                        <div className="text">Jackcerra is a full-service consultation firm with record <br /> of winning many successful campaigns.</div>
                                        <div className="options-box">
                                            {/* <!-- Button Box --> */}
                                            <div className="button-box d-flex flex-wrap">
                                                <a href="#" className="btn">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Learn More</span>
                                                        <span className="text-two">Learn More</span>
                                                    </span>
                                                </a>
                                                <a href="#" className="btn btn-two">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Get Service</span>
                                                        <span className="text-two">Get Service</span>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- End Slide Two --> */}

                    {/* <!-- Slide Three --> */}
                    <div className="slide" style={{ backgroundImage: `url(images/slider/3.jpg)` }}>
                        <div className="container">
                            <div className="row clearfix">
                                {/* <!-- Content Column --> */}
                                <div className="content-column col-xl-7 col-lg-7 col-md-10 col-sm-12">
                                    <div className="inner-column">
                                        <div className="title">Intelligent Decision Making</div>
                                        <h1>Let’s Initiate a new <br /> <span>Business Venture</span> </h1>
                                        <div className="text">Jackcerra is a full-service consultation firm with record <br /> of winning many successful campaigns.</div>
                                        <div className="options-box">
                                            {/* <!-- Button Box --> */}
                                            <div className="button-box d-flex flex-wrap">
                                                <a href="#" className="btn btn-three">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Learn More</span>
                                                        <span className="text-two">Learn More</span>
                                                    </span>
                                                </a>
                                                <a href="#" className="btn btn-two">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Get Service</span>
                                                        <span className="text-two">Get Service</span>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- End Slide Three --> */}



                </div>
            </section>
            {/* <!-- End Main Section --> */}

            <About />

            <BussinessSection />

            {/* <!-- Business Section Two --> */}
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
                                            <li><span className="icon"><img src="images/icons/busin/ess-1.png" alt="img" /></span> 98% Success Rate</li>
                                            <li><span className="icon"><img src="images/icons/busin/ess-2.png" alt="img" /></span> 200+ Expert Analyst</li>
                                        </ul>
                                    </div>
                                    {/* <!-- Column --> */}
                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                        <ul className="options">
                                            <li><span className="icon"><img src="images/icons/busin/ess-3.png" alt="img" /></span> 25 Years Experience</li>
                                            <li><span className="icon"><img src="images/icons/busin/ess-4.png" alt="img" /></span> Big Collaborations</li>
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
                                <div className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <img src="images/resource/business-5.png" alt="img" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- End Business Section Two --> */}

            {/* <!-- Team Section --> */}
            <section className="team-section home">
                <div className="container">
                    <div className="inner-column">
                        {/* <!-- Sec Title --> */}
                        <div className="sec-title centered">
                            <div className="title">Our Team</div>
                            <h1>Meet Our Consultants</h1>
                            <div className="separator"></div>
                        </div>

                        <div className="row clearfix">

                            {/* <!-- Team Block --> */}
                            <div className="team-style-one col-lg-4 col-md-4 col-sm-6">
                                <div className="teambox">
                                    <img src="images/team/1.jpg" alt="img" />
                                    <div className="teambox-inner">
                                        <div className="team-social">
                                            <ul>
                                                <li className="facebook"><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                <li className="twitter"><a href="#"><i className="bi bi-twitter"></i></a></li>
                                                <li className="instagram"><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                <li className="linkedin"><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="teambox-intro text-center">
                                            <h5>Jackson Miller</h5>
                                            <p>Consultant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Team Block --> */}
                            <div className="team-style-one col-lg-4 col-md-4 col-sm-6">
                                <div className="teambox">
                                    <img src="images/team/2.jpg" alt="img" />
                                    <div className="teambox-inner">
                                        <div className="team-social">
                                            <ul>
                                                <li className="facebook"><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                <li className="twitter"><a href="#"><i className="bi bi-twitter"></i></a></li>
                                                <li className="instagram"><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                <li className="linkedin"><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="teambox-intro text-center">
                                            <h5>Soamson Doglus</h5>
                                            <p>Consultant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Team Block --> */}
                            <div className="team-style-one col-lg-4 col-md-4 col-sm-6">
                                <div className="teambox">
                                    <img src="images/team/3.jpg" alt="img" />
                                    <div className="teambox-inner">
                                        <div className="team-social">
                                            <ul>
                                                <li className="facebook"><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                <li className="twitter"><a href="#"><i className="bi bi-twitter"></i></a></li>
                                                <li className="instagram"><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                <li className="linkedin"><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="teambox-intro text-center">
                                            <h5>Hazel Grace</h5>
                                            <p>Consultant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Team Section --> */}

            {/* <!-- Call to Action Section --> */}
            <div className="call-to-action" style={{ backgroundImage: `url(images/background/12.jpg)` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <h1 className="text-white">Grow Big with best consultation From Jackcerra</h1>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center text-md-end">
                            <a href="#" className="btn btn-two">
                                <span className="btn-wrap">
                                    <span className="text-one">Get Appointment</span>
                                    <span className="text-two">Get Appointment</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Call to Action Section --> */}

            {/* <!-- Process Section --> */}
            <section className="process-section">
                <div className="container">
                    {/* <!-- Sec Title --> */}
                    <div className="sec-title centered">
                        <div className="title">HOW WE WORK</div>
                        <h1>Our Work Process</h1>
                        <div className="separator"></div>
                    </div>
                    <div className="inner-container">
                        <div className="separater-line" style={{ backgroundImage: `url(images/background/separator-line.png)` }}></div>
                        <div className="row clearfix">

                            {/* <!-- Process Block --> */}
                            <div className="process-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="image-outer">
                                        <div className="number">01</div>
                                        <div className="image">
                                            <img src="images/resource/process-1.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h4>Meeting Client</h4>
                                        <div className="text">We help to develop marketing campaign strategy with market worthy communication.</div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Process Block --> */}
                            <div className="process-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                                    <div className="image-outer">
                                        <div className="number">02</div>
                                        <div className="image">
                                            <img src="images/resource/process-2.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h4>Project Brief</h4>
                                        <div className="text">We help to develop marketing campaign strategy with market worthy communication.</div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Process Block --> */}
                            <div className="process-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="image-outer">
                                        <div className="number">03</div>
                                        <div className="image">
                                            <img src="images/resource/process-3.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h4>Project Strategy</h4>
                                        <div className="text">We help to develop marketing campaign strategy with market worthy communication.</div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Process Block --> */}
                            <div className="process-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInLeft" data-wow-delay="450ms" data-wow-duration="1500ms">
                                    <div className="image-outer">
                                        <div className="number">04</div>
                                        <div className="image">
                                            <img src="images/resource/process-4.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h4>Campaign Design</h4>
                                        <div className="text">We help to develop marketing campaign strategy with market worthy communication.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Process Section --> */}

            {/* <!-- Testimonial Section --> */}
            <section className="testimonial-section two" style={{ backgroundImage: `url(images/background/13.jpg)` }}>
                <div className="container">
                    <div className="row d-block d-lg-flex clearfix flex-nowrap">

                        {/* <!-- Title Column --> */}
                        <div className="title-column col-xl-4 col-lg-4 col-md-12 col-sm-12 pe-0">
                            <div className="inner-column">
                                {/* <!-- Sec Title --> */}
                                <div className="sec-title">
                                    <div className="title">CLIENTS TESTIMONIAL</div>
                                    <h1 className="text-white">What our Clients <br /> say about Us</h1>
                                    <div className="separator"></div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Carousel Column --> */}
                        <div className="carousel-column">
                            <div className="inner-column">
                                <div className="testimonial-carousel-two owl-carousel owl-theme">

                                    {/* <!-- Testimonial Block --> */}
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="upper-box">
                                                <div className="rating">
                                                    Rating &nbsp;
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <span className="quote fa fa-quote-right"></span>
                                                            <img src="images/resource/reviewer-1.png" alt="img" />
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
                                                    Rating &nbsp;
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <span className="quote fa fa-quote-right"></span>
                                                            <img src="images/resource/reviewer-2.png" alt="img" />
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
                                                    Rating &nbsp;
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <span className="quote fa fa-quote-right"></span>
                                                            <img src="images/resource/reviewer-3.png" alt="img" />
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
                                                    Rating &nbsp;
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <span className="quote fa fa-quote-right"></span>
                                                            <img src="images/resource/reviewer-4.png" alt="img" />
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
                                                    Rating &nbsp;
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <span className="quote fa fa-quote-right"></span>
                                                            <img src="images/resource/reviewer-5.png" alt="img" />
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
                                                    Rating &nbsp;
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                                            </div>
                                            <div className="lower-box">
                                                <div className="author-box">
                                                    <div className="box-inner">
                                                        <div className="author-image">
                                                            <span className="quote fa fa-quote-right"></span>
                                                            <img src="images/resource/reviewer-6.png" alt="img" />
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
                </div>
            </section>
            {/* <!-- End Testimonial Section --> */}

            {/* <!-- News Section --> */}
            <section className="news-section">
                <div className="container">
                    {/* <!-- Sec Title --> */}
                    <div className="sec-title centered">
                        <div className="title">Latest News</div>
                        <h1>Read Our Latest News</h1>
                        <div className="separator"></div>
                    </div>
                    <div className="news-carousel owl-carousel owl-theme">

                        {/* <!-- News Block --> */}
                        <div className="news-block">
                            <div className="inner-box">
                                <div className="image">
                                    <a href="blog-details.html"><img src="images/blog/1.jpg" alt="img" /></a>
                                </div>
                                <div className="lower-content">
                                    <div className="post-date">January 11, 2023</div>
                                    <div className="author-box">
                                        <div className="content">
                                            <div className="author-image">
                                                <img src="images/blog/author-3.jpg" alt="img" />
                                            </div>
                                            <strong>Rayan Kellar</strong>
                                            <span className="designation">Consultant</span>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h5><a href="blog-details.html">How consultation in business is affecting new ventures</a></h5>
                                        <div className="text">We consult our clients to strengthen their decision making for marketing...</div>
                                        <a href="blog-details.html" className="read-more">Read Article</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- News Block --> */}
                        <div className="news-block">
                            <div className="inner-box">
                                <div className="image">
                                    <a href="blog-details.html"><img src="images/blog/2.jpg" alt="img" /></a>
                                </div>
                                <div className="lower-content">
                                    <div className="post-date">January 11, 2023</div>
                                    <div className="author-box">
                                        <div className="content">
                                            <div className="author-image">
                                                <img src="images/blog/author-4.jpg" alt="img" />
                                            </div>
                                            <strong>Mellisa Obrian</strong>
                                            <span className="designation">Consultant</span>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h5><a href="blog-details.html">Challanges of consultating new Business Firms</a></h5>
                                        <div className="text">We consult our clients to strengthen their decision making for marketing...</div>
                                        <a href="blog-details.html" className="read-more">Read Article</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- News Block --> */}
                        <div className="news-block">
                            <div className="inner-box">
                                <div className="image">
                                    <a href="blog-details.html"><img src="images/blog/3.jpg" alt="img" /></a>
                                </div>
                                <div className="lower-content">
                                    <div className="post-date">January 11, 2023</div>
                                    <div className="author-box">
                                        <div className="content">
                                            <div className="author-image">
                                                <img src="images/blog/author-5.jpg" alt="img" />
                                            </div>
                                            <strong>Jessica Ballinger</strong>
                                            <span className="designation">Consultant</span>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h5><a href="blog-details.html">How consultation in business is affecting new ventures</a></h5>
                                        <div className="text">We consult our clients to strengthen their decision making for marketing...</div>
                                        <a href="blog-details.html" className="read-more">Read Article</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- News Block --> */}
                        <div className="news-block">
                            <div className="inner-box">
                                <div className="image">
                                    <a href="blog-details.html"><img src="images/blog/1.jpg" alt="img" /></a>
                                </div>
                                <div className="lower-content">
                                    <div className="post-date">January 11, 2023</div>
                                    <div className="author-box">
                                        <div className="content">
                                            <div className="author-image">
                                                <img src="images/blog/author-3.jpg" alt="img" />
                                            </div>
                                            <strong>Rayan Kellar</strong>
                                            <span className="designation">Consultant</span>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h5><a href="blog-details.html">How consultation in business is affecting new ventures</a></h5>
                                        <div className="text">We consult our clients to strengthen their decision making for marketing...</div>
                                        <a href="blog-details.html" className="read-more">Read Article</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- News Block --> */}
                        <div className="news-block">
                            <div className="inner-box">
                                <div className="image">
                                    <a href="blog-details.html"><img src="images/blog/2.jpg" alt="img" /></a>
                                </div>
                                <div className="lower-content">
                                    <div className="post-date">January 11, 2023</div>
                                    <div className="author-box">
                                        <div className="content">
                                            <div className="author-image">
                                                <img src="images/blog/author-4.jpg" alt="img" />
                                            </div>
                                            <strong>Mellisa Obrian</strong>
                                            <span className="designation">Consultant</span>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h5><a href="blog-details.html">Challanges of consultating new Business Firms</a></h5>
                                        <div className="text">We consult our clients to strengthen their decision making for marketing...</div>
                                        <a href="blog-details.html" className="read-more">Read Article</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- News Block --> */}
                        <div className="news-block">
                            <div className="inner-box">
                                <div className="image">
                                    <a href="blog-details.html"><img src="images/blog/3.jpg" alt="img" /></a>
                                </div>
                                <div className="lower-content">
                                    <div className="post-date">January 11, 2023</div>
                                    <div className="author-box">
                                        <div className="content">
                                            <div className="author-image">
                                                <img src="images/blog/author-5.jpg" alt="img" />
                                            </div>
                                            <strong>Jessica Ballinger</strong>
                                            <span className="designation">Consultant</span>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h5><a href="blog-details.html">How consultation in business is affecting new ventures</a></h5>
                                        <div className="text">We consult our clients to strengthen their decision making for marketing...</div>
                                        <a href="blog-details.html" className="read-more">Read Article</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- End News Section --> */}

            {/* <!-- Contact Section --> */}
            <section className="contact-section home">
                <div className="container">

                    <div className="contact-form default-form mt-0">
                        <div className="row">
                            <div className="col-lg-7 col-md-8 offset-lg-5 offset-md-4">
                                <form method="post" action="contact.html">
                                    <div className="sec-title">
                                        <div className="title">Make Appointment</div>
                                        <h1>Get Free Consultation</h1>
                                        <div className="separator"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" placeholder="Your Name*" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" placeholder="Email Address*" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="phone" className="form-control" placeholder="Phone No" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <span className="icon"><img src="images/icons/calender.png" alt="" /></span>
                                                <input type="text" name="date" className="datepicker form-control" value="" placeholder="Appointment Date*" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" placeholder="Message Here*" required=""></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mb-0">
                                                <input className="btn-submit dark" type="submit" value="Get Appointment" name="submit" />
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Contact Section --> */}
        </>
    );
};

export default ConsultancyHome;