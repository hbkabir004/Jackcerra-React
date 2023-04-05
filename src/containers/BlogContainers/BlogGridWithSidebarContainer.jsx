import React from 'react';
import BlogCard02 from '../../components/BlogElements/BlogCard02';
import PaginationDiv from '../../components/BlogElements/PaginationDiv';
import SideBar from '../../components/BlogElements/SideBar';

const BlogGridWithSidebarContainer = () => {
    const BlogGridData = [
        {
            id: '1',
            img: 'images/blog/1.jpg',
            authorImg: 'images/blog/author-3.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Rayan Kellar'
        },
        {
            id: '2',
            img: 'images/blog/2.jpg',
            authorImg: 'images/blog/author-4.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Mellisa Obrian'
        },
        {
            id: '3',
            img: 'images/blog/3.jpg',
            authorImg: 'images/blog/author-5.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Jessica Ballinger'
        },
        {
            id: '4',
            img: 'images/blog/1.jpg',
            authorImg: 'images/blog/author-3.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Rayan Kellar'
        },
        {
            id: '5',
            img: 'images/blog/2.jpg',
            authorImg: 'images/blog/author-4.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Mellisa Obrian'
        },
        {
            id: '6',
            img: 'images/blog/3.jpg',
            authorImg: 'images/blog/author-5.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Jessica Ballinger'
        },

    ];

    return (
        <section class="news-section">
            <div class="container">

                <div class="row">
                    <div class="col-lg-8 col-md-7">
                        <div class="row">
                            {
                                BlogGridData.map(data => <BlogCard02
                                    key={data.id}
                                    data={data}
                                />)
                            }
                        </div>

                        <PaginationDiv />

                    </div>

                    <SideBar />
                </div>

            </div>
        </section>
    );
};

export default BlogGridWithSidebarContainer;