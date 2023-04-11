import React from 'react';
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const BusinessSliders = () => {
    return (
        <div className="third-slider">
            <div className="main-slider-carousel owl-carousel owl-theme">

                <Swiper
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
                                    <div className="image-layer" style={{ backgroundImage: `url(../images/slider/8.jpg)` }}></div>
                                    <div className="row clearfix align-items-center">

                                        {/* <!-- Content Column --> */}
                                        <div className="content-column col-lg-6 col-md-7 col-sm-12">
                                            <div className="inner-column">
                                                <div className="title">Intelligent Decision Making</div>
                                                <h1>As a <span>Business Firm</span> <br /> We are ready to set Big Milestones</h1>
                                                <div className="options-box">
                                                    {/* <!-- Button Box --> */}
                                                    <div className="button-box d-flex flex-wrap">
                                                        <a href="#" className="btn">
                                                            <span className="btn-wrap">
                                                                <span className="text-one">Learn More</span>
                                                                <span className="text-two">Learn More</span>
                                                            </span>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="content-image-layer"><img src="../images/slider/9.png" alt="img" /></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <!-- Slide Two --> */}
                    <SwiperSlide>
                        <div className="slide">
                            <div className="container">
                                <div className="slide-inner">
                                    <div className="image-layer" style={{ backgroundImage: `url(../images/slider/8.jpg)` }}></div>
                                    <div className="row clearfix align-items-center">

                                        {/* <!-- Content Column --> */}
                                        <div className="content-column col-lg-6 col-md-7 col-sm-12">
                                            <div className="inner-column">
                                                <div className="title">Intelligent Decision Making</div>
                                                <h1>We appreciate <br /> Unique <span>Business Ideas</span> from you</h1>
                                                <div className="options-box">
                                                    {/* <!-- Button Box --> */}
                                                    <div className="button-box d-flex flex-wrap">
                                                        <a href="#" className="btn">
                                                            <span className="btn-wrap">
                                                                <span className="text-one">Learn More</span>
                                                                <span className="text-two">Learn More</span>
                                                            </span>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="content-image-layer"><img src="../images/slider/9-2.png" alt="img" /></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default BusinessSliders;