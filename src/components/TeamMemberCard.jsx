import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ name, role, image, description }) => {
    return (
        <div className="team-member">
            <div className="image-container">
                <img src={image} alt={name} className="team-member-image" />
            </div>
            <h3 className="team-member-name">{name}</h3>
            <p className="team-member-role">{role}</p>
            <p className="team-member-description">{description}</p>
        </div>
    );
};

export default TeamMemberCard;
