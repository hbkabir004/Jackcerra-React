import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import BlogGridWithSidebarContainer from '../../containers/BlogContainers/BlogGridWithSidebarContainer';

const BlogPage03 = () => {
    return (
        <div className='mt-5'>
            <PageHeader title='Blog' active='BLOG GRID WITH SIDEBAR' route02='BLOG' />
            <BlogGridWithSidebarContainer />
        </div>
    );
};

export default BlogPage03;