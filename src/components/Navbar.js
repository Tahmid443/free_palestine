import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
                    
                    <img width={'100'} height={'80'} src='./assets/images/palestine-logo.png'></img>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
                        <Nav.Link as={Link} to="/causes" onClick={() => setExpanded(false)}>Mission</Nav.Link>
                        <Nav.Link as={Link} to="/donate" onClick={() => setExpanded(false)}>Donate</Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
                        <Nav.Link as={Link} to="/volunteer" onClick={() => setExpanded(false)}>Volunteer</Nav.Link>
                        <Nav.Link as={Link} to="/boycott" onClick={() => setExpanded(false)}>Boycott</Nav.Link>
                    </Nav>
                    <Button
                        as={Link}
                        to="/donate"
                        variant="primary"
                        className="ms-lg-3 mt-3 mt-lg-0"
                        onClick={() => setExpanded(false)}
                    >
                        Donate Now
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;