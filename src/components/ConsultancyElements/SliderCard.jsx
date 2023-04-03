import React from 'react';

const SliderCard = ({ data }) => {
    const { mid, heading, tag, bg, title, last } = data;

    return (
        <div className='slide' style={{ backgroundImage: `url(${bg})` }}>
            <div className="container">
                <div className="row clearfix">
                    {/* <!-- Content Column --> */}
                    <div className="content-column col-xl-7 col-lg-7 col-md-10 col-sm-12">
                        <div className="inner-column">
                            <div className="title">{title}</div>
                            <h1>{heading} <br /> {mid} <span>{tag}</span>{last}</h1>
                            <div className="text">Jackcerra is a full-service consultation firm with record of winning many <br /> successful campaigns. Have a great journey with us</div>
                            <div className="options-box">
                                {/* <!-- Button Box --> */}
                                <div className="button-box d-flex flex-wrap">
                                    <a href="#" className="btn">
                                        <span className="btn-wrap">
                                            <span className="text-one">Learn More</span>
                                            <span className="text-two">Learn More</span>
                                        </span>
                                    </a>
                                    <a href="#" className="btn btn-three">
                                        <span className="btn-wrap">
                                            <span className="text-one">Get Service</span>
                                            <span className="text-two">Get Service</span>
                                        </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SliderCard;