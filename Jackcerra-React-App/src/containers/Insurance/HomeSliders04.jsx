import React from 'react';
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeSliders04 = () => {
    return (
        <div className="fourth-slider">
            {/* <div > */}
            <Swiper
                className="main-slider-carousel owl-carousel owl-theme"
                modules={[Autoplay, EffectFade]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    speed: 100
                }}
                effect={"fade"}
                loop={true}
            >
                {/* <!-- Slide One --> */}
                <SwiperSlide>
                    <div className="slide">
                        <div className="container">
                            <div className="slide-inner">
                                <div className="image-layer" style={{ backgroundImage: `url(../images/slider/10.jpg)` }}></div>
                                <div className="row clearfix align-items-center">

                                    {/* <!-- Content Column --> */}
                                    <div className="content-column col-lg-8 col-md-9 col-sm-10">
                                        <div className="inner-column">
                                            <div className="title">CREATING IMPACT THROUGH INSURANCE</div>
                                            <h1>Get <span>Insurance</span> For <br /> Security & Assurance</h1>
                                            <div className="text">We’re a global community of individuals with a shared purpose. See how <br />
                                                people go above & beyond each day to help build a confident future for all.
                                            </div>
                                            <div className="options-box">
                                                {/* <!-- Button Box --> */}
                                                <div className="button-box d-flex flex-wrap">
                                                    <a href="/service-details" className="btn">
                                                        <span className="btn-wrap">
                                                            <span className="text-one">Learn More</span>
                                                            <span className="text-two">Learn More</span>
                                                        </span>
                                                    </a>

                                                    <a href="/service" className="btn btn-two">
                                                        <span className="btn-wrap">
                                                            <span className="text-one">Get Service</span>
                                                            <span className="text-two">Get Service</span>
                                                        </span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="content-image-layer"><img src="../images/slider/11.png" alt="img" /></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="slide">
                        <div className="container">
                            <div className="slide-inner">
                                <div className="image-layer" style={{ backgroundImage: `url(../images/slider/10.jpg)` }}></div>
                                <div className="row clearfix align-items-center">

                                    {/* <!-- Content Column --> */}
                                    <div className="content-column col-lg-8 col-md-9 col-sm-10">
                                        <div className="inner-column">
                                            <div className="title">CREATING IMPACT THROUGH INSURANCE</div>
                                            <h1>Get <span>Insurance</span> For <br /> Risk-free Future</h1>
                                            <div className="text">We’re a global community of individuals with a shared purpose. See how <br />
                                                people go above & beyond each day to help build a confident future for all.
                                            </div>
                                            <div className="options-box">
                                                {/* <!-- Button Box --> */}
                                                <div className="button-box d-flex flex-wrap">
                                                    <a href="/service-details" className="btn">
                                                        <span className="btn-wrap">
                                                            <span className="text-one">Learn More</span>
                                                            <span className="text-two">Learn More</span>
                                                        </span>
                                                    </a>

                                                    <a href="/service" className="btn btn-two">
                                                        <span className="btn-wrap">
                                                            <span className="text-one">Get Service</span>
                                                            <span className="text-two">Get Service</span>
                                                        </span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="content-image-layer"><img src="../images/slider/11-2.png" alt="img" /></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* </div> */}
        </div>
    );
};

export default HomeSliders04;