import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ quote, name, role, image }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-quote">
                <blockquote>"{quote}"</blockquote>
            </div>
            <div className="testimonial-info">
                <img src={image} alt={name} className="testimonial-image" />
                <div className="testimonial-text">
                    <h3>{name}</h3>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
