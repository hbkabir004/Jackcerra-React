import React from 'react';
import BlogCard from '../../components/BlogElements/BlogCard';

const BlogGridContainer = () => {
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
        <section className="news-section">
            <div className="container">
                <div className="row">
                    {
                        BlogGridData.map(data => <BlogCard
                            key={data.id}
                            data={data}
                        />)
                    }
                </div>



            </div>
        </section>
    );
};

export default BlogGridContainer;