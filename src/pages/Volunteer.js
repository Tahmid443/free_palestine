import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Tab, Tabs } from 'react-bootstrap';
import { FaHandsHelping, FaUserTie, FaChalkboardTeacher, FaHeart, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Header from '../components/Header';
import './Volunteer.css';

const Volunteer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        skills: '',
        interests: [],
        availability: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [validated, setValidated] = useState(false);
    const [activeTab, setActiveTab] = useState('individual');

    const volunteerRoles = [
        {
            icon: <FaHandsHelping size={36} className="text-primary mb-3" />,
            title: "Field Volunteer",
            description: "Work directly with communities in need through our various programs.",
            skills: "Compassion, teamwork, physical ability"
        },
        {
            icon: <FaUserTie size={36} className="text-primary mb-3" />,
            title: "Professional Volunteer",
            description: "Offer your professional skills (medical, legal, engineering, etc.).",
            skills: "Professional certification, relevant experience"
        },
        {
            icon: <FaChalkboardTeacher size={36} className="text-primary mb-3" />,
            title: "Educator Volunteer",
            description: "Teach or mentor beneficiaries in our education programs.",
            skills: "Teaching experience, patience, creativity"
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updatedInterests = [...formData.interests];

        if (checked) {
            updatedInterests.push(name);
        } else {
            updatedInterests = updatedInterests.filter(item => item !== name);
        }

        setFormData(prev => ({
            ...prev,
            interests: updatedInterests
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            // In a real app, you would send the data to your backend here
            console.log('Volunteer form submitted:', formData);
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                skills: '',
                interests: [],
                availability: '',
                message: ''
            });
        }

        setValidated(true);
    };

    return (
        <>
            <Header
                title="Become a Volunteer"
                subtitle="Join our team and make a difference"
                showButton={false}
                imageUrl="./assets/images/volunteer-hero.jpg"
            />

            <section className="py-5 bg-light">
                <Container>
                    <Row className="mb-5">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <h2 className="fw-bold mb-4">Volunteer Opportunities</h2>
                            <p className="lead">We offer various ways for you to get involved based on your skills and availability.</p>

                            <Tabs
                                activeKey={activeTab}
                                onSelect={(k) => setActiveTab(k)}
                                className="mb-4"
                            >
                                <Tab eventKey="individual" title="Individual">
                                    <div className="mt-3">
                                        <p>Join as an individual volunteer and contribute your time and skills to our cause.</p>
                                        <ul>
                                            <li>Flexible time commitments</li>
                                            <li>Various roles available</li>
                                            <li>Training provided</li>
                                        </ul>
                                    </div>
                                </Tab>
                                <Tab eventKey="group" title="Group">
                                    <div className="mt-3">
                                        <p>Organize your friends, colleagues, or community group to volunteer together.</p>
                                        <ul>
                                            <li>Team-building opportunities</li>
                                            <li>Customized group projects</li>
                                            <li>Corporate volunteer programs</li>
                                        </ul>
                                    </div>
                                </Tab>
                                <Tab eventKey="internship" title="Internship">
                                    <div className="mt-3">
                                        <p>Gain valuable experience through our internship program for students and young professionals.</p>
                                        <ul>
                                            <li>Academic credit available</li>
                                            <li>Professional mentorship</li>
                                            <li>Career development</li>
                                        </ul>
                                    </div>
                                </Tab>
                            </Tabs>

                            <div className="mt-4">
                                <h4 className="fw-bold">Current Volunteer Needs</h4>
                                <Row className="g-4 mt-3">
                                    {volunteerRoles.map((role, index) => (
                                        <Col md={6} lg={4} key={index}>
                                            <Card className="h-100 border-0 shadow-sm volunteer-role-card">
                                                <Card.Body className="text-center p-4">
                                                    {role.icon}
                                                    <h5 className="fw-bold">{role.title}</h5>
                                                    <p>{role.description}</p>
                                                    <p className="text-muted small"><strong>Skills needed:</strong> {role.skills}</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h2 className="fw-bold mb-4">Volunteer Application</h2>
                            {submitted && (
                                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                                    Thank you for your interest in volunteering! We'll review your application and contact you soon.
                                </Alert>
                            )}
                            <Card className="border-0 shadow-sm">
                                <Card.Body className="p-4">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="name">
                                            <Form.Label>Full Name *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide your name.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Row className="mb-3">
                                            <Col md={6} className="mb-3 mb-md-0">
                                                <Form.Group controlId="email">
                                                    <Form.Label>Email *</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid email.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="phone">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3" controlId="skills">
                                            <Form.Label>Skills & Qualifications *</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={2}
                                                name="skills"
                                                value={formData.skills}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please describe your skills.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="interests">
                                            <Form.Label>Areas of Interest (Select all that apply)</Form.Label>
                                            <div className="d-flex flex-wrap">
                                                {['Children', 'Education', 'Healthcare', 'Environment', 'Disaster Relief', 'Elderly Care'].map((interest) => (
                                                    <Form.Check
                                                        key={interest}
                                                        type="checkbox"
                                                        id={`interest-${interest}`}
                                                        label={interest}
                                                        name={interest}
                                                        checked={formData.interests.includes(interest)}
                                                        onChange={handleCheckboxChange}
                                                        className="me-3 mb-2"
                                                    />
                                                ))}
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="availability">
                                            <Form.Label>Availability *</Form.Label>
                                            <Form.Select
                                                name="availability"
                                                value={formData.availability}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select your availability</option>
                                                <option value="weekdays">Weekdays</option>
                                                <option value="weekends">Weekends</option>
                                                <option value="both">Both weekdays and weekends</option>
                                                <option value="flexible">Flexible</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Please select your availability.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="message">
                                            <Form.Label>Why do you want to volunteer with us? *</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please tell us why you want to volunteer.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                <FaHeart className="me-2" />
                                                Submit Application
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="fw-bold">Volunteer Benefits</h2>
                            <p className="text-muted">What you'll gain by joining our team</p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body className="text-center p-4">
                                    <div className="volunteer-benefit-icon bg-primary-light mb-3">
                                        <FaHandsHelping size={24} className="text-primary" />
                                    </div>
                                    <h5 className="fw-bold">Make a Difference</h5>
                                    <p>Directly impact lives and communities through your service.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body className="text-center p-4">
                                    <div className="volunteer-benefit-icon bg-primary-light mb-3">
                                        <FaUserTie size={24} className="text-primary" />
                                    </div>
                                    <h5 className="fw-bold">Skill Development</h5>
                                    <p>Gain valuable experience and enhance your professional skills.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body className="text-center p-4">
                                    <div className="volunteer-benefit-icon bg-primary-light mb-3">
                                        <FaChalkboardTeacher size={24} className="text-primary" />
                                    </div>
                                    <h5 className="fw-bold">Training & Support</h5>
                                    <p>Receive comprehensive training and ongoing support.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 bg-primary text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8} className="mb-4 mb-lg-0">
                            <h3 className="fw-bold">Ready to start your volunteer journey?</h3>
                            <p className="mb-0">Join our community of changemakers today.</p>
                        </Col>
                        <Col lg={4} className="text-lg-end">
                            <Button variant="light" size="lg">Apply Now</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Volunteer;