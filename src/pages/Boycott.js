import React, { useState } from 'react';
import { Container, Navbar, Nav, Card, Row, Col, Form, Button, Alert, ListGroup, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Boycott = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [activeTab, setActiveTab] = useState('all');

    const boycottItems = [
        {
            id: 1,
            name: 'Coca-Cola',
            reason: 'Unethical labor practices',
            category: 'labor',
            alternatives: ['Ethical Alternatives Inc.', 'Fair Trade Co.'],
            logo: '../assets/images/boycott-products/coca-cola.jpg'
        },
        {
            id: 2,
            name: 'KFC',
            reason: 'Environmental destruction',
            category: 'environment',
            alternatives: ['Solar Energy Ltd.', 'Wind Power Solutions'],
            logo: '../assets/images/boycott-products/kfc.jpg'
        },
        {
            id: 3,
            name: 'Maggi',
            reason: 'Exploitative supply chain',
            category: 'labor',
            alternatives: ['Sustainable Clothing', 'Thrift Stores'],
            logo: '../assets/images/boycott-products/maggi.jpg'
        },
        {
            id: 4,
            name: 'Nestle',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/nestle.jpg'
        },
        {
            id: 5,
            name: 'Oreo',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/oreo.jpg'
        },
        {
            id: 6,
            name: 'Pepsi',
            reason: 'Unethical labor practices',
            category: 'labor',
            alternatives: ['Ethical Alternatives Inc.', 'Fair Trade Co.'],
            logo: '../assets/images/boycott-products/pepsi.jpg'
        },
        {
            id: 7,
            name: 'Starbucks',
            reason: 'Environmental destruction',
            category: 'environment',
            alternatives: ['Solar Energy Ltd.', 'Wind Power Solutions'],
            logo: '../assets/images/boycott-products/starbucks.jpg'
        },
        {
            id: 8,
            name: 'HP',
            reason: 'Exploitative supply chain',
            category: 'labor',
            alternatives: ['Sustainable Clothing', 'Thrift Stores'],
            logo: '../assets/images/boycott-products/hp.jpg'
        },
        {
            id: 9,
            name: 'Aquafina',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/aquafina.jpg'
        },
        {
            id: 10,
            name: 'Mirinda',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/mirinda.jpg'
        },
        {
            id: 11,
            name: 'Sprite',
            reason: 'Unethical labor practices',
            category: 'labor',
            alternatives: ['Ethical Alternatives Inc.', 'Fair Trade Co.'],
            logo: '../assets/images/boycott-products/sprite.jpg'
        },
        {
            id: 12,
            name: 'Fanta',
            reason: 'Environmental destruction',
            category: 'environment',
            alternatives: ['Solar Energy Ltd.', 'Wind Power Solutions'],
            logo: '../assets/images/boycott-products/fanta.jpg',
        },
        {
            id: 13,
            name: 'Nike',
            reason: 'Exploitative supply chain',
            category: 'labor',
            alternatives: ['Sustainable Clothing', 'Thrift Stores'],
            logo: '../assets/images/boycott-products/nike.jpg'
        },
        {
            id: 14,
            name: 'Pepsodent',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/pepsodent.jpg'
        },
        {
            id: 15,
            name: 'Dove',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/dove.jpg'
        },
        {
            id: 16,
            name: 'Tide',
            reason: 'Unethical labor practices',
            category: 'labor',
            alternatives: ['Ethical Alternatives Inc.', 'Fair Trade Co.'],
            logo: '../assets/images/boycott-products/tide.jpg'
        },
        {
            id: 17,
            name: 'Fair and Lovely',
            reason: 'Environmental destruction',
            category: 'environment',
            alternatives: ['Solar Energy Ltd.', 'Wind Power Solutions'],
            logo: '../assets/images/boycott-products/fairandlovely.jpg'
        },
        {
            id: 18,
            name: 'PizzaHut',
            reason: 'Exploitative supply chain',
            category: 'labor',
            alternatives: ['Sustainable Clothing', 'Thrift Stores'],
            logo: '../assets/images/boycott-products/pizzahut.jpg'
        },
        {
            id: 19,
            name: 'Lifebuoy',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/lifebuoy.jpg'
        },
        {
            id: 20,
            name: 'Burger King',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/burgerking.jpg'
        },
        {
            id: 21,
            name: 'Kraft',
            reason: 'Unethical labor practices',
            category: 'labor',
            alternatives: ['Ethical Alternatives Inc.', 'Fair Trade Co.'],
            logo: '../assets/images/boycott-products/kraft.jpg'
        },
        {
            id: 22,
            name: 'Cadbury',
            reason: 'Environmental destruction',
            category: 'environment',
            alternatives: ['Solar Energy Ltd.', 'Wind Power Solutions'],
            logo: '../assets/images/boycott-products/cadbury.jpg'
        },
        {
            id: 23,
            name: 'Lays',
            reason: 'Exploitative supply chain',
            category: 'labor',
            alternatives: ['Sustainable Clothing', 'Thrift Stores'],
            logo: '../assets/images/boycott-products/lays.jpg'
        },
        {
            id: 24,
            name: 'Tata Tea',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/tatatea.jpg'
        },
        {
            id: 25,
            name: 'Red Bull',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/redbull.jpg'
        },
        {
            id: 26,
            name: 'Monster Energy',
            reason: 'Unethical labor practices',
            category: 'labor',
            alternatives: ['Ethical Alternatives Inc.', 'Fair Trade Co.'],
            logo: '../assets/images/boycott-products/monsterenergy.jpg'
        },
        {
            id: 27,
            name: 'Gatorade',
            reason: 'Environmental destruction',
            category: 'environment',
            alternatives: ['Solar Energy Ltd.', 'Wind Power Solutions'],
            logo: '../assets/images/boycott-products/gatorade.jpg'
        },
        {
            id: 28,
            name: 'Mcdonalds',
            reason: 'Environmental destruction',
            category: 'environment',
            alternatives: ['Solar Energy Ltd.', 'Wind Power Solutions'],
            logo: '../assets/images/boycott-products/mcdonalds.jpg'
        },
        {
            id: 29,
            name: 'Dominos',
            reason: 'Exploitative supply chain',
            category: 'labor',
            alternatives: ['Sustainable Clothing', 'Thrift Stores'],
            logo: '../assets/images/boycott-products/dominos.jpg'
        },
        {
            id: 30,
            name: 'Subway',
            reason: 'Privacy violations',
            category: 'privacy',
            alternatives: ['Privacy-focused Tech', 'Open Source Alternatives'],
            logo: '../assets/images/boycott-products/subway.jpg'
        },
    ];

    const filteredItems = activeTab === 'all'
        ? boycottItems
        : boycottItems.filter(item => item.category === activeTab);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        console.log('Submitted email:', email);
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="App">
            {/* Navigation */}
            

            {/* Hero Section */}
            <header className="bg-primary text-white py-5">
                <Container>
                    <h1 className="display-4">Take a Stand with Your Wallet</h1>
                    <p className="lead">
                        Join thousands of consumers who are choosing to boycott unethical companies and support better alternatives.
                    </p>
                </Container>
            </header>

            {/* Main Content */}
            <Container className="my-5">
                <Row className="mb-5">
                    <Col md={8}>
                        <h2>Why Boycott?</h2>
                        <p>
                            Consumer boycotts have historically been one of the most effective ways to pressure companies to change their practices.
                            When we collectively withdraw our financial support from unethical corporations, we send a powerful message that
                            we won't tolerate exploitation, environmental destruction, or privacy violations.
                        </p>
                        <p>
                            This page lists companies that are engaging in harmful practices, along with ethical alternatives you can support instead.
                        </p>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Join the Movement</Card.Title>
                                <Card.Text>
                                    Sign up to receive updates on new boycott campaigns and ethical alternatives.
                                </Card.Text>

                                {submitted ? (
                                    <Alert variant="success">
                                        Thank you for joining! We'll keep you updated.
                                    </Alert>
                                ) : (
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="email"
                                                placeholder="Your email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Subscribe
                                        </Button>
                                    </Form>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Boycott List */}
                <h2 className="mb-4">Companies to Boycott</h2>
                <Row>
                    {filteredItems.map((company) => (
                        <Col key={company.id} md={6} lg={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" height={250} src={company.logo} />
                                <Card.Body>
                                    <Card.Title>{company.name}</Card.Title>
                                    <Badge bg="danger" className="mb-2">
                                        {company.category.toUpperCase()}
                                    </Badge>
                                    <Card.Text>{company.reason}</Card.Text>

                                    <h6 className="mt-3">Alternatives:</h6>
                                    <ListGroup variant="flush">
                                        {company.alternatives.map((alt, index) => (
                                            <ListGroup.Item key={index}>{alt}</ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-danger" size="sm">
                                        Pledge to Boycott
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Call to Action */}
                <Row className="mt-5 py-4 bg-light rounded">
                    <Col md={8}>
                        <h3>Ready to make a difference?</h3>
                        <p>
                            Share this page with your friends and family to amplify our collective impact.
                            Every person who joins the boycott brings us closer to meaningful change.
                        </p>
                    </Col>
                    <Col md={4} className="d-flex align-items-center">
                        <Button variant="success" size="lg" className="w-100">
                            Share Now
                        </Button>
                    </Col>
                </Row>
            </Container>

            
        </div>
    );
};

export default Boycott;