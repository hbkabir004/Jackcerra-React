import React from 'react';

const InvestmentFooter = () => {
    return (
        <footer className="main-footer">
            <div className="container">

                {/* <!-- Widgets Section --> */}
                <div className="widgets-section">
                    <div className="row align-items-center">

                        {/* <!-- Column --> */}
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            {/* <!-- Footer Column --> */}
                            <div className="footer-column">
                                <div className="footer-widget large-text">
                                    <img src="../images/icons/asterisk.png" alt="img" />
                                    <h1>Let’s<br /> Discuss <img src="../images/icons/arrow.png" alt="icon" /></h1>
                                    <h2>Business Together</h2>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Column --> */}
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row">

                                {/* <!-- Footer Column --> */}
                                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                    <div className="logo-column">
                                        <div className="logo"><a href="/"><img src="../images/logo-footer-invest.svg" alt="img" title="" /></a></div>
                                        <p>Jackcerra is a full-service Investment firm with help companies to utilize their investment & to grow</p>
                                        <ul className="contact-list">
                                            <li><span className="icon"><img src="../images/icons/envelope.png" alt="img" /></span> <a href="mailto:jackcerra@email.com">Jackcerra.inc@gmail.com</a></li>
                                            <li><span className="icon"><img src="../images/icons/call.png" alt="img" /></span> <a href="tel:+987-654-321-228-11">Call Us: +222 12345611</a></li>
                                        </ul>

                                        <ul className="social-box">
                                            <li><a href="https://www.facebook.com/" className="fa fa-facebook-f"></a></li>
                                            <li><a href="https://www.instagram.com/" className="fa fa-instagram"></a></li>
                                            <li><a href="https://www.twitter.com/" className="fa fa-twitter"></a></li>
                                            <li><a href="https://www.linkedin.com/" className="fa fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Footer Column --> */}
                                <div className="footer-column col-lg-4 col-md-6 col-sm-12 offset-lg-1 mt-5 mt-md-0">
                                    <div className="links-widget">
                                        <h4>Useful Links</h4>
                                        <ul className="links">
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Team Member</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Latest News</a></li>
                                            <li><a href="#">Contact Us</a></li>
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
                        <div className="right-box  terms-policy d-flex align-items-center">
                            <a href="#" className="tems">Privacy Policy</a>
                            <a href="#" className="tems">Terms & Condition</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default InvestmentFooter;