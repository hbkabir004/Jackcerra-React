import React from 'react';

const NewsLetter = () => {
    return (
        <div className="subscribe-area">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                    <h2>Subscribe to our Newsletter!</h2>
                </div>
                <div className="col-lg-6 col-md-6">
                    <form className="subscribe-form" method="post" action="">
                        <div className="form-group">
                            <input type="email" name="email" value="" placeholder="Enter your email" required="" />
                            <button type="submit" className="btn">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;