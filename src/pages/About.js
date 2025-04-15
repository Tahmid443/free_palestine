import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUsers, FaHandHoldingHeart, FaGlobeAmericas, FaHeartbeat } from 'react-icons/fa';
import Header from '../components/Header';
import TeamMember from '../components/TeamMember';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    const features = [
        {
            icon: <FaHandHoldingHeart size={48} className="text-primary mb-3" />,
            title: "Our Mission",
            description: "To provide help and support to those in need through sustainable programs and immediate relief efforts."
        },
        {
            icon: <FaGlobeAmericas size={48} className="text-primary mb-3" />,
            title: "Our Vision",
            description: "A world where every individual has access to basic necessities and opportunities for growth."
        },
        {
            icon: <FaHeartbeat size={48} className="text-primary mb-3" />,
            title: "Our Values",
            description: "Compassion, Integrity, Accountability, and Community are at the core of everything we do."
        }
    ];

    const team = [
        {
            name: "Taqi Tahmid",
            role: "Founder & CEO",
            image: "../assets/images/tahmid.png",
            social: ["#", "#", "#"]
        },
        {
            name: "Morad Hosen",
            role: "Program Director",
            image: "../assets/images/morad.png",
            social: ["#", "#", "#"]
        },
        {
            name: "Arafat Islam",
            role: "Field Coordinator",
            image: "../assets/images/naim.png",
            social: ["#", "#", "#"]
        },
        
    ];

    const milestones = [
        { year: "2010", title: "Founded", description: "Established with just 5 volunteers" },
        { year: "2012", title: "First International Project", description: "Clean water initiative in East Africa" },
        { year: "2015", title: "10,000 Lives Impacted", description: "Reached our first major milestone" },
        { year: "2020", title: "Global Recognition", description: "Received UN Sustainable Development Award" }
    ];

    return (
        <>
            <Header
                title="About Our mission"
                subtitle="Learn about our mission, vision, and values"
                showButton={false}
                imageUrl="./assets/images/about-hero.jpg"
            />

            <section className="py-5 bg-light">
                <Container>
                    <Row className="mb-5">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <h2 className="fw-bold mb-4">Our Mission</h2>
                            <p className="lead">Our mission is rooted in humanity, compassion, and justice. We stand in solidarity with our Palestinian brothers and sisters, whose voices are often silenced by suffering and conflict. </p>
                            <p>We are here to raise awareness, to inspire action, and to offer hope in the face of despair. Through support, advocacy, and unity, we strive to bring light to the darkest of times.</p>
                            <p> Every effort matters — whether it's a kind word, a shared story, or a helping hand. Together, we can make a difference. Together, we carry the mission of peace, dignity, and a better tomorrow for Palestine.</p>
                        </Col>
                        <Col lg={6}>
                            <div className="position-relative">
                                <img
                                    src="./assets/images/about-side.jpg"
                                    alt="Our team in action"
                                    className="img-fluid rounded shadow-lg mb-3"
                                />
                                <div className="position-absolute bottom-0 start-0 bg-primary text-white p-3 rounded-end" style={{ width: '80%' }}>
                                    <h5 className="mb-0">"Helping others is not just what we do, it's who we are."</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-4 text-center mt-5">
                        {features.map((feature, index) => (
                            <Col md={4} key={index}>
                                <Card className="h-100 border-0 shadow-sm p-4">
                                    {feature.icon}
                                    <Card.Body>
                                        <h4 className="fw-bold">{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="py-5">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="fw-bold">Our Team</h2>
                            <p className="text-muted">Meet the dedicated people behind our organization</p>
                        </Col>
                    </Row>
                    <Row>
                        {team.map((member, index) => (
                            <Col md={4} sm={6} key={index} className="mb-4">
                                <TeamMember member={member} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="py-5 bg-primary text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <h2 className="fw-bold">Our Impact</h2>
                            <p className="lead">Numbers that tell our story of change</p>
                            <Row className="mt-4">
                                <Col xs={6} className="mb-4">
                                    <h3 className="fw-bold display-4">12,500+</h3>
                                    <p>People Helped</p>
                                </Col>
                                <Col xs={6} className="mb-4">
                                    <h3 className="fw-bold display-4">15</h3>
                                    <p>Countries</p>
                                </Col>
                                <Col xs={6}>
                                    <h3 className="fw-bold display-4">350+</h3>
                                    <p>Volunteers</p>
                                </Col>
                                <Col xs={6}>
                                    <h3 className="fw-bold display-4">$2.5M+</h3>
                                    <p>Funds Raised</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <div className="bg-white text-dark p-4 rounded shadow">
                                <h4 className="fw-bold mb-4">Our Milestones</h4>
                                <div className="timeline">
                                    {milestones.map((milestone, index) => (
                                        <div className="timeline-item" key={index}>
                                            <div className="timeline-year bg-primary text-white">{milestone.year}</div>
                                            <div className="timeline-content">
                                                <h5>{milestone.title}</h5>
                                                <p>{milestone.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 bg-light">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="fw-bold">Our Supporters</h2>
                            <p className="text-muted">Countries that support our mission</p>
                        </Col>
                    </Row>
                    <Row className="g-4 align-items-center justify-content-center">
                        {
                            <Col md={2} sm={4} xs={6} >
                                <img
                                    src={`./assets/images/iran.jpg`}
                                    alt={`Partner `}
                                    className="img-fluid grayscale"
                                    style={{ maxHeight: '80px' }}
                                />
                            </Col>
                        }
                        {
                            <Col md={2} sm={4} xs={6} >
                                <img
                                    src={`./assets/images/pakistan.jpg`}
                                    alt={`Partner `}
                                    className="img-fluid grayscale"
                                    style={{ maxHeight: '80px' }}
                                />
                            </Col>
                        }
                        {
                            <Col md={2} sm={4} xs={6} >
                                <img
                                    src={`./assets/images/syria.jpg`}
                                    alt={`Partner `}
                                    className="img-fluid grayscale"
                                    style={{ maxHeight: '80px' }}
                                />
                            </Col>
                        }
                        {
                            <Col md={2} sm={4} xs={6} >
                                <img
                                    src={`./assets/images/egypt.jpg`}
                                    alt={`Partner `}
                                    className="img-fluid grayscale"
                                    style={{ maxHeight: '80px' }}
                                />
                            </Col>
                        }
                        {
                            <Col md={2} sm={4} xs={6} >
                                <img
                                    src={`./assets/images/lebanon.jpg`}
                                    alt={`Partner `}
                                    className="img-fluid grayscale"
                                    style={{ maxHeight: '80px' }}
                                />
                            </Col>
                        }
                    </Row>
                </Container>
            </section>

            <section className="py-5 bg-dark text-white">
                <Container className="text-center">
                    <h2 className="fw-bold mb-4">Ready to join our mission?</h2>
                    <p className="lead mb-4">Whether you want to volunteer, partner with us, or make a donation, we'd love to hear from you.</p>
                    <Button as={Link} to={'/volunteer'} variant="light" size="lg" className="me-3">Become a Volunteer</Button>
                    <Button variant="primary" size="lg">Contact Us</Button>
                </Container>
            </section>
        </>
    );
};

export default About;