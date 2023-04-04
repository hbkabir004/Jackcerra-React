import React from 'react';

const PageHeader = (props) => {
    return (
        <div className="page_header">
            <div className="page_header_content">
                <div className="container">
                    <h2 className="heading">{props.title}</h2>
                    <ul className="breadcrumb">
                        <li><a href="/consultancy">Home</a></li>
                        <li><a href="#">Pages</a></li>
                        <li className="active">{props.active}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;