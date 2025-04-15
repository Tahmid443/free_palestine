import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TeamMember = ({ member }) => {
    return (
        <Card className="h-100 border-0 shadow-sm">
            <Card.Img height={450} variant="top" src={member.image} />
            <Card.Body className="text-center">
                <Card.Title className="fw-bold">{member.name}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{member.role}</Card.Subtitle>
                <div className="d-flex justify-content-center">
                    <a href={member.social[0]} className="text-dark mx-2"><FaFacebook /></a>
                    <a href={member.social[1]} className="text-dark mx-2"><FaTwitter /></a>
                    <a href={member.social[2]} className="text-dark mx-2"><FaLinkedin /></a>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TeamMember;