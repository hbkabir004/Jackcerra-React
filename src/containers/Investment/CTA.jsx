import React from 'react';

const CTA = () => {
    return (
        <section className="call-to-action p-0">
            <div className="call-to-action-inner">
                <div className="image-layer" style={{ backgroundImage: `url(../images/background/21.jpg)` }}></div>
                <div className="container">
                    <div className="inner-container">
                        <h1>Invest In Our Company <br /> We will help you grow Big</h1>
                        <p>We create relationship of trust with our customer by helping <br /> your company grow by investing . </p>

                        <div className="button-box">
                            <a href="contact.html" className="btn btn-gradient clearfix">
                                <span className="btn-wrap">
                                    <span className="text-one">Connect With Us</span>
                                    <span className="text-two">Connect With Us</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;