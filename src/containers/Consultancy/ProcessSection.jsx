import React from 'react';
import ProcessBlock from '../../components/ConsultancyElements/ProcessBlock';
import SectionTitle from '../../components/ConsultancyElements/SectionTitle';

const ProcessSection = () => {
    const ProcessData = [
        {
            id: '1',
            num: '01',
            img: 'images/resource/process-1.jpg',
            title: 'Meeting Client',
            description: 'We help to develop marketing campaign strategy with market worthy communication.'
        },
        {
            id: '2',
            num: '02',
            img: 'images/resource/process-2.jpg',
            title: 'Project Brief',
            description: 'We help to develop marketing campaign strategy with market worthy communication.'
        },
        {
            id: '3',
            num: '03',
            img: 'images/resource/process-3.jpg',
            title: 'Project Strategy',
            description: 'We help to develop marketing campaign strategy with market worthy communication.'
        },
        {
            id: '4',
            num: '04',
            img: 'images/resource/process-4.jpg',
            title: 'Campaign Design',
            description: 'We help to develop marketing campaign strategy with market worthy communication.'
        },
    ];

    return (
        <section className="process-section">
            <div className="container">
                <SectionTitle
                    title='HOW WE WORK'
                    header='Our Work Process'
                />

                <div className="inner-container">
                    <div className="separater-line" style={{ backgroundImage: `url(images/background/separator-line.png)` }}></div>
                    <div className="row clearfix">
                        {
                            ProcessData.map(data => <ProcessBlock
                                key={data.id}
                                data={data}
                            />)
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;