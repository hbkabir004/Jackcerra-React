import React from 'react';

const SideBar = () => {
    return (
        <div className="col-lg-4 col-md-5 mt-5 mt-md-0">

            <div className="sidebar">

                <div className="widget widget_block widget_search">
                    <form method="get" className="wp-block-search">
                        <div className="wp-block-search__inside-wrapper ">
                            <input type="search" className="wp-block-search__input" name="search" value="" placeholder="Search" required="" />
                            <button type="submit" className="wp-block-search__button"><i className="bi bi-search"></i></button>
                        </div>
                    </form>
                </div>
                {/* <!-- end widget --> */}

                <div className="widget widget_block widget_custom">
                    <h2 className="widget-title">About Author</h2>
                    <div className="sidebar_author">
                        <img src="images/blog/author.jpg" alt="img" />
                        <p className="intro">Sed ut perspiciatis unde omnis iste natus err or sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt</p>
                        <div className="author_social">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- end widget --> */}

                <div className="widget widget_block">
                    <div className="wp-block-group__inner-container">
                        <h2 className="widget-title">Recent Posts</h2>
                        <ul className="wp-block-latest-posts__list wp-block-latest-posts">
                            <li>
                                <div className="latest-posts-image">
                                    <img src="images/blog/1.jpg" alt="img" />
                                </div>
                                <div className="latest-posts-content">
                                    <h5><a href="blog.html">How consultation in business is affecting new ventures</a></h5>
                                    <h6>January 11, 2023</h6>
                                </div>
                            </li>
                            <li>
                                <div className="latest-posts-image">
                                    <img src="images/blog/2.jpg" alt="img" />
                                </div>
                                <div className="latest-posts-content">
                                    <h5><a href="blog.html">Challenges of consultation new Business Firms</a></h5>
                                    <h6>January 01, 2023</h6>
                                </div>
                            </li>
                            <li>
                                <div className="latest-posts-image">
                                    <img src="images/blog/3.jpg" alt="img" />
                                </div>
                                <div className="latest-posts-content">
                                    <h5><a href="blog.html">Changes in recent consultancy styles now a days</a></h5>
                                    <h6>January 21, 2023</h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- end widget --> */}

                <div className="widget widget_block">
                    <div className="wp-block-group__inner-container">
                        <h2 className="widget-title">Categories</h2>
                        <ul className="wp-block-categories-list wp-block-categories">
                            <li className="cat-item"><a href="#">Consultaion</a> (10)</li>
                            <li className="cat-item"><a href="#">Business</a> (12)</li>
                            <li className="cat-item"><a href="#">Marketing</a> (08)</li>
                            <li className="cat-item"><a href="#">Finance</a> (15)</li>
                            <li className="cat-item"><a href="#">Campaign</a> (21)</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- end widget --> */}

                <div className="widget widget_block widget_tag_cloud">
                    <div className="wp-block-group__inner-container">
                        <h2 className="widget-title">Tag Cloud</h2>
                        <ul className="wp-block-tag-list wp-block-tag">
                            <p className="wp-block-tag-cloud">
                                <a href="#" className="tag-cloud-link">Business</a>
                                <a href="#" className="tag-cloud-link">Finance</a>
                                <a href="#" className="tag-cloud-link">Marketing</a>
                                <a href="#" className="tag-cloud-link">Consultancy</a>
                                <a href="#" className="tag-cloud-link">Process</a>
                                <a href="#" className="tag-cloud-link">Meeting</a>
                                <a href="#" className="tag-cloud-link">Campaign</a>
                            </p>
                        </ul>
                    </div>
                </div>
                {/* <!-- end widget --> */}
            </div>
        </div>
    );
};

export default SideBar;