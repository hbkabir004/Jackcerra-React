import React from 'react';
import { Autoplay, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderCard from '../../components/ConsultancyElements/SliderCard';

const MainSliders = () => {
    const SliderData = [
        {
            id: '1',
            bg: 'images/slider/1.jpg',
            title: 'Intelligent Decision Making',
            heading: 'Convert Business Ideas',
            mid: 'into',
            tag: 'Great Opportunities',
        },
        {
            id: '2',
            bg: 'images/slider/2.jpg',
            title: 'Best Consultation Service',
            heading: 'We appreciate Unique',
            tag: 'Business Ideas',
            last: 'from you',
        },
        {
            id: '3',
            bg: 'images/slider/3.jpg',
            title: 'Intelligent Decision Making',
            heading: 'Let’s Initiate a new',
            tag: 'Business Venture',
        },
    ];
    return (
        <section className="main-slider p-0">
            {/* <div className="main-slider-carousel owl-carousel owl-theme"> */}

            <Swiper
                // className="main-slider-carousel owl-carousel owl-theme"
                // style={{ transform: `translate3d(-3804px, 0px, 0px)` }, { transition: `all 0s ease 0s` }, { width: `13314px` }}
                modules={[Controller, Autoplay]}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: true,
                //     speed: 100
                // }}
                slidesPerView={1}
                loop={true}
                controller={{ inverse: true }}
                spaceBetween={5}
            >
                {
                    SliderData.map(data => <SwiperSlide><SliderCard
                        key={data.id}
                        data={data}
                    /></SwiperSlide>)
                }

            </Swiper>

            {/* </div> */}
        </section>
    );
};

export default MainSliders;