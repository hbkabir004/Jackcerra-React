import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CaseBlock from '../../components/BusinessElements/CaseBlock';
import Video from '../../components/common/Video';

const BusinessIdeas = () => {
    const BusinessIdeasData = [
        {
            id: '1',
            num: 'One',
            title: "Marketing Campaign For",
            title02: "XYZ Corp 2021",
            description: 'Jackcerra is a full service consultation firm with record of winning so many campaigns under most challenging circumstances by team of our expert consultants. We help businesses bring ideas to life in the digital world by designing and implementing the technology tools that they need to win.'
        },
        {
            id: '2',
            num: 'Two',
            title: 'Data Analysis for Share Holders',
            description: 'Jackcerra is a full service consultation firm with record of winning so many campaigns under most challenging circumstances by team of our expert consultants. We help businesses bring ideas to life in the digital world by designing and implementing the technology tools that they need to win.'
        },
        {
            id: '3',
            num: 'Three',
            title: "Marketing Campaign For",
            title02: "XYZ Corp 2021",
            description: 'Jackcerra is a full service consultation firm with record of winning so many campaigns under most challenging circumstances by team of our expert consultants. We help businesses bring ideas to life in the digital world by designing and implementing the technology tools that they need to win.'
        },
    ];
    return (
        <section className="business-section">
            <div className="image-layer" style={{ backgroundImage: `url(../images/background/31.jpg)` }}></div>
            <div className="container">
                {/* <!-- Upper Box --> */}
                <div className="upper-box">
                    <div className="separator"></div>
                    <h1>We help businesses bring <span>ideas & implementing</span> them. Have a look on The Case Studies</h1>
                </div>
                <div className="inner-container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="business-case-column">
                                <div className="business-case-carousel owl-carousel owl-theme">

                                    <Swiper
                                        className="owl-stage-outer"
                                        modules={[Pagination]}
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
                                        pagination={{
                                            el: '.testimonial-pagination',
                                            clickable: true,
                                            dynamicBullets: true,
                                        }}

                                    >
                                        {
                                            BusinessIdeasData.map(data => <SwiperSlide><CaseBlock
                                                key={data.id}
                                                data={data}
                                            /></SwiperSlide>)
                                        }

                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <Video img='../images/background/25.jpg' link='https://www.youtube.com/embed/fEErySYqItI' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessIdeas;