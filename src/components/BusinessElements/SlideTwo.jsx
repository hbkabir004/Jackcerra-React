import React from 'react';

const SlideTwo = () => {
    return (
        <>
            {/* <!-- Slide Two --> */}
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
            {/* <!-- End Slide Two -->  */}
        </>
    );
};

export default SlideTwo;