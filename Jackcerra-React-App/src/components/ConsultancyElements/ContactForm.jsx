import React from 'react';

const ContactForm = () => {
    return (
        <section className="contact-section home">
            <div className="container">
                <div className="contact-form default-form mt-0">
                    <div className="row">
                        <div className="col-lg-7 col-md-8 offset-lg-5 offset-md-4">
                            <form method="post" action="contact.html">
                                <div className="sec-title">
                                    <div className="title">Make Appointment</div>
                                    <h1>Get Free Consultation</h1>
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
                                            <span className="icon"><img src="images/icons/calender.png" alt="" /></span>
                                            <input type="text" name="date" className="datepicker form-control" value="" placeholder="Appointment Date*" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" placeholder="Message Here*" required=""></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mb-0">
                                            <input className="btn-submit dark" type="submit" value="Get Appointment" name="submit" />
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

export default ContactForm;