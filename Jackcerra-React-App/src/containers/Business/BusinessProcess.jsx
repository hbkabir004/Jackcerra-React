import $ from 'jquery';
import React, { useEffect } from 'react';
import Fancybox from '../../assets/js/fancybox';

const BusinessProcess = () => {
    useEffect(() => {
        var $ytvideoTrigger = $(".ytplay-btn");
        $ytvideoTrigger.on("click", function (evt) {
            $(".ytube-video").addClass("play");
            $("#ytvideo")[0].src += "?autoplay=1";
        });

    }, []);
    return (
        <section className="business-process">
            <div className="container">
                <div className="inner-container">
                    <div className="row clearfix align-items-center">
                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-7 col-md-7 col-sm-12">
                            <div className="inner-column text-center">
                                <div className="image" data-tilt>
                                    <img src="../images/resource/business-9.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-5 col-md-5 col-sm-12 ps-0">
                            <div className="inner-column">
                                {/* <!-- Sec Title --> */}
                                <div className="sec-title">
                                    <div className="title"> Our Business Process</div>
                                    <h1>Business Progress Depend on how we implement it</h1>
                                </div>

                                <div className="text">We help businesses bring ideas to life in the digital world
                                    by designing and implementing the technology tools that
                                    they need to win.We help businesses bring ideas to life in
                                    the digital  world, by designing.</div>

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

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessProcess;