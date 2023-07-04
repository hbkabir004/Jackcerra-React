import $ from 'jquery';
import React, { useEffect } from 'react';
import './MobileNav.css';

const MobileNav = () => {
    useEffect(() => {
        var counter = 0;
        tablet();
        function tablet() {
            function checkMedia(mql) {
                if (mql.matches) {
                    counter++;
                    $(".mr_menu_02 .mr_navmenu").append($("ul.navigation"));
                    if (counter === 1) {
                        menuClickAction();
                    }
                } else {
                    $(".main-header .main-menu .navbar-collapse").append($("ul.navigation"));
                    if (counter === 1) {
                        menuClickAction();
                    }
                }
            }
            const mql = window.matchMedia('screen and (max-width: 991.90px)');

            checkMedia(mql);
            mql.addEventListener('change', checkMedia);
        }

        function menuClickAction() {
            // Sub-Menu Open On-Click
            $('.mr_menu_02 .mr_navmenu ul.navigation.clearfix li.dropdown').append($("<span class='submenu_opener d-lg-none'><i class='bi bi-chevron-right'></i></span>"));
            $('.mr_menu_02 ul.navigation.clearfix li.dropdown .submenu_opener').on("click", function (e) {
                $(this).parent().toggleClass('nav_open');
                $(this).siblings('ul').slideToggle();
                e.stopPropagation();
                e.preventDefault();
            });
        }

    }, []);

    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id='offcanvasHome' aria-labelledby="offcanvasNavbarLabel">
            <div className="mr_menu_02">
                <div className="mr_menu_02_overlay"></div>
                <button type="button" className="mr_menu_02_close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-x-square-fill"></i></button>

                <div className="logo">
                    <a href="/"><img src="../images/logo-responsive.svg" alt="logo" /></a>
                </div>

                <div className="mr_navmenu">

                </div>
            </div>
        </div>
    );
};

export default MobileNav;