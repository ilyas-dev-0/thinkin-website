import React from 'react';
import TestimonialCard from '../../components/TestimonialCard';
import './Testimonials1.css';
import Ilyas from '../../assets/WebSiteIlyasImages/Profile/boy.png'
import Niyam from '../../assets/WebSiteIlyasImages/Profile/bussiness-man.png'
import Alwin from '../../assets/WebSiteIlyasImages/Profile/user.png'
import Viveck from '../../assets/WebSiteIlyasImages/Profile/man (1).png'
import Ubada from '../../assets/WebSiteIlyasImages/Profile/man.png'
import Prathipa from '../../assets/WebSiteIlyasImages/Profile/kid.png'

const Testimonials1 = () => {
    const testimonials = [
        {
            quote: 'Thinkin Lab has transformed the way we approach STEM education.',
            name: 'Ilyas',
            role: 'Principal, Green Valley School',
            image: Ilyas,
        },
        {
            quote: 'The innovative approach by Thinkin Lab has been a game-changer for our students.',
            name: 'Niyamath',
            role: 'Head of Science, Red Oak High',
            image: Niyam,
        },
        {
            quote: 'Our students are more engaged and enthusiastic about learning.',
            name: 'Alwin',
            role: 'STEM Coordinator, Blue River Academy',
            image: Alwin,
        },

        {
            quote: 'STEM has transformed the way our students approach problem-solving.',
            name: 'Ubada',
            role: 'Science Teacher, Green Valley High',
            image: Ubada,
        },
        
        {
            quote: 'Our robotics program has inspired a new generation of innovators.',
            name: 'Viveck',
            role: 'Robotics Instructor, Westwood School',
            image: Viveck,
        },
        
        {
            quote: 'The 3D printing lab has sparked creativity and critical thinking in our students.',
            name: 'Prathipa',
            role: 'Technology Specialist, Redwood Academy',
            image: Prathipa,
        },
        
        // Add more testimonials as needed
    ];

    return (
        <div className="testimonials-section">
            <h2 className="testimonials-title">Hear From Our Happy Clients</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        role={testimonial.role}
                        image={testimonial.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials1;
