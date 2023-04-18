import React from 'react';

const ConsultancyFooter = () => {
    return (
        <footer className="main-footer">
            <div className="container">

                {/* <!-- Upper Box --> */}
                <div className="upper-box">
                    <div className="row clearfix align-items-center">
                        {/* <!-- Logo Column --> */}
                        <div className="logo-column col-lg-3 col-md-12 col-sm-12">
                            <div className="logo"><a href="/"><img src="images/logo-footer.svg" alt="img" title="" /></a></div>
                        </div>
                        {/* <!-- Info Column --> */}
                        <div className="info-column col-lg-9 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="pattern-layer" style={{ backgroundImage: `url(images/background/4.png)` }}></div>
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                    <h3>Let’s Discuss Your Next Campeign</h3>
                                    {/* <!-- Button Box --> */}
                                    <div className="button-box">
                                        <a href="#" className="btn btn-two">
                                            <span className="btn-wrap">
                                                <span className="text-one">get appointment</span>
                                                <span className="text-two">get appointment</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Widgets Section --> */}
                <div className="widgets-section">
                    <div className="row clearfix">

                        {/* <!-- Column --> */}
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">

                                {/* <!-- Footer Column --> */}
                                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                    <div className="footer-widget about-widget">
                                        <h4>About Us</h4>
                                        <div className="text">Jackcerra is a Business firm with record of winning many projects
                                            under tough circumstances.</div>
                                        <div className="newsletter-form">
                                            <form method="post" action="/contact">
                                                <div className="form-group">
                                                    <input type="email" name="email" value="" placeholder="Email Address" required="" />
                                                    <button type="submit" className="btn-submit fa fa-send"></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Footer Column --> */}
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Useful Links</h4>
                                        <ul className="links">
                                            <li><a href="/about">About Us</a></li>
                                            <li><a href="/team">Team Member</a></li>
                                            <li><a href="/service">Services</a></li>
                                            <li><a href="/contact">Contact Us</a></li>
                                            <li><a href="/contact">Hire us</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* <!-- Column --> */}
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">

                                {/* <!-- Footer Column --> */}
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Sub Pages</h4>
                                        <ul className="links">
                                            <li><a href="#">Conditions</a></li>
                                            <li><a href="#">Customer Care</a></li>
                                            <li><a href="#">Support Team</a></li>
                                            <li><a href="#">FAQ Support</a></li>
                                            <li><a href="#">Terms & Policy</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Footer Column --> */}
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>contact us</h4>
                                        <ul className="contact-list">
                                            <li><span className="icon fa fa-phone"></span><a href="tel:+987-654-321-228-11">(+987) 654 321 228 11</a></li>
                                            <li><span className="icon fa fa-envelope"></span><a href="mailto:jackcerra@email.com">jackcerra@email.com</a></li>
                                            <li><span className="icon fa fa-map-marker"></span>28 Street, New York City <br /> Untes States of America</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* <!-- Footer Bottom --> */}
                <div className="footer-bottom">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="left-box">
                            <div className="copyright">&copy; 2023 <a href="#">wpthemebooster</a>, All Rights Reserved</div>
                        </div>
                        <div className="right-box d-flex">
                            {/* <!-- Social Box --> */}
                            <ul className="social-box">
                                <li><a href="https://www.facebook.com/" className="fa fa-facebook-f"></a></li>
                                <li><a href="https://www.instagram.com/" className="fa fa-instagram"></a></li>
                                <li><a href="https://www.twitter.com/" className="fa fa-twitter"></a></li>
                                <li><a href="https://www.linkedin.com/" className="fa fa-linkedin"></a></li>
                            </ul>
                            <div className="language dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false"><span>English (US)</span> <span className="fa fa-angle-down"></span></button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
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