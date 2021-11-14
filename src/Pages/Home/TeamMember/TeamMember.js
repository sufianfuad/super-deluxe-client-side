import React from "react";

import maxwell from "../../../images/team/team1.jpg";
import wings from "../../../images/team/team2.jpg";
import jhon from "../../../images/team/team_03.jpg";

import SingleTeam from '../SingleTeam/SingleTeam';
import './TeamMember.css';

const teams = [
    {
        id: 11,
        name: "Maxwell de Willamson",
        position: "CEO",
        img: maxwell,
    },
    {
        id: 22,
        name: "Mark Wings",
        position: "Products Manager",
        img: wings,
    },
    {
        id: 33,
        name: "Jhon Smith",
        position: "Social Media Manager",
        img: jhon,
    },
];
const TeamMember = () => {
    return (
        <section className="team">
            <div className="heading-title text-center">
                <p><span className="team-color">Team</span></p>
                <h1>
                    Our Company Most Valuable People
                    <span className="dot-color">.</span>
                </h1>
            </div>
            <div className="team-main">
                <div className="container">
                    <div className="row">
                        {
                            teams.map((team) => (
                                <SingleTeam key={team.id} team={team} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMember;
