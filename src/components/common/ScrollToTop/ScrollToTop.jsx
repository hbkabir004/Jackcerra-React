import React from 'react';
import './ScrollToTop.css';
// import $ from 'jquery';

const ScrollToTop = () => {
    // useEffect(() => {
    //     // Page scroll progress 
    //     var e = document.querySelector(".progress-wrap path"),
    //         t = e.getTotalLength();
    //     (e.style.transition = e.style.WebkitTransition = "none"),
    //         (e.style.strokeDasharray = t + " " + t),
    //         (e.style.strokeDashoffset = t),
    //         e.getBoundingClientRect(),
    //         (e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear");
    //     var o = function () {
    //         var o = $(window).scrollTop(),
    //             r = $(document).height() - $(window).height(),
    //             i = t - (o * t) / r;
    //         e.style.strokeDashoffset = i;
    //     };
    //     o(), $(window).scroll(o);
    //     $(window).on("scroll", function () {
    //         $(this).scrollTop() > 50 ? $(".progress-wrap").addClass("active-progress") : $(".progress-wrap").removeClass("active-progress");
    //     }),
    //         $(".progress-wrap").on("click", function ($) {
    //             return $.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 550), !1;
    //         });

    // }, []);

    return (
        <div className="progress-wrap active-progress">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" className='scroll-to-top'></path>
            </svg>
        </div>
    );
};

export default ScrollToTop;