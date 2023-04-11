import React from 'react';

const ServiceAbout = () => {
    return (
        <section>
            <div className="container">

                <div className="sec-title">
                    <div className="row">
                        <div className="left-box col-lg-4">
                            <div className="title">About Company</div>
                            <h1>Welcoming you to <span>Consulting</span> Agency</h1>
                        </div>
                        <div className="right-box col-lg-7 offset-lg-1 ps-5">
                            <div className="text mt-0">Jackcerra is a full service business firm with record of winning many campaigns under the most challenging circumstances by consult team of experts consultants. We guide our client through difficult issue that bringing our insight and judgment to each situation.</div>
                            <div className="text mt-3">Our innovative approaches create original solutions to our clients most complex domes multi jurisdictional deals and disputes. By thinking on behalf of our clients every day</div>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src="images/background/9.jpg" alt="img" />
                </div>
            </div>
        </section>
    );
};

export default ServiceAbout;