import React from 'react';

const SectionTitle = (props) => {
    return (
        <div className="sec-title centered">
            <div className="title">{props.title}</div>
            <h1>{props.header}</h1>
            <div className="separator"></div>
        </div>
    );
};

export default SectionTitle;