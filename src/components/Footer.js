import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="d-flex align-items-center">
                            <img width={'100'} height={'80'} src='./assets/images/palestine-logo.png'></img>
                        </h5>
                        <p className="mt-3">
                            We are a non-profit organization dedicated to making a positive impact in communities around the world.
                        </p>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/" className="text-white">Home</a></li>
                            <li className="mb-2"><a href="/about" className="text-white">About Us</a></li>
                            <li className="mb-2"><a href="/causes" className="text-white">Our Causes</a></li>
                            <li className="mb-2"><a href="/donate" className="text-white">Donate</a></li>
                            <li className="mb-2"><a href="/contact" className="text-white">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Connect With Us</h5>
                        <div className="d-flex mt-3">
                            <a href="#" className="text-white me-3"><FaFacebook size={20} /></a>
                            <a href="#" className="text-white me-3"><FaTwitter size={20} /></a>
                            <a href="#" className="text-white"><FaInstagram size={20} /></a>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} StandWithPalestine. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;