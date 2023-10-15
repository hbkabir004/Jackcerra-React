import React from 'react';
import './ScrollToTop.css';
// import $ from 'jquery';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory()


const ScrollToTop = () => {
    const toTop = () => {
        window.scroll({ top: 0, left: 0 });
    }

    return (
        <div onClick={toTop} className="progress-wrap active-progress">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" className='scroll-to-top'></path>
            </svg>
        </div>
    );
};

export default ScrollToTop;