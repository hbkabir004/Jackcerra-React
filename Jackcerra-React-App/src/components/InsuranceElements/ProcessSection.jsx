import $ from 'jquery';
import React, { useEffect } from 'react';
import Fancybox from '../../assets/plugins/fancybox';

const ProcessSection = () => {
    useEffect(() => {
        var $ytvideoTrigger = $(".ytplay-btn");
        $ytvideoTrigger.on("click", function (evt) {
            $(".ytube-video").addClass("play");
            $("#ytvideo")[0].src += "?autoplay=1";
        });

    }, []);
    return (
        <div className="business-process mt-5">
            <div className="container">
                <div className="inner-container">
                    <div className="row clearfix align-items-center">
                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-7 col-md-7 col-sm-12">
                            <div className="inner-column text-center">
                                <div className="image" data-tilt>
                                    <img src="../images/resource/business-10.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-5 col-md-5 col-sm-12 ps-lg-0">
                            <div className="inner-column">
                                {/* <!-- Sec Title --> */}
                                <div className="sec-title">
                                    <div className="title"> About Jackcerra Insurance</div>
                                    <h1>Want to create Real impact in Peoples Lives</h1>
                                </div>

                                <div className="text">We’re a global community of individuals with a
                                    shared purpose. See how our people go above and
                                    beyond each day to help build a more confident
                                    future for all.</div>

                                {/* <!-- Button Box --> */}
                                <div className="button-box d-flex align-items-center flex-wrap">
                                    <a href="#" className="btn mb-3 mb-xl-0">
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;