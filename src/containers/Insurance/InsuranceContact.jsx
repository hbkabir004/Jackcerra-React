import React from 'react';

const InsuranceContact = () => {
    return (
        <section className="home-contact-section pb-0" style={{ backgroundImage: `url(../images/background/28.jpg)` }}>
            <div className="container">

                <div className="default-form">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 pe-5 align-self-end d-none d-md-block">
                            <div className="care-imagebox text-right">
                                <img src="../images/resource/care-2.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <form method="post" action="contact.html">
                                <div className="sec-title text-center">
                                    <div className="title">Make Appointment</div>
                                    <h3>How can we help you?</h3>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name*" required="" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Email Address*" required="" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" className="form-control" placeholder="Phone No" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" className="form-control" placeholder="Message Here*" required=""></textarea>
                                </div>
                                <div className="form-group mb-0">
                                    <input className="btn-submit w-100" type="submit" value="Get Help" name="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InsuranceContact;