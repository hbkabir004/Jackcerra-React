import React from 'react';

const CounterBox = () => {
    return (
        <div className="counter-box">
            <div className="row clearfix">
                <div className="counter-column col-lg-3 col-md-6 col-sm-6">
                    <div className="counter"><span className="odometer" data-count="15"></span></div>
                    <h6>Number Of Awards</h6>
                </div>
                <div className="counter-column col-lg-3 col-md-6 col-sm-6">
                    <div className="counter"><span className="odometer" data-count="5"></span> stars</div>
                    <h6>Ranked Company</h6>
                </div>
                <div className="counter-column col-lg-3 col-md-6 col-sm-6">
                    <div className="counter"><span className="odometer" data-count="150"></span><i>+</i></div>
                    <h6>Successful Campeigns</h6>
                </div>
                <div className="counter-column col-lg-3 col-md-6 col-sm-6">
                    <div className="counter"><span className="odometer" data-count="40"></span><i>+</i></div>
                    <h6>Ongoing Projects</h6>
                </div>
            </div>
        </div>
    );
};

export default CounterBox;