import $ from 'jquery';
import React, { useEffect } from 'react';
import Fancybox from '../../assets/plugins/fancybox';


const WhyChooseUs = () => {
    useEffect(() => {
        var $ytvideoTrigger = $(".ytplay-btn");
        $ytvideoTrigger.on("click", function (evt) {
            $(".ytube-video").addClass("play");
            $("#ytvideo")[0].src += "?autoplay=1";
        });


    }, []);

    return (
        <section className="why-choose-section py-0">
            <div className="container">
                <div className="inner-container">
                    <div className="row clearfix">
                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* <!-- Sec Title --> */}
                                <div className="sec-title">
                                    <div className="title"> <div className="separator"></div> Why Choose Us</div>
                                    <h1>Main Reasons To Choose Us</h1>
                                </div>

                                {/* <!-- Feature Block --> */}
                                <div className="feature-block">
                                    <div className="inner-box">
                                        <span className="icon"><img src="../images/icons/globe-2.png" alt="img" /></span>
                                        <h5>Operating All over the World</h5>
                                        A business firm is either the sole proprietorship partnership owned by an individual.
                                    </div>
                                </div>

                                {/* <!-- Feature Block --> */}
                                <div className="feature-block">
                                    <div className="inner-box">
                                        <span className="icon"><img src="../images/icons/people-2.png" alt="img" /></span>
                                        <h5>Trusted By Agile Companies</h5>
                                        Designing and implementing the technology tools that they need to win.
                                    </div>
                                </div>

                                {/* <!-- Button Box --> */}
                                <div className="button-box d-flex align-items-center flex-wrap">
                                    <a href="#" className="btn">
                                        <span className="btn-wrap">
                                            <span className="text-one">Learn More</span>
                                            <span className="text-two">Learn More</span>
                                        </span>
                                    </a>
                                    {/* <!-- Play Box --> */}
                                    <Fancybox options={{ dragToClose: false }}>
                                        <a href="https://www.youtube.com/watch?v=kxPCFljwJws" data-fancybox="video" className="lightbox-video play-box">
                                            <span><i className="fa fa-play"></i></span> Watch Video
                                        </a>
                                    </Fancybox>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="../images/resource/business-7.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;