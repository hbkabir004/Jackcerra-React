import React from 'react';
import SectionTitle from '../../components/ConsultancyElements/SectionTitle';
import TeamBlock from '../../components/ConsultancyElements/TeamBlock';

const TeamContainer = () => {
    const TeamData02 = [
        {
            id: '1',
            img: '../images/team/1.jpg',
            tag: 'Consultant',
            name: 'Jackson Miller'
        },
        {
            id: '2',
            img: '../images/team/2.jpg',
            tag: 'Consultant',
            name: 'Soamson Doglus'
        },
        {
            id: '3',
            img: '../images/team/3.jpg',
            tag: 'Consultant',
            name: 'Hazel Grace'
        },
    ];

    return (
        <section className="team-section home">
            <div className="container">
                <div className="inner-column">
                    <SectionTitle
                        title='Our Team'
                        header='Meet Our Consultants'
                    />

                    <div className="row clearfix">
                        {
                            TeamData02.map(data => <TeamBlock
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

export default TeamContainer;