import React from "react";
//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare, faInstagram, faLinkedinIn, faTwitter
} from '@fortawesome/free-brands-svg-icons';
//css
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
                    <p><span className="position">{position}</span></p>
                </div>
                <div className="teamIcon-container">
                    <div className="teamIcon">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                    <div className="teamIcon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="teamIcon">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                    <div className="teamIcon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTeam;
