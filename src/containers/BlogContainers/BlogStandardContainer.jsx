import React from 'react';
import PaginationDiv from '../../components/BlogElements/PaginationDiv';
import SideBar from '../../components/BlogElements/SideBar';
import NewsBlock from '../../components/ConsultancyElements/NewsBlock';

const BlogStandardContainer = () => {
    const BlogGridData = [
        {
            id: '1',
            img: 'images/blog/md-1.jpg',
            authorImg: 'images/blog/author-3.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Rayan Kellar'
        },
        {
            id: '2',
            img: 'images/blog/md-2.jpg',
            authorImg: 'images/blog/author-4.jpg',
            tag: 'Consultant',
            date: 'January 11, 2023',
            author: 'Mellisa Obrian'
        },
        {
            id: '3',
            img: 'images/blog/md-3.jpg',
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
                    <div className="col-lg-8 col-md-7">
                        {
                            BlogGridData.map(data => <NewsBlock
                                key={data.id}
                                data={data}
                            />)
                        }

                        <PaginationDiv />

                    </div>

                    <SideBar />
                </div>

            </div>
        </section>
    );
};

export default BlogStandardContainer;