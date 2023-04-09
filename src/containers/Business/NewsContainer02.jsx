import React from 'react';
import { Autoplay, Controller, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsBlock from '../../components/ConsultancyElements/NewsBlock';
import SectionTitle from '../../components/ConsultancyElements/SectionTitle';

const NewsContainer02 = () => {
    const NewsData02 = [
        {
            id: '1',
            img: '../images/blog/1.jpg',
            authorImg: '../images/blog/author-3.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Rayan Kellar'
        },
        {
            id: '2',
            img: '../images/blog/2.jpg',
            authorImg: '../images/blog/author-4.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Mellisa Obrian'
        },
        {
            id: '3',
            img: '../images/blog/3.jpg',
            authorImg: '../images/blog/author-5.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Jessica Ballinger'
        },
        {
            id: '4',
            img: '../images/blog/1.jpg',
            authorImg: '../images/blog/author-3.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Rayan Kellar'
        },
        {
            id: '5',
            img: '../images/blog/2.jpg',
            authorImg: '../images/blog/author-4.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Mellisa Obrian'
        },
        {
            id: '6',
            img: '../images/blog/3.jpg',
            authorImg: '../images/blog/author-5.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Jessica Ballinger'
        },
        {
            id: '7',
            img: '../images/blog/1.jpg',
            authorImg: '../images/blog/author-3.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Rayan Kellar'
        },
        {
            id: '8',
            img: '../images/blog/2.jpg',
            authorImg: '../images/blog/author-4.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Mellisa Obrian'
        },
        {
            id: '9',
            img: '../images/blog/3.jpg',
            authorImg: '../images/blog/author-5.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Jessica Ballinger'
        },
        {
            id: '10',
            img: '../images/blog/1.jpg',
            authorImg: '../images/blog/author-3.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Rayan Kellar'
        },
        {
            id: '11',
            img: '../images/blog/2.jpg',
            authorImg: '../images/blog/author-4.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Mellisa Obrian'
        },
        {
            id: '12',
            img: '../images/blog/3.jpg',
            authorImg: '../images/blog/author-5.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Jessica Ballinger'
        },
    ];

    return (
        <section className="news-section">
            <div className="container">
                <SectionTitle
                    title='Latest News'
                    header='Read Our Latest News'
                />

                <div className="news-carousel owl-carousel owl-theme">

                    <Swiper
                        className="owl-stage-outer"
                        modules={[Navigation, Controller, Autoplay]}
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
                            //     slidesPerView: 2,
                            // },
                        }}
                        // loop={true}
                        // controller={{ inverse: true }}
                        // spaceBetween={5}
                        navigation={{
                            prevEl: '.owl-prev',
                            nextEl: '.owl-next',
                        }}
                    >
                        {
                            NewsData02.map(data => <SwiperSlide><NewsBlock
                                key={data.id}
                                data={data}
                            /></SwiperSlide>)
                        }

                    </Swiper>

                    {/* <div class="owl-nav">
                        <div class="owl-prev">
                            <span class="fa fa-angle-left"></span>
                        </div>
                        <div class="owl-next">
                            <span class="fa fa-angle-right"></span>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default NewsContainer02;