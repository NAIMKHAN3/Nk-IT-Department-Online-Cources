import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <Navbar className='shadow-lg' bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">NK-IT-Department</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/home' className='text-decoration-none text-warning fs-5 my-auto me-3'>Home</Link>
                        <Link to='/courses' className='text-decoration-none text-warning fs-5 my-auto me-3'>Courses</Link>
                        <Link to='/home' className='text-decoration-none text-warning fs-5 my-auto me-3'>Blog</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;