import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaClock } from 'react-icons/fa';
import Header from '../components/Header';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            // In a real app, you would send the data to your backend here
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }

        setValidated(true);
    };

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt size={24} className="text-primary" />,
            title: "Our Address",
            content: "Dhaka-Sylhet Highway, Narsingdi, Dhaka, Bangladesh"
        },
        {
            icon: <FaPhone size={24} className="text-primary" />,
            title: "Call Us",
            content: "+8801841078255"
        },
        {
            icon: <FaEnvelope size={24} className="text-primary" />,
            title: "Email Us",
            content: "tahmid.dhrubo204256@gmail.com"
        },
        {
            icon: <FaClock size={24} className="text-primary" />,
            title: "Working Hours",
            content: "Mon-Fri: 9AM - 5PM"
        }
    ];

    return (
        <>
            <Header
                title="Contact Us"
                subtitle="We'd love to hear from you"
                showButton={false}
                imageUrl="./assets/images/contact-hero.jpg"
            />

            <section className="py-5">
                <Container>
                    <Row className="mb-5">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <h2 className="fw-bold mb-4">Get In Touch</h2>
                            {submitted && (
                                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </Alert>
                            )}
                            <Card className="border-0 shadow-sm">
                                <Card.Body className="p-4">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Col md={6} className="mb-3 mb-md-0">
                                                <Form.Group controlId="name">
                                                    <Form.Label>Your Name *</Form.Label>
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
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="email">
                                                    <Form.Label>Your Email *</Form.Label>
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
                                        </Row>

                                        <Form.Group className="mb-3" controlId="subject">
                                            <Form.Label>Subject *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a subject.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="message">
                                            <Form.Label>Your Message *</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter your message.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                <FaPaperPlane className="me-2" />
                                                Send Message
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <h2 className="fw-bold mb-4">Contact Information</h2>
                            <Row className="g-4">
                                {contactInfo.map((info, index) => (
                                    <Col md={6} key={index}>
                                        <Card className="h-100 border-0 shadow-sm contact-info-card">
                                            <Card.Body className="text-center p-4">
                                                <div className="contact-icon mb-3">
                                                    {info.icon}
                                                </div>
                                                <h5 className="fw-bold">{info.title}</h5>
                                                <p className="mb-0">{info.content}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                            <div className="mt-4">
                                <h4 className="fw-bold mb-3">Our Location</h4>
                                <div className="map-container rounded shadow-sm overflow-hidden">
                                    <iframe
                                        title="CharityHope Location"
                                        src=" https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d69837.5497669497!2d90.68443070000001!3d23.9015624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1744387541852!5m2!1sen!2sbd"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 bg-primary text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8} className="mb-4 mb-lg-0">
                            <h3 className="fw-bold">Have questions about volunteering?</h3>
                            <p className="mb-0">Join our team of dedicated volunteers making a difference in communities worldwide.</p>
                        </Col>
                        <Col lg={4} className="text-lg-end">
                            <Button variant="light" size="lg">Volunteer Now</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Contact;