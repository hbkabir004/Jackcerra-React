import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialBlock02 from '../../components/InvestmentElements/TestimonialBlock02';

const InvestmentTestimonials = () => {
    const TestimonialData02 = [
        {
            id: '1',
            img: '../images/resource/reviewer-1.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Trent Ballinger'
        },
        {
            id: '2',
            img: '../images/resource/reviewer-2.png',
            tag: 'Manager, PPS',
            name: 'Kevin Miller'
        },
        {
            id: '3',
            img: '../images/resource/reviewer-3.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Trent Ballinger'
        },
        {
            id: '4',
            img: '../images/resource/reviewer-4.png',
            tag: 'Manager, PPS',
            name: 'Kevin Miller'
        },
        {
            id: '5',
            img: '../images/resource/reviewer-5.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Trent Ballinger'
        },
        {
            id: '6',
            img: '../images/resource/reviewer-6.png',
            tag: 'Manager, PPS',
            name: 'Kevin Miller'
        },
        {
            id: '7',
            img: '../images/resource/reviewer-1.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Trent Ballinger'
        },
        {
            id: '8',
            img: '../images/resource/reviewer-2.png',
            tag: 'Manager, PPS',
            name: 'Kevin Miller'
        },
        {
            id: '9',
            img: '../images/resource/reviewer-3.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Trent Ballinger'
        },
        {
            id: '10',
            img: '../images/resource/reviewer-4.png',
            tag: 'Manager, PPS',
            name: 'Kevin Miller'
        },
        {
            id: '11',
            img: '../images/resource/reviewer-5.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Trent Ballinger'
        },
        {
            id: '12',
            img: '../images/resource/reviewer-6.png',
            tag: 'Manager, PPS',
            name: 'Kevin Miller'
        },
    ];
    return (
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

                                <Swiper
                                    className="owl-stage-outer"
                                    modules={[Autoplay, Pagination]}
                                    autoplay={{
                                        delay: 7000,
                                        disableOnInteraction: true,
                                        speed: 50
                                    }}
                                    breakpoints={{
                                        640: {
                                            width: 381,
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            width: 408,
                                            slidesPerView: 1,
                                        },
                                        992: {
                                            width: 498,
                                            slidesPerView: 1,
                                        },

                                        // 640: {
                                        //     width: 640,
                                        //     slidesPerView: 1,
                                        // },
                                        // 768: {
                                        //     width: 768,
                                        //     slidesPerView: 2,
                                        // },
                                        // 992: {
                                        //     width: 992,
                                        //     slidesPerView: 3,
                                        // },
                                    }}
                                    loop={true}
                                    // spaceBetween={5}
                                    pagination={{
                                        el: '.testimonial-pagination',
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}

                                >
                                    {
                                        TestimonialData02.map(data => <SwiperSlide><TestimonialBlock02
                                            key={data.id}
                                            data={data}
                                        /></SwiperSlide>)
                                    }

                                </Swiper>

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
    );
};

export default InvestmentTestimonials;