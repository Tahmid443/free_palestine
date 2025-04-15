import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegClock, FaDollarSign } from 'react-icons/fa';

const CauseCard = ({ cause }) => {
    return (
        <Card className="h-100 shadow-sm cause-card">
            <div className="cause-image-container">
                <Card.Img variant="top" src={cause.image} className="cause-image" />
                <div className="category-badge">{cause.category}</div>
            </div>
            <Card.Body>
                <Card.Title>{cause.title}</Card.Title>
                <Card.Text className="text-muted">{cause.description}</Card.Text>
                <div className="mb-3">
                    <ProgressBar now={cause.progress} label={`${cause.progress}%`} />
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                        <FaDollarSign className="me-2 text-primary" />
                        <span>Raised: ${cause.raised.toLocaleString()}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaDollarSign className="me-2 text-muted" />
                        <span>Goal: ${cause.goal.toLocaleString()}</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <FaRegClock className="me-2 text-primary" />
                        <span>{cause.daysLeft} days left</span>
                    </div>
                    <Link to={`/donate?cause=${cause.id}`} className="btn btn-primary">
                        <FaHeart className="me-1" /> Donate
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CauseCard;