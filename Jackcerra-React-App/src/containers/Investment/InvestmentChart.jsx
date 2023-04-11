import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import NewsLetter from '../../components/InvestmentElements/NewsLetter';

const InvestmentChart = () => {
    const data = [
        {
            name: '2018',
            NetProfit: 50,
            Revenue: 45,
            amt: 2400,
        },
        {
            name: '2019',
            NetProfit: 40,
            Revenue: 23,
            amt: 2210,
        },
        {
            name: '2020',
            NetProfit: 57,
            Revenue: 60,
            amt: 2290,
        },
        {
            name: '2021',
            NetProfit: 35,
            Revenue: 27,
            amt: 2000,
        },
        {
            name: '2022',
            NetProfit: 60,
            Revenue: 55,
            amt: 2181,
        },
    ];


    return (
        <section className="company-growth" style={{ backgroundImage: `url(../images/background/22.jpg)` }}>
            <div className="container">
                <div className="inner-container">
                    <div className="row clearfix align-items-center">
                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="image">

                                    {/* <ResponsiveContainer width="100%" height="100%"> */}
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={data}
                                    // margin={{
                                    //     top: 5,
                                    //     right: 30,
                                    //     left: 20,
                                    //     bottom: 5,
                                    // }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="NetProfit" fill="rgb(0, 143, 251)" />
                                        <Bar dataKey="Revenue" fill="rgb(0, 227, 150)" />
                                    </BarChart>
                                    {/* </ResponsiveContainer> */}

                                    {/* <div id="barChart1"></div> */}
                                    {/* <img src="../images/resource/bar-chart.png" alt="img" /> */}
                                </div>
                            </div>
                        </div>

                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                {/* <!-- Sec Title --> */}
                                <div className="sec-title">
                                    <div className="title"> <div className="separator"></div> Process</div>
                                    <h1>Jackcerra have achieved</h1>
                                    <h1 className="d-xl-flex align-items-center"><span className="achieve-count d-xl-flex"><span className="odometer" data-count="35"></span>35%</span> Growth in the First Quarter</h1>
                                </div>

                                {/* <!-- Button Box --> */}
                                <div className="button-box d-flex align-items-center flex-wrap">
                                    <a href="#" className="btn">
                                        <span className="btn-wrap">
                                            <span className="text-one">Download Brochure</span>
                                            <span className="text-two">Download Brochure</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <NewsLetter />
            </div>
        </section>
    );
};

export default InvestmentChart;