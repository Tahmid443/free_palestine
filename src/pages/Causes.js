import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Pagination } from 'react-bootstrap';
import { FaSearch, FaHeart, FaRegClock, FaDollarSign } from 'react-icons/fa';
import Header from '../components/Header';
import CauseCard from '../components/CauseCard';
import './Causes.css';
import { Link } from 'react-router-dom';

const Causes = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const causesPerPage = 6;

    // Sample causes data
    const allCauses = [
        {
            id: 1,
            title: "Education for Children",
            description: "Help us provide education to underprivileged children in rural areas.",
            category: "education",
            progress: 65,
            raised: 12500,
            goal: 20000,
            daysLeft: 15,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 2,
            title: "Clean Water Initiative",
            description: "Support our mission to bring clean drinking water to communities in need.",
            category: "health",
            progress: 40,
            raised: 8000,
            goal: 20000,
            daysLeft: 30,
            image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 3,
            title: "Medical Aid Program",
            description: "Fund medical treatments and supplies for those who can't afford them.",
            category: "health",
            progress: 85,
            raised: 17000,
            goal: 20000,
            daysLeft: 5,
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 4,
            title: "Disaster Relief Fund",
            description: "Help communities rebuild after natural disasters strike.",
            category: "disaster",
            progress: 35,
            raised: 7000,
            goal: 20000,
            daysLeft: 45,
            image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 5,
            title: "Animal Shelter Support",
            description: "Provide food and medical care for abandoned animals.",
            category: "animals",
            progress: 55,
            raised: 11000,
            goal: 20000,
            daysLeft: 20,
            image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 6,
            title: "Community Development",
            description: "Support local infrastructure projects in developing regions.",
            category: "community",
            progress: 25,
            raised: 5000,
            goal: 20000,
            daysLeft: 60,
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 7,
            title: "Women Empowerment",
            description: "Provide skills training and resources for women in need.",
            category: "education",
            progress: 70,
            raised: 14000,
            goal: 20000,
            daysLeft: 10,
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 8,
            title: "Refugee Assistance",
            description: "Help provide basic necessities for displaced families.",
            category: "disaster",
            progress: 45,
            raised: 9000,
            goal: 20000,
            daysLeft: 25,
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ];

    // Filter causes based on active filter and search query
    const filteredCauses = allCauses.filter(cause => {
        const matchesFilter = activeFilter === 'all' || cause.category === activeFilter;
        const matchesSearch = cause.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cause.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Pagination logic
    const indexOfLastCause = currentPage * causesPerPage;
    const indexOfFirstCause = indexOfLastCause - causesPerPage;
    const currentCauses = filteredCauses.slice(indexOfFirstCause, indexOfLastCause);
    const totalPages = Math.ceil(filteredCauses.length / causesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Header
                title="Our Mission"
                subtitle="Support the initiatives that matter to you"
                showButton={false}
                imageUrl="./assets/images/goals.jpg"
            />

            <section className="py-5 bg-light">
                <Container>
                    <Row className="mb-5">
                        <Col md={6} className="mb-3 mb-md-0">
                            <div className="search-box position-relative">
                                <FaSearch className="search-icon" />
                                <Form.Control
                                    type="text"
                                    placeholder="Search causes..."
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </div>
                        </Col>
                        <Col md={6} className="text-md-end">
                            <div className="filter-buttons">
                                <Button
                                    variant={activeFilter === 'all' ? 'primary' : 'outline-primary'}
                                    className="me-2 mb-2"
                                    onClick={() => {
                                        setActiveFilter('all');
                                        setCurrentPage(1);
                                    }}
                                >
                                    All Missions
                                </Button>
                                <Button
                                    variant={activeFilter === 'education' ? 'primary' : 'outline-primary'}
                                    className="me-2 mb-2"
                                    onClick={() => {
                                        setActiveFilter('education');
                                        setCurrentPage(1);
                                    }}
                                >
                                    Education
                                </Button>
                                <Button
                                    variant={activeFilter === 'health' ? 'primary' : 'outline-primary'}
                                    className="me-2 mb-2"
                                    onClick={() => {
                                        setActiveFilter('health');
                                        setCurrentPage(1);
                                    }}
                                >
                                    Health
                                </Button>
                                <Button
                                    variant={activeFilter === 'disaster' ? 'primary' : 'outline-primary'}
                                    className="me-2 mb-2"
                                    onClick={() => {
                                        setActiveFilter('disaster');
                                        setCurrentPage(1);
                                    }}
                                >
                                    Disaster Relief
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    {currentCauses.length > 0 ? (
                        <>
                            <Row>
                                {currentCauses.map(cause => (
                                    <Col lg={4} md={6} key={cause.id} className="mb-4">
                                        <CauseCard cause={cause} />
                                    </Col>
                                ))}
                            </Row>

                            {totalPages > 1 && (
                                <Row className="mt-4">
                                    <Col className="d-flex justify-content-center">
                                        <Pagination>
                                            <Pagination.Prev
                                                onClick={() => paginate(Math.max(1, currentPage - 1))}
                                                disabled={currentPage === 1}
                                            />
                                            {[...Array(totalPages)].map((_, index) => (
                                                <Pagination.Item
                                                    key={index}
                                                    active={index + 1 === currentPage}
                                                    onClick={() => paginate(index + 1)}
                                                >
                                                    {index + 1}
                                                </Pagination.Item>
                                            ))}
                                            <Pagination.Next
                                                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                                disabled={currentPage === totalPages}
                                            />
                                        </Pagination>
                                    </Col>
                                </Row>
                            )}
                        </>
                    ) : (
                        <Row>
                            <Col className="text-center py-5">
                                <h4>No causes found matching your criteria</h4>
                                <Button
                                    variant="outline-primary"
                                    onClick={() => {
                                        setActiveFilter('all');
                                        setSearchQuery('');
                                        setCurrentPage(1);
                                    }}
                                >
                                    Reset Filters
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>

            <section className="py-5 bg-primary text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8} className="mb-4 mb-lg-0">
                            <h3 className="fw-bold">Can't find what you're looking for?</h3>
                            <p className="mb-0">Contact us about starting your own fundraising campaign for a cause you care about.</p>
                        </Col>
                        <Col lg={4} className="text-lg-end">
                            <Button variant="light" size="lg" as={Link} to={'/contact'}>Contact Us</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Causes;