import React from 'react';

const TeamBlock = ({ data }) => {
    const { img, name, tag } = data;

    return (
        <div className="team-style-one col-lg-4 col-md-4 col-sm-6">
            <div className="teambox">
                <img src={img} alt="img" />
                <div className="teambox-inner">
                    <div className="team-social">
                        <ul>
                            <li className="facebook"><a href="#"><i className="bi bi-facebook"></i></a></li>
                            <li className="twitter"><a href="#"><i className="bi bi-twitter"></i></a></li>
                            <li className="instagram"><a href="#"><i className="bi bi-instagram"></i></a></li>
                            <li className="linkedin"><a href="#"><i className="bi bi-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="teambox-intro text-center">
                        <h5>{name}</h5>
                        <p>{tag}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamBlock;