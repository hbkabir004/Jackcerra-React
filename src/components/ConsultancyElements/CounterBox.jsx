import React from 'react';
import CountUp from 'react-countup';


const CounterBox = () => {
    return (
        <div className="counter-box">
            <div className="row clearfix">
                <div className="counter-column col-lg-3 col-md-6 col-sm-6">
                    <div className="counter"><CountUp start={0} end={15} delay={3}><span className="odometer" data-count="15"></span></CountUp></div>
                    <h6>Number Of Awards</h6>
                </div>
                <div className="counter-column col-lg-3 col-md-6 col-sm-6">
                    <div className="counter">
                        <CountUp start={0} end={5} delay={3}>
                            <span className="odometer" data-count="5"></span>
                        </CountUp> stars</div>
                    <h6>Ranked Company</h6>
                </div>
                <div className="counter-column col-lg-3 col-md-6 col-sm-6">
                    <div className="counter"><CountUp start={0} end={40} delay={3}><span className="odometer" data-count="150"></span></CountUp><i>+</i></div>
                    <h6>Successful Campeigns</h6>
                </div>
                <div className="counter-column col-lg-3 col-md-6 col-sm-6">
                    <div className="counter"><CountUp start={0} end={40} delay={3}><span className="odometer" data-count="40"></span></CountUp><i>+</i></div>
                    <h6>Ongoing Projects</h6>
                </div>
            </div>
        </div>
    );
};

export default CounterBox;