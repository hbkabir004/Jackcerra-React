import React from 'react';
import InvestmentServiceBlock from '../../components/InvestmentElements/InvestmentServiceBlock';

const InvestmentServices = () => {
    const InvestmentServiceData = [
        {
            id: '1',
            img: '../images/services/service-1.png',
            title: 'Business Growth',
            description: 'We help business bring ideas to life in the digital world by the use of technology tools...'
        },
        {
            id: '2',
            img: '../images/services/service-2.png',
            title: 'Business Innovation',
            description: 'We provide growh strategic consulting to recollect the ROI very soon from market.'
        },
    ];
    const InvestmentServiceData02 = [
        {
            id: '1',
            img: '../images/services/service-3.png',
            title: 'Market Research',
            description: 'We help business bring ideas to life in the digital world by the use of technology tools...'
        },
        {
            id: '2',
            img: '../images/services/service-4.png',
            title: 'New Project Idea',
            description: 'We provide growh strategic consulting to recollect the ROI very soon from market.'
        },
    ];
    return (
        <section className="services-section">
            <div className="container">

                <div className="row clearfix">
                    {/* <!--  Column --> */}
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="inner-column left">
                            {/* <!-- Sec Title --> */}
                            <div className="sec-title">
                                <div className="title"> <div className="separator"></div> Services</div>
                                <h1>We help to use your Full Potential</h1>
                                <div className="text">As a business firm our main goal is to provide best
                                    services to our customers & create best ideas to
                                    help grow our clients. </div>
                                <div className="button-box">
                                    <a href="service.html" className="btn">
                                        <span className="btn-wrap">
                                            <span className="text-one">See All Services</span>
                                            <span className="text-two">See All Services</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Blocks Column --> */}
                    <div className="blocks-column col-lg-7 col-md-7 col-sm-12">
                        <div className="inner-column right">
                            <div className="row clearfix">

                                {/* <!-- Service Block --> */}
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    {
                                        InvestmentServiceData.map(data => <InvestmentServiceBlock
                                            key={data.id}
                                            data={data}
                                        />)
                                    }


                                </div>


                                {/* <!-- Service Block --> */}
                                <div className="col-lg-5 offset-lg-1 col-md-6 col-sm-6">
                                    {
                                        InvestmentServiceData02.map(data => <InvestmentServiceBlock
                                            key={data.id}
                                            data={data}
                                        />)
                                    }
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InvestmentServices;