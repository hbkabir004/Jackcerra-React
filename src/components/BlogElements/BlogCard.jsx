import React from 'react';

const BlogCard = ({ data }) => {
    const { img, authorImg, author, date, tag } = data;

    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="news-block">
                <div className="inner-box">
                    <div className="image">
                        <a href="/blog-details"><img src={img} alt="img" /></a>
                    </div>
                    <div className="lower-content">
                        <div className="post-date">{date}</div>
                        <div className="author-box">
                            <div className="content">
                                <div className="author-image">
                                    <img src={authorImg} alt="img" />
                                </div>
                                <strong>{author}</strong>
                                <span className="designation">{tag}</span>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h5><a href="/blog-details">How consultation in business is affecting new ventures</a></h5>
                            <div className="text">We consult our clients to strengthen their decision making for marketing...</div>
                            <a href="/blog-details" className="read-more">Read Article</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;