import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navber = () => {
    return (
        <Navbar className='shadow-lg' bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">NK-IT-Department</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Courses</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;