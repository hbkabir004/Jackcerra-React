import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CaseBlock02 from '../../components/InsuranceElements/CaseBlock02';
import NewsLetter02 from '../../components/InsuranceElements/NewsLetter02';

const InsuranceCaseStudy = () => {
    const InsuranceCasestudyData = [
        {
            id: '1',
            img: '../images/case/4.jpg',
            title: 'Health Insurance',
        },
        {
            id: '2',
            img: '../images/case/5.jpg',
            title: 'Life Insurance',

        },
        {
            id: '3',
            img: '../images/case/6.jpg',
            title: 'House Insurance',

        },
        {
            id: '4',
            img: '../images/case/3.jpg',
            title: 'Car Insurance',

        },
        {
            id: '5',
            img: '../images/case/1.jpg',
            title: 'Company Insurance',

        },
    ];

    return (
        <section className="case-study-section" style={{ backgroundImage: `url(../images/background/26.jpg)` }}>
            <div className="container position-relative">
                {/* <!-- Sec Title --> */}
                <div className="sec-title">
                    <div className="d-flex justify-content-between flex-wrap align-items-end">
                        <div className="left-box">
                            <div className="title">We Provide</div>
                            <h1>We ensure best <br /> insurance services</h1>
                        </div>
                        <div className="right-box">
                            <div className="text">We’re a global community of individuals with a shared<br /> purpose. See how our people go above and beyond each<br /> day to help build a more confident future for all.</div>
                        </div>
                    </div>
                </div>

                <div className="case-list">
                    <div className="insurance-case-carousel owl-carousel owl-theme">
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
                                InsuranceCasestudyData.map(data => <SwiperSlide><CaseBlock02
                                    key={data.id}
                                    data={data}
                                /></SwiperSlide>)
                            }

                        </Swiper>

                    </div>
                </div>

                <NewsLetter02 />
            </div>
        </section>
    );
};

export default InsuranceCaseStudy;