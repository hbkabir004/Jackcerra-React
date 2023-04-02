import React from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    return (
        <div class="progress-wrap active-progress">
            <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" className='scroll-to-top'></path>
            </svg>
        </div>
    );
};

export default ScrollToTop;