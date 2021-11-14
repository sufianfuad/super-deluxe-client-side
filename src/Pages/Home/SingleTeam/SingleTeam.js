import React from "react";
import './SingleTeam.css';

const SingleTeam = ({ team }) => {
    const { name, position, img } = team;
    return (
        <div className="col-md-4 col-lg-4 col-sm-12">
            <div className="team-card">
                <div className="img-box">
                    <img src={img} alt="" />
                    <div className="overlay"></div>
                </div>
                <div className="text-box">
                    <h4>{name}</h4>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTeam;
