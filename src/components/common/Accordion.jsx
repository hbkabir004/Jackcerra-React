import React from 'react';
import SectionTitle from '../ConsultancyElements/SectionTitle';

const Accordion = () => {
    // $(".accordion").on("click",".accordion_tab", function () {
    //     $(this).next().slideDown();
    //     $(".accordion_info").not($(this).next()).slideUp();
    // });

    // $(".accordion").on("click",".item", function () {
    //     $(this).addClass("active").siblings().removeClass("active");
    // });


    return (
        <section className="accordion-section pb-0" style={{ backgroundImage: `url(images/background/17.jpg)` }}>
            <div className="container">
                <div className="inner-column">
                    <SectionTitle
                        title='Ask What You Want To Know'
                        header='Frequently Asked Questions'
                    />

                    <div className="row clearfix">

                        {/* <!-- Image Block --> */}
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="care-imagebox">
                                <img src="images/resource/care.png" alt="img" />
                            </div>
                        </div>

                        {/* <!-- Accordion Block --> */}
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="accordion accordion-default" id="accordionFaq">

                                {/* <!-- Start Item --> */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                                            What are the secrets of Success for Business ?
                                            <span className="accordion-tab-icon">
                                                <i className="open-icon bi bi-plus"></i>
                                                <i className="close-icon bi bi-dash"></i>
                                            </span>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show" data-bs-parent="#accordionFaq" id="collapseOne">
                                        <div className="accordion-body">Jackcerra is a full-service consultation firm with record of winning many campaigns under the most challenging circumstances by our team of experts consultants. </div>
                                    </div>
                                </div>

                                {/* <!-- Start Item --> */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                                            How does markeing consuting take place ?
                                            <span className="accordion-tab-icon">
                                                <i className="open-icon bi bi-plus"></i>
                                                <i className="close-icon bi bi-dash"></i>
                                            </span>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse" data-bs-parent="#accordionFaq" id="collapseTwo">
                                        <div className="accordion-body">Jackcerra is a full-service consultation firm with record of winning many campaigns under the most challenging circumstances by our team of experts consultants. </div>
                                    </div>
                                </div>

                                {/* <!-- Start Item --> */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                                            How does Financial consuting take place ?
                                            <span className="accordion-tab-icon">
                                                <i className="open-icon bi bi-plus"></i>
                                                <i className="close-icon bi bi-dash"></i>
                                            </span>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse" data-bs-parent="#accordionFaq" id="collapseThree">
                                        <div className="accordion-body">Jackcerra is a full-service consultation firm with record of winning many campaigns under the most challenging circumstances by our team of experts consultants. </div>
                                    </div>
                                </div>

                                {/* <!-- Start Item --> */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false">
                                            How does distribution consuting take place ?
                                            <span className="accordion-tab-icon">
                                                <i className="open-icon bi bi-plus"></i>
                                                <i className="close-icon bi bi-dash"></i>
                                            </span>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse" data-bs-parent="#accordionFaq" id="collapseFour">
                                        <div className="accordion-body">Jackcerra is a full-service consultation firm with record of winning many campaigns under the most challenging circumstances by our team of experts consultants. </div>
                                    </div>
                                </div>

                            </div>

                            <div className="more-query">
                                <p>Still Have More Questions?</p>
                                <h6>Contact Our <a href="contact.html">Expert Support Team</a></h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;