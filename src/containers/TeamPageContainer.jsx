import React from 'react';
import TeamBlock from '../components/ConsultancyElements/TeamBlock';

const TeamPageContainer = () => {
    const TeamPageData = [
        {
            id: '1',
            img: 'images/team/1.jpg',
            tag: 'Consultant',
            name: 'Jackson Miller'
        },
        {
            id: '2',
            img: 'images/team/2.jpg',
            tag: 'Consultant',
            name: 'Soamson Doglus'
        },
        {
            id: '3',
            img: 'images/team/3.jpg',
            tag: 'Consultant',
            name: 'Hazel Grace'
        },
        {
            id: '4',
            img: 'images/team/4.jpg',
            tag: 'Consultant',
            name: 'Garrison Hall'
        },
        {
            id: '5',
            img: 'images/team/5.jpg',
            tag: 'Consultant',
            name: 'Oakland Miller'
        },
        {
            id: '6',
            img: 'images/team/6.jpg',
            tag: 'Consultant',
            name: 'Helen Mirren'
        },
    ];

    return (
        <section className="team-section">
            <div className="container">
                <div className="inner-column">
                    <div className="row clearfix">
                        {
                            TeamPageData.map(data => <TeamBlock
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

export default TeamPageContainer;