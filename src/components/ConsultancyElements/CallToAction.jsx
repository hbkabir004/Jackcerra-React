import React from 'react';

const CallToAction = () => {
    return (
        <div className="call-to-action" style={{ backgroundImage: `url(images/background/12.jpg)` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8">
                        <h1 className="text-white">Grow Big with best consultation From Jackcerra</h1>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center text-md-end">
                        <a href="#" className="btn btn-two">
                            <span className="btn-wrap">
                                <span className="text-one">Get Appointment</span>
                                <span className="text-two">Get Appointment</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;