import React from 'react';

const SlideTwo = ({ data }) => {
    const { header01, header02, header03, header04, img } = data;
    return (
        <div class="slide">
            <div class="container">
                <div class="slide-inner">
                    <div class="image-layer" style={{ backgroundImage: `url(../images/slider/8.jpg)` }}></div>
                    <div class="row clearfix align-items-center">

                        {/* <!-- Content Column --> */}
                        <div class="content-column col-lg-6 col-md-7 col-sm-12">
                            <div class="inner-column">
                                <div class="title">{title}</div>
                                <h1>{header01} <br /> {header02} <span>{header03}</span> {header04}</h1>
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
                            <div class="content-image-layer"><img src={img} alt="img" /></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default SlideTwo;