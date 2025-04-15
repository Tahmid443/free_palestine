import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaHeart, FaHandHoldingHeart, FaUsers, FaGlobe } from 'react-icons/fa';
import Header from '../components/Header';
import CauseCard from '../components/CauseCard';
import Testimonial from '../components/Testimonial';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const causes = [
        {
            id: 1,
            title: "Food Service",
            description: "Help us provide food to the servivors in Gaza.",
            progress: 65,
            raised: 12500,
            goal: 20000,
            image: "./assets/images/food-service.jpg"
        },
        {
            id: 2,
            title: "Clean Water Initiative",
            description: "Support our mission to bring clean drinking water to communities in need.",
            progress: 40,
            raised: 8000,
            goal: 20000,
            image: "./assets/images/water-problem.jpg"
        },
        {
            id: 3,
            title: "Medical Aid Program",
            description: "Fund medical treatments and supplies for wounded people.",
            progress: 85,
            raised: 17000,
            goal: 20000,
            image: "./assets/images/treatment.jpg"
        }
    ];

    const stats = [
        { icon: <FaHeart size={48} className="text-primary" />, number: "1,250", text: "Donations" },
        { icon: <FaHandHoldingHeart size={48} className="text-primary" />, number: "350", text: "Volunteers" },
        { icon: <FaUsers size={48} className="text-primary" />, number: "12,500", text: "People Helped" },
        { icon: <FaGlobe size={48} className="text-primary" />, number: "15", text: "Countries" }
    ];

    return (
        <>
            <Header
                title="Bangladesh with Palestine"
                subtitle="Your donation can save lives"
                showButton={true}
                imageUrl="../assets/images/hero-bg.jpg"
            />

            <section className="py-5 bg-light">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="fw-bold">Our Goals</h2>
                            <p className="text-muted">Help us support these important initiatives</p>
                        </Col>
                    </Row>
                    <Row>
                        {causes.map(cause => (
                            <Col md={4} key={cause.id} className="mb-4">
                                <CauseCard cause={cause} />
                            </Col>
                        ))}
                    </Row>
                    <Row className="mt-4">
                        <Col className="text-center">
                            <Button as={Link} to={'/causes'} variant="outline-primary" size="lg">View All Goals</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <h2 className="fw-bold mb-4">Help our brothers</h2>
                            <p className="lead">In a time of unimaginable hardship, our Palestinian brothers and sisters are facing immense suffering. Innocent lives are being torn apart by conflict, and families are struggling just to survive. This is a call to humanity — a call to stand with those who are in pain, to show compassion, and to offer hope.</p>
                            <p> Whether through donations, raising awareness, or simply spreading kindness, every action counts. Together, let's be a voice for justice and peace. Let's extend our hands and hearts to help our Palestinian brothers in their time of need.</p>
                            
                            <Button variant="primary" size="lg" className="mt-3">Learn More</Button>
                        </Col>
                        <Col lg={6}>
                            <img
                                src="./assets/images/about.jpg"
                                alt="Volunteers working together"
                                className="img-fluid rounded shadow"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 bg-primary text-white">
                <Container>
                    <Row className="g-4 text-center">
                        {stats.map((stat, index) => (
                            <Col md={3} sm={6} key={index}>
                                <div className="p-4">
                                    {stat.icon}
                                    <h3 className="mt-3 fw-bold">{stat.number}</h3>
                                    <p>{stat.text}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="py-5 bg-light">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="fw-bold">What People Say</h2>
                            <p className="text-muted">Testimonials from our donors and volunteers</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Testimonial
                                quote="I've been donating to FreePalestine for years and I'm always impressed by their transparency and impact."
                                name="Sarah Johnson"
                                role="Regular Donor"
                                image="https://randomuser.me/api/portraits/women/32.jpg"
                            />
                        </Col>
                        <Col md={4} className="mb-4">
                            <Testimonial
                                quote="Volunteering with this organization was a life-changing experience. The work they do is truly inspiring."
                                name="Michael Chen"
                                role="Volunteer"
                                image="https://randomuser.me/api/portraits/men/45.jpg"
                            />
                        </Col>
                        <Col md={4} className="mb-4">
                            <Testimonial
                                quote="Our community benefited greatly from their clean water initiative. Thank you for your support!"
                                name="Amina Diallo"
                                role="Community Leader"
                                image="https://randomuser.me/api/portraits/women/63.jpg"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 bg-dark text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8} className="mb-4 mb-lg-0">
                            <h3 className="fw-bold">Ready to make a difference?</h3>
                            <p className="mb-0">Join us in our mission to create positive change in the world.</p>
                        </Col>
                        <Col lg={4} className="text-lg-end">
                            <Button as={Link} to={'/volunteer'} variant="light" size="lg" className="me-3 my-2">Become a Volunteer</Button>
                            <Button variant="primary" size="lg" className="me-3 my-1">Donate Now</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;