import React from 'react';
import PageHeader from '../components/common/PageHeader';
import TeamPage from '../containers/TeamPage';

const Team = () => {
    return (
        <div className="page-wrapper">
            <PageHeader title='Our Team' active='Team' />
            <TeamPage />
        </div>
    );
};

export default Team;