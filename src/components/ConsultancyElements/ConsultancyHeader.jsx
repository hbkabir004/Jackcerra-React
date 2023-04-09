import React, { useState } from 'react';
import AsideInfoBar from '../common/AsideInfoBar';

const ConsultancyHeader = () => {
    const ConsultancyAsideData =
    {
        logo: 'images/logo.svg',
        href: '/consultancy'
    };


    // Sticky Header
    window.onscroll = () => {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            document.querySelector('header').classList.add('sticky');
        } else {
            document.querySelector('header').classList.remove('sticky');
        }
    }


    // Hide header on scroll down
    // let lastScroll = 800;
    // window.onscroll = () => {
    //     const currentScroll = window.pageYOffset;
    //     if (currentScroll <= 800) {
    //         document.querySelector('header').classList.remove('top-up');
    //         return;
    //     }

    //     if (currentScroll > lastScroll) {

    //         document.querySelector('header').classList.add('top-up');
    //     }
    //     else if (currentScroll < lastScroll) {
    //         document.querySelector('header').classList.remove('top-up');
    //     }
    //     lastScroll = currentScroll;
    // }

    // Aside info bar
    const [isAdd, setAdd] = useState("false");
    const handleAddCss = () => {
        setAdd(!isAdd);
    };

    // Search width increase
    const [isActive, setActive] = useState('false');
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
            <header className="main-header two">

                {/* <!-- Header Top --> */}
                <div className="header-top">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            {/* <!-- Left Box --> */}
                            <div className="left-box d-flex align-items-center">
                                {/* <!-- Social Box --> */}
                                <ul className="social-box">
                                    <li><a href="https:/www.facebook.com/" className="fa fa-facebook-f"></a></li>
                                    <li><a href="https:/www.instagram.com/" className="fa fa-instagram"></a></li>
                                    <li><a href="https:/www.twitter.com/" className="fa fa-twitter"></a></li>
                                    <li><a href="https:/www.linkedin.com/" className="fa fa-linkedin"></a></li>
                                </ul>
                            </div>

                            {/* <!-- Right Box --> */}
                            <div className="right-box d-flex align-items-center">
                                <ul className="info-list">
                                    <li><a href="mailto:jackcerra@gmail.com"><span className="icon fa fa-envelope"></span>jackcerra@gmail.com</a></li>
                                    <li><a href="#"><span className="icon fa fa-map-marker"></span>231 madison Street, NewYork,USA</a></li>
                                </ul>

                                {/* <!-- Button Box --> */}
                                <div className="button-box d-none d-lg-flex">
                                    <a href="contact" className="btn clearfix">
                                        <span className="btn-wrap">
                                            <span className="text-one">Get Free Quote</span>
                                            <span className="text-two">Get Free Quote</span>
                                        </span>
                                    </a>
                                </div>
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
                                <div className="logo"><a href="/consultancy"><img src="/images/logo.svg" alt="img" title="" /></a></div>
                            </div>
                            <div className="nav-outer d-flex align-items-center">

                                {/* <!-- Main Menu --> */}
                                <nav className="main-menu d-none d-lg-block">
                                    <div className="navbar-collapse collapse clearfix" >
                                        <ul className="navigation clearfix">
                                            <li className="dropdown"><a href="/consultancy">Home</a>
                                                <ul>
                                                    <li><a href="/consultancy">Home</a></li>
                                                    <li><a href="../business/">Business</a></li>
                                                    <li><a href="../insurance/">Insurance</a></li>
                                                    <li><a href="../investment/">Investment</a></li>
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
                                            <li><a href="/contact">Contact</a></li>
                                        </ul>
                                    </div>

                                </nav>
                                {/* <!-- Main Menu End--> */}

                                {/* <!-- Outer Box --> */}
                                <div className="outer-box d-flex align-items-center">

                                    {/* <!-- Header Search --> */}
                                    <div onClick={handleToggle} className="header_search d-none d-sm-block">
                                        <form className={isActive ? null : "active"} id="search_form" >
                                            <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                            <button type="submit" className="form-control-submit"><img src="images/icons/search.png" alt="img" /></button>
                                        </form>
                                    </div>

                                    {/* <!-- Aside Panel --> */}
                                    <a onClick={handleAddCss} href="#" className="aside_open d-none d-sm-block"><img src="images/icons/menu.png" alt="img" /></a>

                                    {/* <!-- Responsive Menu --> */}
                                    {/* <button className="ma5menu__toggle d-lg-none d-block ms-3" type="button">
                                        <i className="bi bi-list"></i>
                                    </button> */}

                                    <button className="d-lg-none d-block ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHome" aria-controls="offcanvasHome"
                                    >
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

            <AsideInfoBar handleAddCss={handleAddCss} isAdd={isAdd} data={ConsultancyAsideData} />
            {/* <MobileNav /> */}
        </ >
    );
};

export default ConsultancyHeader;