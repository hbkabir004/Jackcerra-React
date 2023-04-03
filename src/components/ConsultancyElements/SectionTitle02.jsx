import React from 'react';

const SectionTitle = (props) => {
    return (
        <div className="sec-title">
            <div className="title">{props.title}</div>
            <h1 className="text-white">{props.header}<br /> {props.ext}</h1>
            <div className="separator"></div>
        </div>
    );
};

export default SectionTitle;