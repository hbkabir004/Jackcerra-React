import React from 'react';
import InsuranceServiceBlock from '../../components/InsuranceElements/InsuranceServiceBlock';
import ProcessSection from '../../components/InsuranceElements/ProcessSection';

const InsuranceServices = () => {
    const InsuranceServiceData = [
        {
            id: '1',
            img: '../images/icons/6.png',
            title: 'Financial Security',
            description: 'We provide growth strategic consulting to recollect the ROI very soon from market.'
        },
        {
            id: '2',
            img: '../images/icons/7.png',
            title: 'Life Insurance',
            description: 'Develop & Maintain strong finalcial analysis before going for a campaign.'
        },
        {
            id: '3',
            img: '../images/icons/8.png',
            title: 'Industrial Insurance',
            description: 'Create Custom PR Strategy to protect market & corporate Reputation.'
        },
        {
            id: '4',
            img: '../images/icons/9.png',
            title: 'Marine Insurance',
            description: 'We provide growth strategic consulting to recollect the ROI very soon from market.'
        },
        {
            id: '5',
            img: '../images/icons/10.png',
            title: 'Car Insurance',
            description: 'Develop & Maintain strong finalcial analysis before going for a campaign.'
        },
        {
            id: '6',
            img: '../images/icons/11.png',
            title: 'Fire Insurance',
            description: 'We provide growth strategic consulting to recollect the ROI very soon from market.'
        },
        {
            id: '7',
            img: '../images/icons/12.png',
            title: 'Medical Insurance',
            description: 'We provide growth strategic consulting to recollect the ROI very soon from market.'
        },
        {
            id: '8',
            img: '../images/icons/13.png',
            title: 'Property Insurance',
            description: 'Develop & Maintain strong finalcial analysis before going for a campaign.'
        },
    ];
    return (
        <section className="home-services-section" style={{ backgroundImage: `url(../images/background/27.jpg)` }} >
            <div className="container">
                <div className="sec-title centered">
                    <div className="title">Our Services</div>
                    <h1>Amazing Services we Provide</h1>
                    <div className="separator"></div>
                </div>

                <div className="blocks-column">
                    <div className="inner-column">
                        <div className="row">
                            {
                                InsuranceServiceData.map(data => <InsuranceServiceBlock
                                    key={data.id}
                                    data={data}
                                />)
                            }


                        </div>
                    </div>
                </div>
            </div>

            <ProcessSection />
        </section>
    );
};

export default InsuranceServices;