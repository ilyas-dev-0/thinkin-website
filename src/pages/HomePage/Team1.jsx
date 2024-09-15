import React from 'react';
import TeamMemberCard from '../../components/TeamMemberCard';
import './Team1.css';
import ilyas from '../../assets/WebSiteIlyasImages/Profile/office-worker.png'
import niyam from '../../assets/WebSiteIlyasImages/Profile/man 3.png'
import prathipa from '../../assets/WebSiteIlyasImages/Profile/woman.png'

const Team1 = () => {
    const teamMembers = [
        {
            name: 'Niyamath',
            role: 'Lead Developer',
            image: niyam,
            description: 'John is an experienced developer with a passion for building scalable applications.',
        },
        {
            name: 'Ilyas Ahamed',
            role: 'UI/UX Designer',
            image: ilyas,
            description: 'Jane specializes in creating intuitive and beautiful user interfaces.',
        },
        {
            name: 'Prathipa',
            role: 'Project Manager',
            image: prathipa,
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
