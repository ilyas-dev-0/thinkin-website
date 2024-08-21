import React from 'react';
import TeamMemberCard from '../../components/TeamMemberCard';
import './Team1.css';

const Team1 = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Lead Developer',
            image: 'path/to/john-image.jpg',
            description: 'John is an experienced developer with a passion for building scalable applications.',
        },
        {
            name: 'Jane Smith',
            role: 'UI/UX Designer',
            image: 'path/to/jane-image.jpg',
            description: 'Jane specializes in creating intuitive and beautiful user interfaces.',
        },
        {
            name: 'Sam Wilson',
            role: 'Project Manager',
            image: 'path/to/sam-image.jpg',
            description: 'Sam ensures that projects are delivered on time and within budget.',
        },
        // Add more team members as needed
    ];

    return (
        <div className="team-section">
            <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        description={member.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Team1;
