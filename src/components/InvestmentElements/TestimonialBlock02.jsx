import React from 'react';

const TestimonialBlock02 = ({ data }) => {
    const { img, tag, name } = data;
    return (
        <div className="testimonial-block">
            <div className="inner-box">
                <div className="upper-box">
                    <div className="rating">

                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                    </div>
                    <span className="quote fa fa-quote-right"></span>
                    <div className="text">“It’s a delight that we got them as our consultant for our big product launch and campeign. They guided us through the journey.”</div>
                </div>
                <div className="lower-box">
                    <div className="author-box">
                        <div className="box-inner">
                            <div className="author-image">
                                <img src={img} />
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