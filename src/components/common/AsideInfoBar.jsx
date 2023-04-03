import React from 'react';

const AsideInfoBar = ({ handleAddCss, isAdd }) => {

    return (
        <div style={!isAdd ? { left: '0px' } : { left: '-500px' }} className="aside_info">
            <div onClick={handleAddCss} className="aside_close"><i className="fa fa-close"></i></div>
            <div className="logo-side">
                <a href="/consultancy">
                    <img src="images/logo.svg" alt="img" />
                </a>
            </div>
            <div className="side-about-info">
                <h5>About Us</h5>
                <p>Jackcerra is a full-service consultation firm with record of winning many successful campaigns.</p>
                <p>For a growing business firm we provide market research & competitor analysis before a product launch in market.</p>
            </div>

            <div className="side-contact-info">
                <h5>Contact Us</h5>
                <p><a href="mailto:jackcerra.care@email.com">jackcerra.care@email.com</a></p>
                <p>(+987) 654 321 228 14</p>
                <p>28 Street, New York City, USA</p>
            </div>

            <div className="aside-social">
                <ul className="d-flex align-items-center justify-content-center">
                    <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li className="youtube"><a href="#"><i className="fa fa-youtube"></i></a></li>
                    <li className="instagram"><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    );
};

export default AsideInfoBar;