import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import BlogGridContainer from '../../containers/BlogContainers/BlogGridContainer';

const BlogPage02 = () => {
    return (
        <div className='page-wrapper mt-3'>
            <PageHeader title='Blog' active='BLOG GRID' route02='BLOG' />
            <BlogGridContainer />
        </div>
    );
};

export default BlogPage02;