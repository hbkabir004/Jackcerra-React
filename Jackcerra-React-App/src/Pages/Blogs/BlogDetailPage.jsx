import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import BlogDetailContainer from '../../containers/BlogContainers/BlogDetailContainer';

const BlogDetailPage = () => {
    return (
        <div className='mt-5'>
            <PageHeader title='Blog' active='BLOG DETAILS' route02='BLOG' />
            <BlogDetailContainer />
        </div>
    );
};

export default BlogDetailPage;