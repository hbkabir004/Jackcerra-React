import React from 'react';
import CounterBox from '../../components/ConsultancyElements/CounterBox';
import SectionTitle from '../../components/ConsultancyElements/SectionTitle';
import BussinessAbout from './BussinessAbout';
import ServiceContainer from './ServiceContainer';

const BussinessSection = () => {

    return (
        <section className="business-section-three pb-0">
            <div className="image-layer" style={{ backgroundImage: `url(images/background/19.jpg)` }}></div>
            <div className="container">
                <SectionTitle
                    title='INTELLIGENT DECISION MAKING' header='Providing Best Services' />

                <ServiceContainer />



                <BussinessAbout />
                <CounterBox />
            </div>
            <div className="image-layer-bottom" style={{ backgroundImage: `url(images/background/7.jpg)` }} ></div>
        </section>
    );
};

export default BussinessSection;