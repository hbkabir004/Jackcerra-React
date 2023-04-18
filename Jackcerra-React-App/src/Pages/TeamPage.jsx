import React from 'react';
import PageHeader from '../components/common/PageHeader';
import TeamPageContainer from '../containers/TeamPageContainer';

const TeamPage = () => {
    return (
        <div className='page-wrapper mt-3'>
            <PageHeader title='Our Team' active='TEAM' route02='PAGES' />
            <TeamPageContainer />
        </div>
    );
};

export default TeamPage;