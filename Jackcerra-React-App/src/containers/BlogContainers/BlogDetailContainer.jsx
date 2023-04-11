import React from 'react';
import SideBar from '../../components/BlogElements/SideBar';

const BlogDetailContainer = () => {
    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-md-7">
                        <div className="blog-details-inner">
                            <div className="post-content">
                                <figure className="block-gallery mb-0">
                                    <ul className="blocks-gallery-grid">
                                        <li className="blocks-gallery-item mb-0 me-0">
                                            <figure>
                                                <a href="#"><img src="images/blog/md-4.jpg" alt="img" className="block-image" /></a>
                                            </figure>
                                        </li>
                                    </ul>
                                </figure>

                                <div className="post-header">
                                    <div className="post-date">January 11, 2023</div>
                                    <h1 className="post-title">How consultation in business is affecting new ventures</h1>
                                </div>
                                <div className="intro">
                                    <p> We guide our clients through difficult issues, bringing insight and judgment to each situation. Our innovative approaches create original solutions to our clients' most complex domestic & multi juristictional deals and disputes. By thinking on behalf of our clients every day, we anticipate what they want, provide what they need and build lasting relationships.</p>
                                </div>

                                <div className="fulltext">
                                    <h5 className="highlight">Over the last 35 Years we made an impact that is strong & we have long way to go.</h5>
                                    <p>These are the concepts that shape our distinctive culture & differentiate us from others. They true the unique spirit of our Firm guide the behaviors that enable us to deliver  the promises we make to our clients and our people.</p>

                                    <h4 className="widget-title">Jackcerra Values</h4>
                                    <p>At Jackcerra our culture comes to life through three core values:</p>
                                    <ul className="point-order">
                                        <li>We seize opportunities to innovate and grow</li>
                                        <li>We are one firm with a shared sense of purpose</li>
                                        <li>We care about each other and the world around us</li>
                                    </ul>
                                    <figure className="block-gallery">
                                        <ul className="blocks-gallery-grid">
                                            <li className="blocks-gallery-item">
                                                <figure>
                                                    <a href="#"><img src="images/blog/4.jpg" alt="img" className="block-image" /></a>
                                                </figure>
                                            </li>
                                            <li className="blocks-gallery-item">
                                                <figure>
                                                    <a href="#"><img src="images/blog/5.jpg" alt="img" className="block-image" /></a>
                                                </figure>
                                            </li>
                                        </ul>
                                    </figure>


                                    <p>We guide our clients through difficult issues, bringing our insight and judgment to each situa- tion. Our innovative approaches create original solutions to our clients' most complex domestic & multi jurisdic tional deals and disputes.</p>

                                    <p>By thinking on behalf of our clients every day, we anticipate what they want, provide what they need & build lasting relationships. These are the concept that shape our distinctive culture and differentiate us from others.</p>
                                    <div className="video-post">
                                        <div className="ytube-video">
                                            <iframe id="ytvideo" src="https://www.youtube.com/embed/fEErySYqItI" allow="autoplay;" allowfullscreen></iframe>
                                            <div className="post-content">
                                                <div className="ytplay-btn"><i className="fa fa-play"></i></div>
                                                <img src="images/blog/md-5.jpg" alt="img" />
                                            </div>
                                        </div>
                                    </div>

                                    <p>By thinking on behalf of our clients every daywe anticipate what they want provide what they need & build lasting relationships.These are the concepts that shape our distinctive culture & differentiate us from others.</p>

                                    <p>Our clients every day wanticipate what they want, provide what they need & build relationships. These are the concepts that shape our distinctive culture & differentiate us from others.</p>

                                    <div className="post-footer">
                                        <div className="post-share">
                                            <ul className="share-list">
                                                <li>Share:</li>
                                                <li className="facebook"><a href="#">Facebook</a></li>
                                                <li className="twitter"><a href="#">Twitter</a></li>
                                                <li className="pinterest"><a href="#">Pinterest</a></li>
                                                <li className="instagram"><a href="#">Instagram</a></li>
                                                <li className="linkedin"><a href="#">Linkedin</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- Author Section  --> */}
                                    <div className="author-div">
                                        <div className="author">
                                            <img alt="img" src="images/blog/author-2.png" className="avatar" />
                                        </div>
                                        <div className="author-block">
                                            <h5 className="author-name">Rayan Kellar</h5>
                                            <p className="author-intro">By thinking on behalf of our clients every daywe anticipate what they
                                                want provide what they need & build lasting relationships.</p>
                                            <div className="social-media">
                                                <ul className="social-list">
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Comment List --> */}
                                    <div className="comments-area">
                                        <h3 className="comments-title">Comments</h3>
                                        <ul className="comment-list">
                                            <li className="comment even thread-even depth-1">
                                                <div className="commenter-block">
                                                    <div className="comment-avatar">
                                                        <img alt="img" src="images/blog/commenter1.png" className="avatar" />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-author-name">Mellisa Doe <span className="comment-date">January 29, 2023</span></div>
                                                        <div className="comment-author-comment">
                                                            <p>Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima veniam quis nostrum exercitationem mosequatu autem.</p>
                                                            <span className="comment-reply"><a href="#" className="comment-reply-link">Reply</a></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <ul className="children">
                                                    <li className="comment even thread-even depth-2">
                                                        <div className="commenter-block">
                                                            <div className="comment-avatar">
                                                                <img alt="img" src="images/blog/commenter2.png" className="avatar" />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-author-name">Rayan Kellar <span className="comment-date">January 22, 2023</span></div>
                                                                <div className="comment-author-comment">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima veniam quis nostrum exercitationem mosequatu autem.</p>
                                                                    <span className="comment-reply"><a href="#" className="comment-reply-link">Reply</a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="comment odd thread-odd depth-1">
                                                <div className="commenter-block">
                                                    <div className="comment-avatar">
                                                        <img alt="img" src="images/blog/commenter1.png" className="avatar" />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-author-name">Mellisa Doe <span className="comment-date">January 01, 2023</span></div>
                                                        <div className="comment-author-comment">
                                                            <p>Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima veniam quis nostrum exercitationem mosequatu autem.</p>
                                                            <span className="comment-reply"><a href="#" className="comment-reply-link">Reply</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="comments-pagination">
                                            <a className="page-numbers" href="#">1</a>
                                            <span aria-current="page" className="page-numbers current">2</span>
                                        </div>
                                    </div>

                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Make A Comment <span className="title-line"></span></h3>
                                        <form className="comment-form" action="register.php" method="post">
                                            <p className="logged-in-as">Your email address will not be published. Required fields are marked *</p>
                                            <div className="form-container">
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-6">
                                                        <div className="form-group">
                                                            <input type="text" name="name" className="form-control" placeholder="Name*" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6">
                                                        <div className="form-group">
                                                            <input type="email" name="email" className="form-control" placeholder="E-mail*" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-12">
                                                        <div className="form-group">
                                                            <textarea name="message" className="form-control" placeholder="Text Here*" required=""></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-12">
                                                        <div className="btn-group">
                                                            <input className="btn btn-submit" type="submit" value="Make Comment" name="submit" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <SideBar />

                </div>
            </div>
        </section>
    );
};

export default BlogDetailContainer;