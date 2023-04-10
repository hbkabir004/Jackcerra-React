import React from 'react';
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const BusinessSliders = () => {
    return (
        <div class="third-slider">
            <div class="main-slider-carousel owl-carousel owl-theme">

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
                        <div class="slide">
                            <div class="container">
                                <div class="slide-inner">
                                    <div class="image-layer" style={{ backgroundImage: `url(../images/slider/8.jpg)` }}></div>
                                    <div class="row clearfix align-items-center">

                                        {/* <!-- Content Column --> */}
                                        <div class="content-column col-lg-6 col-md-7 col-sm-12">
                                            <div class="inner-column">
                                                <div class="title">Intelligent Decision Making</div>
                                                <h1>As a <span>Business Firm</span> <br /> We are ready to set Big Milestones</h1>
                                                <div class="options-box">
                                                    {/* <!-- Button Box --> */}
                                                    <div class="button-box d-flex flex-wrap">
                                                        <a href="#" class="btn">
                                                            <span class="btn-wrap">
                                                                <span class="text-one">Learn More</span>
                                                                <span class="text-two">Learn More</span>
                                                            </span>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="content-image-layer"><img src="../images/slider/9.png" alt="img" /></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <!-- Slide Two --> */}
                    <SwiperSlide>
                        <div class="slide">
                            <div class="container">
                                <div class="slide-inner">
                                    <div class="image-layer" style={{ backgroundImage: `url(../images/slider/8.jpg)` }}></div>
                                    <div class="row clearfix align-items-center">

                                        {/* <!-- Content Column --> */}
                                        <div class="content-column col-lg-6 col-md-7 col-sm-12">
                                            <div class="inner-column">
                                                <div class="title">Intelligent Decision Making</div>
                                                <h1>We appreciate <br /> Unique <span>Business Ideas</span> from you</h1>
                                                <div class="options-box">
                                                    {/* <!-- Button Box --> */}
                                                    <div class="button-box d-flex flex-wrap">
                                                        <a href="#" class="btn">
                                                            <span class="btn-wrap">
                                                                <span class="text-one">Learn More</span>
                                                                <span class="text-two">Learn More</span>
                                                            </span>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="content-image-layer"><img src="../images/slider/9-2.png" alt="img" /></div>
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