import React from 'react';

const ConsultancyFooter = () => {
    return (
        <footer class="main-footer">
            <div class="container">

                {/* <!-- Upper Box --> */}
                <div class="upper-box">
                    <div class="row clearfix align-items-center">
                        {/* <!-- Logo Column --> */}
                        <div class="logo-column col-lg-3 col-md-12 col-sm-12">
                            <div class="logo"><a href="index.html"><img src="images/logo-footer.svg" alt="img" title="" /></a></div>
                        </div>
                        {/* <!-- Info Column --> */}
                        <div class="info-column col-lg-9 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="pattern-layer" style={{ backgroundImage: `url(images/background/4.png)` }}></div>
                                <div class="d-flex justify-content-between align-items-center flex-wrap">
                                    <h3>Let’s Discuss Your Next Campeign</h3>
                                    {/* <!-- Button Box --> */}
                                    <div class="button-box">
                                        <a href="#" class="btn btn-two">
                                            <span class="btn-wrap">
                                                <span class="text-one">get appointment</span>
                                                <span class="text-two">get appointment</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Widgets Section --> */}
                <div class="widgets-section">
                    <div class="row clearfix">

                        {/* <!-- Column --> */}
                        <div class="big-column col-lg-6 col-md-12 col-sm-12">
                            <div class="row clearfix">

                                {/* <!-- Footer Column --> */}
                                <div class="footer-column col-lg-7 col-md-6 col-sm-12">
                                    <div class="footer-widget about-widget">
                                        <h4>About Us</h4>
                                        <div class="text">Jackcerra is a Business firm with record of winning many projects
                                            under tough circumstances.</div>
                                        <div class="newsletter-form">
                                            <form method="post" action="contact.html">
                                                <div class="form-group">
                                                    <input type="email" name="email" value="" placeholder="Email Address" required="" />
                                                    <button type="submit" class="btn-submit fa fa-send"></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Footer Column --> */}
                                <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div class="footer-widget links-widget">
                                        <h4>Useful Links</h4>
                                        <ul class="links">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="team.html">Team Member</a></li>
                                            <li><a href="service.html">Services</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="contact.html">Hire us</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* <!-- Column --> */}
                        <div class="big-column col-lg-6 col-md-12 col-sm-12">
                            <div class="row clearfix">

                                {/* <!-- Footer Column --> */}
                                <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div class="footer-widget links-widget">
                                        <h4>Sub Pages</h4>
                                        <ul class="links">
                                            <li><a href="#">Conditions</a></li>
                                            <li><a href="#">Customer Care</a></li>
                                            <li><a href="#">Support Team</a></li>
                                            <li><a href="#">FAQ Support</a></li>
                                            <li><a href="#">Terms & Policy</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Footer Column --> */}
                                <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div class="footer-widget links-widget">
                                        <h4>contact us</h4>
                                        <ul class="contact-list">
                                            <li><span class="icon fa fa-phone"></span><a href="tel:+987-654-321-228-11">(+987) 654 321 228 11</a></li>
                                            <li><span class="icon fa fa-envelope"></span><a href="mailto:jackcerra@email.com">jackcerra@email.com</a></li>
                                            <li><span class="icon fa fa-map-marker"></span>28 Street, New York City <br /> Untes States of America</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* <!-- Footer Bottom --> */}
                <div class="footer-bottom">
                    <div class="d-flex justify-content-between align-items-center flex-wrap">
                        <div class="left-box">
                            <div class="copyright">&copy; 2023 <a href="#">wpthemebooster</a>, All Rights Reserved</div>
                        </div>
                        <div class="right-box d-flex">
                            {/* <!-- Social Box --> */}
                            <ul class="social-box">
                                <li><a href="https://www.facebook.com/" class="fa fa-facebook-f"></a></li>
                                <li><a href="https://www.instagram.com/" class="fa fa-instagram"></a></li>
                                <li><a href="https://www.twitter.com/" class="fa fa-twitter"></a></li>
                                <li><a href="https://www.linkedin.com/" class="fa fa-linkedin"></a></li>
                            </ul>
                            <div class="language dropdown">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false"><span>English (US)</span> <span class="fa fa-angle-down"></span></button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">German</a></li>
                                    <li><a href="#">Arabic</a></li>
                                    <li><a href="#">Hindi</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default ConsultancyFooter;