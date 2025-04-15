import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Header from '../components/Header';

const Donate = () => {
    return (
        <>
            <Header
                title="Make a Donation"
                subtitle="Your support makes our work possible"
                showButton={false}
                imageUrl="./assets/images/donate-hero.jpg"
            />

            <section className="py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Card className="shadow-sm">
                                <Card.Body className="p-5">
                                    <h2 className="fw-bold mb-4 text-center">Donation Information</h2>
                                    <Form>
                                        <Row className="mb-3">
                                            <Col md={6} className="mb-3 mb-md-0">
                                                <Form.Group controlId="firstName">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your first name" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="lastName">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your last name" required />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="phone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="tel" placeholder="Enter your phone number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="amount">
                                            <Form.Label>Donation Amount ($)</Form.Label>
                                            <Form.Control type="number" placeholder="Enter amount" min="1" required />
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="cause">
                                            <Form.Label>Select Cause (Optional)</Form.Label>
                                            <Form.Select>
                                                <option value="">General Donation</option>
                                                <option value="education">Education for Children</option>
                                                <option value="water">Clean Water Initiative</option>
                                                <option value="medical">Medical Aid Program</option>
                                                <option value="disaster">Disaster Relief</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="payment">
                                            <Form.Label>Payment Method</Form.Label>
                                            <div>
                                                <Form.Check
                                                    type="radio"
                                                    id="creditCard"
                                                    name="paymentMethod"
                                                    label="Credit Card"
                                                    defaultChecked
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    id="paypal"
                                                    name="paymentMethod"
                                                    label="PayPal"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    id="bankTransfer"
                                                    name="paymentMethod"
                                                    label="Bank Transfer"
                                                />
                                            </div>
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button variant="primary" size="lg" type="submit">
                                                Donate Now
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Donate;