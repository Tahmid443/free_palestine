import React from 'react';
import { Card } from 'react-bootstrap';

const Testimonial = ({ quote, name, role, image }) => {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Body>
                <blockquote className="blockquote mb-4">
                    <p className="font-italic">"{quote}"</p>
                </blockquote>
                <div className="d-flex align-items-center">
                    <img
                        src={image}
                        alt={name}
                        className="rounded-circle me-3"
                        width="60"
                        height="60"
                    />
                    <div>
                        <h6 className="mb-0">{name}</h6>
                        <small className="text-muted">{role}</small>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Testimonial;