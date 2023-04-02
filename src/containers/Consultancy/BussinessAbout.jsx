import React from 'react';
import ButtonBox from '../../components/ConsultancyElements/ButtonBox';
import FeatureBlock from '../../components/ConsultancyElements/FeatureBlock';

const BussinessAbout = () => {
    const FeatureData = [
        {
            id: '1',
            img: 'images/icons/globe.png',
            title: 'Operating All over the World',
            description: 'A business firm is either the sole proprietorship partnership owned by an individual.'
        },
        {
            id: '2',
            img: 'images/icons/people.png',
            title: 'Trusted By Agile Companies',
            description: 'Designing and implementing the technology tools that they need to win.'
        },
    ];

    return (
        <div className="inner-container">
            <div className="row clearfix">
                {/* <!-- Image Column --> */}
                <div className="image-column col-lg-5 col-md-5 col-sm-12">
                    <div className="inner-column">
                        <div className="image">
                            <img src="images/resource/business-4.jpg" alt="img" />
                        </div>
                    </div>
                </div>
                {/* <!-- Content Column --> */}
                <div className="content-column col-lg-7 col-md-7 col-sm-12">
                    <div className="inner-column">
                        {/* <!-- Title Box --> */}
                        <div className="title-box">
                            <div className="title">About Company</div>
                            <h1>Setting up Milestones in World of Business</h1>
                        </div>
                        {/* <!-- End Title Box --> */}

                        {
                            FeatureData.map(data => <FeatureBlock
                                key={data.id}
                                data={data}
                            />)
                        }


                        <ButtonBox />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BussinessAbout;