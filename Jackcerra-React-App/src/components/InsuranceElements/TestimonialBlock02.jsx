import React from 'react';

const TestimonialBlock02 = ({ data }) => {
    const { img, name, tag } = data;

    return (
        <div className="testimonial-block">
            <div className="inner-box">
                <div className="upper-box">
                    <div className="rating">
                        Rating &nbsp;
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                </div>
                <div className="lower-box">
                    <div className="author-box">
                        <div className="box-inner">
                            <div className="author-image">
                                <span className="quote fa fa-quote-right"></span>
                                <img src={img} alt="img" />
                            </div>
                            <strong>{name}</strong>
                            <span className="designation">{tag}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialBlock02;