import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext';

const Navber = () => {
    const { user } = useContext(AuthContext)
    return (
        <Navbar className='shadow-lg' bg="dark" variant='dark' expand="lg">
            <Container>
                <Link to='/home' className='text-decoration-none text-warning fs-3 my-auto me-5'>NK-IT-Department</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/home' className='text-decoration-none text-primary fs-5 my-auto me-5'>Home</Link>
                        <Link to='/courses' className='text-decoration-none text-primary fs-5 my-auto me-5'>Courses</Link>
                        <Link to='/blog' className='text-decoration-none text-primary fs-5 my-auto me-5'>Blog</Link>
                        <Link to='/login' className='text-decoration-none text-primary fs-5 my-auto me-5'>Log In</Link>
                        <Link to='/signup' className='text-decoration-none text-primary fs-5 my-auto me-5'>Sign Up</Link>
                        {
                            user?.displayName ? <h5 className='text-warning'>{user?.displayName}</h5> : ''
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;