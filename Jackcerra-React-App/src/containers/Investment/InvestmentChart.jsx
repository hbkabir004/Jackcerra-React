import React, { useLayoutEffect, useRef, useState } from 'react';
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

    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const monitorWidth = windowSize.current[0];

    // console.log(monitorWidth);


    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);

    let elHeight = Number(dimensions.height);


    return (
        <section className="company-growth" style={{ backgroundImage: `url(../images/background/22.jpg)` }}>
            <div className="container">
                <div className="inner-container">
                    <div className="row clearfix align-items-center">
                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="image">

                                    <BarChart
                                        height={monitorWidth <= 576 ? 200 : 300}
                                        width={monitorWidth <= 576 ? 350 : 500}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 50,
                                            left: 0,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="NetProfit" fill="rgb(0, 143, 251)" />
                                        <Bar dataKey="Revenue" fill="rgb(0, 227, 150)" />
                                    </BarChart>
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