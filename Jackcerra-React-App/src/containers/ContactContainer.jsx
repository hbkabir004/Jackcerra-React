import React from 'react';

const ContactContainer = () => {
    return (
        <section className="contact-section">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-box">
                            <div className="box-image">
                                <img src="images/resource/contact-1.jpg" alt="" />
                            </div>
                            <div className="contact-box-inner">
                                <div className="image">
                                    <img src="images/resource/mail.svg" alt="service" />
                                </div>
                                <div className="content">
                                    <h5>Send Us Mail</h5>
                                    <p><a href="mailto:jackcerra.care@email.com">jackcerra.care@email.com</a></p>
                                    <p><a href="mailto:info.jackcerra@email.com">info.jackcerra@email.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-box">
                            <div className="box-image">
                                <img src="images/resource/contact-2.jpg" alt="" />
                            </div>
                            <div className="contact-box-inner">
                                <div className="image">
                                    <img src="images/resource/phone.svg" alt="service" />
                                </div>
                                <div className="content">
                                    <h5>Call Us Anytime No</h5>
                                    <p>(+987) 654 321 228 11</p>
                                    <p>(+987) 654 321 228 14</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="contact-box">
                            <div className="box-image">
                                <img src="images/resource/contact-3.jpg" alt="" />
                            </div>
                            <div className="contact-box-inner">
                                <div className="image">
                                    <img src="images/resource/map-pin.svg" alt="service" />
                                </div>
                                <div className="content">
                                    <h5>Visit Our Office</h5>
                                    <p>28 Street, New York City United States of America</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="contact-form default-form">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
                            <form method="post" action="contact.html">
                                <div className="sec-title centered">
                                    <h1>Drop Us A Line</h1>
                                    <p>Jackcerra Inc will arrange your first business consultation totally free of cost</p>
                                    <div className="separator"></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" placeholder="Your Name*" required="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" placeholder="Email Address*" required="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="phone" className="form-control" placeholder="Phone No" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="subject" className="form-control" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" placeholder="Message Here*" required=""></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text-center">
                                            <input className="btn-submit" type="submit" value="Send Mail" name="submit" />
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactContainer;