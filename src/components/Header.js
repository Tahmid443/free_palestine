import React from 'react';
import { Button } from 'react-bootstrap';
import './Header.css';

const Header = ({ title, subtitle, showButton, imageUrl }) => {
    return (
        <div
            className="hero-section"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})` }}
        >
            <div className="hero-content text-center text-white">
                <h1 className="display-4 fw-bold mb-3">{title}</h1>
                <p className="lead mb-4">{subtitle}</p>
                {showButton && (
                    <Button variant="primary" size="lg">Donate Now</Button>
                )}
            </div>
        </div>
    );
};

export default Header;