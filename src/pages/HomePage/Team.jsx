import React from 'react';
import Niyamath from '../../assets/Team/Niyamath.jpg'

const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Niyamath',
            role: 'Founder',
            image: {Niyamath},
            description: 'John is an experienced developer with a passion for building scalable applications.'
        },
        {
            name: 'Jane Smith',
            role: 'UI/UX Designer',
            image: 'path/to/jane-image.jpg',
            description: 'Jane specializes in creating intuitive and beautiful user interfaces.'
        },
        {
            name: 'Sam Wilson',
            role: 'Project Manager',
            image: 'path/to/sam-image.jpg',
            description: 'Sam ensures that projects are delivered on time and within budget.'
        },
        // Add more team members as needed
    ];

    return (
        <div className="bg-black text-white py-16 px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member p-6 bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-t-lg mb-4"/>
                        <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                        <p className="text-xl font-medium text-gray-400 mb-4">{member.role}</p>
                        <p className="text-gray-300">{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
