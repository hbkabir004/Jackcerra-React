import React from 'react';

const NewsLetter02 = () => {
    return (
        <div className="subscribe-area">
            <div className="subscribe-inner">
                <div className="row align-items-center d-block d-lg-flex">
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <div className="agent-contact d-sm-flex align-items-center">
                            <div className="image">
                                <img src="../images/icons/14.png" alt="img" />
                            </div>
                            <div className="inner-content">
                                <h3>Call an agent now</h3>
                                <h2>+0(412) 789-4432</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 ps-lg-5">
                        <h3>Sign Up for Email</h3>
                        <form className="subscribe-form" method="post" action="">
                            <div className="form-group">
                                <input type="email" name="email" value="" placeholder="Enter your email" required="" />
                                <button type="submit" className="btn">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter02;