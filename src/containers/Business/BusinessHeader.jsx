import React from 'react';

const BusinessHeader = () => {
    return (
        <header className="main-header">

            {/* <!-- Header Top --> */}
            <div className="header-top">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        {/* <!-- Left Box --> */}
                        <div className="left-box d-flex align-items-center">
                            {/* <!-- Social Box --> */}
                            <ul className="social-box">
                                <li><a href="https://www.facebook.com/" className="fa fa-facebook-f"></a></li>
                                <li><a href="https://www.instagram.com/" className="fa fa-instagram"></a></li>
                                <li><a href="https://www.twitter.com/" className="fa fa-twitter"></a></li>
                                <li><a href="https://www.linkedin.com/" className="fa fa-linkedin"></a></li>
                            </ul>
                        </div>

                        {/* <!-- Right Box --> */}
                        <div className="right-box d-flex align-items-center">
                            <ul className="info-list">
                                <li><a href="mailto:jackcerra@gmail.com"><span className="icon fa fa-envelope"></span>jackcerra@gmail.com</a></li>
                                <li><a href="#"><span className="icon fa fa-map-marker"></span>231 madison Street, NewYork,USA</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Header Lower --> */}
            <div className="header-lower">

                <div className="container">
                    <div className="inner-container d-flex justify-content-between align-items-center">

                        <div className="logo-box">
                            {/* <!-- Logo --> */}
                            <div className="logo"><a href="/business"><img src="images/logo-business.svg" alt="img" title="" /></a></div>
                        </div>
                        <div className="nav-outer d-flex align-items-center">

                            {/* <!-- Main Menu --> */}
                            <nav className="main-menu d-none d-lg-block">
                                <div className="navbar-collapse collapse clearfix" >
                                    <ul className="navigation clearfix">
                                        <li className="dropdown"><a href="index.html">Home</a>
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="../consultancy">Consultancy</a></li>
                                                <li><a href="../insurance">Insurance</a></li>
                                                <li><a href="../investment">Investment</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Pages</a>
                                            <ul>
                                                <li><a href="/about">About Us</a></li>
                                                <li><a href="/team">Our Team</a></li>
                                                <li><a href="/faq">FAQ</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Services</a>
                                            <ul>
                                                <li><a href="/service">Service One</a></li>
                                                <li><a href="/service-2">Service Two</a></li>
                                                <li><a href="/service-details">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Blog</a>
                                            <ul>
                                                <li><a href="/blog">Blog Standard</a></li>
                                                <li><a href="/blog-2">Blog Grid</a></li>
                                                <li><a href="/blog-3">Blog Grid with Sidebar</a></li>
                                                <li><a href="/blog-details">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact.html">Contact</a></li>
                                    </ul>
                                </div>

                            </nav>
                            {/* <!-- Main Menu End--> */}

                            {/* <!-- Outer Box --> */}
                            <div className="outer-box d-flex align-items-center">

                                {/* <!-- Button Box --> */}
                                <div className="button-box d-none d-sm-block">
                                    <a href="contact.html" className="btn clearfix">
                                        <span className="btn-wrap">
                                            <span className="text-one">Get Free Quote</span>
                                            <span className="text-two">Get Free Quote</span>
                                        </span>
                                    </a>
                                </div>

                                {/* <!-- Responsive Menu --> */}
                                <button className="ma5menu__toggle d-lg-none d-block ms-3" type="button">
                                    <i className="bi bi-list"></i>
                                </button>
                            </div>
                            {/* <!-- End Outer Box --> */}

                        </div>

                    </div>

                </div>
            </div>
            {/* <!-- End Header Lower --> */}

        </header>
    );
};

export default BusinessHeader;