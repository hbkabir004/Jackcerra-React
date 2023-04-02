import React from 'react';

const AsideInfoBar = () => {
    return (
        <div class="aside_info">
            <div class="aside_close"><i class="fa fa-close"></i></div>
            <div class="logo-side">
                <a href="index.html">
                    <img src="images/logo.svg" alt="img" />
                </a>
            </div>
            <div class="side-about-info">
                <h5>About Us</h5>
                <p>Jackcerra is a full-service consultation firm with record of winning many successful campaigns.</p>
                <p>For a growing business firm we provide market research & competitor analysis before a product launch in market.</p>
            </div>

            <div class="side-contact-info">
                <h5>Contact Us</h5>
                <p><a href="mailto:jackcerra.care@email.com">jackcerra.care@email.com</a></p>
                <p>(+987) 654 321 228 14</p>
                <p>28 Street, New York City, USA</p>
            </div>

            <div class="aside-social">
                <ul class="d-flex align-items-center justify-content-center">
                    <li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li class="youtube"><a href="#"><i class="fa fa-youtube"></i></a></li>
                    <li class="instagram"><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li class="linkedin"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    );
};

export default AsideInfoBar;