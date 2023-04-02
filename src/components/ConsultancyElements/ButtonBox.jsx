import React from 'react';

const ButtonBox = () => {
    return (
        <div className="button-box d-flex align-items-center flex-wrap">
            <a href="#" className="btn">
                <span className="btn-wrap">
                    <span className="text-one">Contact Us</span>
                    <span className="text-two">Contact Us</span>
                </span>
            </a>
            {/* <!-- Play Box --> */}
            <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box">
                <span><i className="fa fa-play"></i></span> Watch Video
            </a>
        </div>
    );
};

export default ButtonBox;