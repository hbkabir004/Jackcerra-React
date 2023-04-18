import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import BlogStandardContainer from '../../containers/BlogContainers/BlogStandardContainer';

const BlogPage01 = () => {
    return (
        <div className='page-wrapper mt-3'>
            <PageHeader title='Blog' active='BLOG STANDARD' route02='BLOG' />
            <BlogStandardContainer />
        </div>
    );
};

export default BlogPage01;