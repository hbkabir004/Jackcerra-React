import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CaseBlock from '../../components/InvestmentElements/CaseBlock';

const InvestmentCaseStudy = () => {
    const InvestmentServiceData = [
        {
            id: '1',
            img: '../images/case/1.jpg',
            title: 'Business Growth',
            text: 'Market Research'
        },
        {
            id: '2',
            img: '../images/case/2.jpg',
            title: 'Data Analysis in MaxQDA',
            text: 'Business Analysis'
        },
        {
            id: '3',
            img: '../images/case/3.jpg',
            title: 'Marketing Plan for Marico',
            text: 'Marketing Analysis'
        },
        {
            id: '4',
            img: '../images/case/2.jpg',
            title: 'Data Analysis in MaxQDA',
            text: 'Business Analysis'
        },
        {
            id: '5',
            img: '../images/case/3.jpg',
            title: 'Marketing Plan for Marico',
            text: 'Marketing Analysis'
        },
    ];
    return (
        <section className="case-study-section" style={{ backgroundImage: `url(../images/background/20.jpg)` }} >
            <div className="container">
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

                        <Swiper
                            className="owl-stage-outer"
                            modules={[Pagination]}
                            // autoplay={{
                            //     delay: 7000,
                            //     disableOnInteraction: true,
                            //     speed: 50
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
                                InvestmentServiceData.map(data => <SwiperSlide><CaseBlock
                                    key={data.id}
                                    data={data}
                                /></SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentCaseStudy;