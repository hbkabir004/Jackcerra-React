import React from 'react';

const Video = () => {
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