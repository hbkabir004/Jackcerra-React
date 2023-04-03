import React from 'react';
import { Autoplay, Controller, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle02 from '../../components/ConsultancyElements/SectionTitle02';
import TestimonialBlock from '../../components/ConsultancyElements/TestimonialBlock';
const Testimonials = () => {
    const TestimonialData = [
        {
            id: '1',
            img: 'images/resource/reviewer-1.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Trent Ballinger'
        },
        {
            id: '2',
            img: 'images/resource/reviewer-2.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Soamson Doglus'
        },
        {
            id: '3',
            img: 'images/resource/reviewer-3.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Hazel Grace'
        },
        {
            id: '4',
            img: 'images/resource/reviewer-4.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Trent Ballinger'
        },
        {
            id: '5',
            img: 'images/resource/reviewer-5.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Soamson Doglus'
        },
        {
            id: '6',
            img: 'images/resource/reviewer-6.png',
            tag: 'CEO, Bizzbreak Inc.',
            name: 'Hazel Grace'
        },
    ];
    return (
        <section className="testimonial-section two" style={{ backgroundImage: `url(images/background/13.jpg)` }}>
            <div className="container">
                <div className="row d-block d-lg-flex clearfix flex-nowrap">

                    {/* <!-- Title Column --> */}
                    <div className="title-column col-xl-4 col-lg-4 col-md-12 col-sm-12 pe-0">
                        <div className="inner-column">
                            <SectionTitle02
                                title="CLIENTS TESTIMONIAL"
                                header="What our Clients"
                                ext="say about Us"
                            />

                        </div>
                    </div>

                    {/* <!-- Carousel Column --> */}
                    <div className="carousel-column">
                        <div className="inner-column">
                            <div className="testimonial-carousel-two owl-carousel owl-theme">
                                <Swiper
                                    className="owl-stage-outer"
                                    modules={[Controller, Autoplay, Pagination]}
                                    // autoplay={{
                                    //     delay: 5000,
                                    //     disableOnInteraction: true,
                                    //     speed: 100
                                    // }}
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
                                    // controller={{ inverse: true }}
                                    spaceBetween={5}
                                    pagination={{
                                        el: '.testimonial-pagination',
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}

                                >
                                    {
                                        TestimonialData.map(data => <SwiperSlide><TestimonialBlock
                                            key={data.id}
                                            data={data}
                                        /></SwiperSlide>)
                                    }

                                </Swiper>



                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;