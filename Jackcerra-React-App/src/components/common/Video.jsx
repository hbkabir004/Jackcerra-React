import $ from 'jquery';
import React, { useEffect } from 'react';

const Video = (props) => {
    useEffect(() => {
        var $ytvideoTrigger = $(".ytplay-btn");
        $ytvideoTrigger.on("click", function (evt) {
            $(".ytube-video").addClass("play");
            $("#ytvideo")[0].src += "?autoplay=1";
        });

    }, []);
    return (
        <div className="video-post">
            <div className="ytube-video">
                <iframe id="ytvideo" src={props.link} allow="autoplay;" allowfullscreen=""></iframe>
                <div className="post-content">
                    <div className="ytplay-btn"><i className="fa fa-play"></i></div>
                    <img src={props.img} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Video;