import React from 'react';
import TestimonialCard from '../../components/TestimonialCard';
import './Testimonials1.css';

const Testimonials1 = () => {
    const testimonials = [
        {
            quote: 'Thinkin Lab has transformed the way we approach STEM education.',
            name: 'Alice Johnson',
            role: 'Principal, Green Valley School',
            image: 'path/to/alice-image.jpg',
        },
        {
            quote: 'The innovative approach by Thinkin Lab has been a game-changer for our students.',
            name: 'Mark Thompson',
            role: 'Head of Science, Red Oak High',
            image: 'path/to/mark-image.jpg',
        },
        {
            quote: 'Our students are more engaged and enthusiastic about learning.',
            name: 'Sarah Williams',
            role: 'STEM Coordinator, Blue River Academy',
            image: 'path/to/sarah-image.jpg',
        },

        {
            quote: 'Our students are more engaged and enthusiastic about learning.',
            name: 'Sarah Williams',
            role: 'STEM Coordinator, Blue River Academy',
            image: 'path/to/sarah-image.jpg',
        },

        {
            quote: 'Our students are more engaged and enthusiastic about learning.',
            name: 'Sarah Williams',
            role: 'STEM Coordinator, Blue River Academy',
            image: 'path/to/sarah-image.jpg',
        },

        {
            quote: 'Our students are more engaged and enthusiastic about learning.',
            name: 'Sarah Williams',
            role: 'STEM Coordinator, Blue River Academy',
            image: 'path/to/sarah-image.jpg',
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
