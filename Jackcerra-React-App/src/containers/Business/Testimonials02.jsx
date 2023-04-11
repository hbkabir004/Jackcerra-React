import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle02 from '../../components/ConsultancyElements/SectionTitle02';
import TestimonialBlock from '../../components/ConsultancyElements/TestimonialBlock';
const Testimonials02 = (props) => {
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
                    <div className="title-column col-lg-4 col-md-12 col-sm-12 px-lg-0">
                        <div className="inner-column">
                            <SectionTitle02
                                title="CLIENTS TESTIMONIAL"
                                header="What our Clients"
                                ext="say about Us"
                            />
                        </div>
                    </div>

                    {/* <!-- Carousel Column --> */}
                    <div className="carousel-column col-lg-8 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="testimonial-carousel owl-carousel owl-theme">
                                <Swiper
                                    className="owl-stage-outer"
                                    modules={[Autoplay, Pagination]}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: true,
                                        speed: 100
                                    }}

                                    breakpoints={{
                                        640: {
                                            width: 381,
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            width: 408,
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            width: 442,
                                            slidesPerView: 1,
                                        },


                                    }}
                                    loop={true}
                                    // spaceBetween={5}
                                    pagination={{
                                        el: '.owl-dots',
                                        clickable: true,
                                        // dynamicBullets: true,
                                    }}

                                >
                                    {
                                        TestimonialData02.map(data => <SwiperSlide><TestimonialBlock
                                            key={data.id}
                                            data={data}
                                        /></SwiperSlide>)
                                    }

                                </Swiper>

                                {/* <div className="owl-dots">
                                    <div className="owl-dot">
                                        <span></span>
                                    </div>
                                    <div className="owl-dot">
                                        <span></span>
                                    </div>
                                    <div className="owl-dot active">
                                        <span></span>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials02;