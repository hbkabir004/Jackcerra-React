import $ from 'jquery';
import React, { useEffect } from 'react';
import Fancybox from "../../assets/plugins/fancybox";

const ButtonBox = () => {
    useEffect(() => {
        var $ytvideoTrigger = $(".ytplay-btn");
        $ytvideoTrigger.on("click", function (evt) {
            $(".ytube-video").addClass("play");
            $("#ytvideo")[0].src += "?autoplay=1";
        });

    }, []);
    return (
        <div className="button-box d-flex align-items-center flex-wrap">
            <a href="#" className="btn">
                <span className="btn-wrap">
                    <span className="text-one">Contact Us</span>
                    <span className="text-two">Contact Us</span>
                </span>
            </a>
            {/* <!-- Play Box --> */}
            <Fancybox options={{ dragToClose: false }}>
                <a href="https://www.youtube.com/watch?v=kxPCFljwJws" data-fancybox="video" className="lightbox-video play-box">
                    <span><i className="fa fa-play"></i></span> Watch Video
                </a>
            </Fancybox>


        </div>
    );
};

export default ButtonBox;