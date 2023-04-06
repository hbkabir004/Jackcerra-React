import $ from 'jquery';
import React, { useEffect } from 'react';

const Video = () => {
    useEffect(() => {
        var $ytvideoTrigger = $(".ytplay-btn");
        $ytvideoTrigger.on("click", function (evt) {
            $(".ytube-video").addClass("play");
            $("#ytvideo")[0].src += "?autoplay=1";
        });

    }, []);
    return (
        <div class="video-post">
            <div class="ytube-video">
                <iframe id="ytvideo" src="https://www.youtube.com/embed/fEErySYqItI" allow="autoplay;" allowfullscreen=""></iframe>
                <div class="post-content">
                    <div class="ytplay-btn"><i class="fa fa-play"></i></div>
                    <img src="images/background/8.jpg" alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Video;