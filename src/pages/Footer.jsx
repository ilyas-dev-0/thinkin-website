import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo White.png'
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container mx-auto">
                {/* Logo and About Section */}
                <div>
                    <img src={Logo} alt="Thinkin Lab" className="footer-logo" />
                    <p className="text-sm">
                        Empowering students through innovative learning solutions and personalized education.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h4 className="footer-title">Quick Links</h4>
                    <ul>
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/schools" className="footer-link">Schools</Link></li>
                        <li><Link to="/colleges" className="footer-link">Colleges</Link></li>
                        <li><Link to="/e-learning" className="footer-link">E-learning</Link></li>
                        <li><Link to="/about" className="footer-link">About</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="footer-title">Contact Us</h4>
                    <ul>
                        <li><a href="tel:+919894919993" className="footer-link">+91 98949 19993</a></li>
                        <li><a href="mailto:info@thinkinlab.com" className="footer-link">info@thinkinlab.com</a></li>
                        <li><span className="footer-link">Ranipet, Tamil Nadu - 632 509 </span></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h4 className="footer-title">Get in touch</h4>
                    <form className="footer-form">
                        <input type="email" placeholder="Your email" className="footer-input" />
                        <button type="submit" className="footer-button">Mail me</button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <p>&copy; 2024 Thinkin Lab. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
