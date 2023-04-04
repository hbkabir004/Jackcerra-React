import React from 'react';
import CounterBox from '../components/ConsultancyElements/CounterBox';

const FunFact = () => {
    return (
        <section className="funfact-section py-0"
            style={{ backgroundImage: `url(images/background/10.jpg)` }}
        >
            <div className="container">
                <CounterBox />

            </div>
        </section>
    );
};

export default FunFact;