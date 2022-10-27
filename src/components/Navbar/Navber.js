import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, ToggleButton, Tooltip } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import logo from './logo.jpg';
import Swal from 'sweetalert2';


const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    const Navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Log Out Successfull',
                    'Thank You',
                    'success'
                )
                Navigate(from, { replace: true })
            })
            .catch(error => console.error(error))

    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );
    const [theme, setTheme] = useState('Light');
    const toggle = () => {
        if (theme === 'Dark') {
            setTheme('Light')
        }
        else {
            setTheme('Dark')
        }
    }



    return (
        <Navbar className='shadow-lg' bg="dark" variant='dark' expand="lg">
            <Container>
                <img className='me-3 rounded' style={{ width: '60px' }} src={logo} alt="" />
                <Link to='/home' className='text-decoration-none text-warning fs-3 my-auto me-5'>NK-IT-Department</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100">

                        <div className='d-flex justify-content-between align-content-start w-100 flex-column flex-lg-row'>
                            <div className='d-flex flex-column flex-sm-row'>
                                <Link to='/home' className='text-decoration-none text-primary fs-5 my-auto me-3'>Home</Link>
                                <Link to='/courses' className='text-decoration-none text-primary fs-5 my-auto me-3'>Courses</Link>
                                <Link to='/blog' className='text-decoration-none text-primary fs-5 my-auto me-2'>Blog</Link>
                                <Link to='/faq' className='text-decoration-none text-primary fs-5 my-auto me-2'>FAQ</Link>
                            </div>
                            <div className='d-flex flex-column flex-sm-row'>

                                {
                                    user?.uid ? <>
                                        {
                                            user?.photoURL ? <OverlayTrigger
                                                placement="bottom"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip}
                                            >
                                                <img type="button" style={{ width: '40px' }} className='bg-light rounded-circle text-light my-2' src={user?.photoURL} alt="" />
                                            </OverlayTrigger> :
                                                <FaUserCircle className='text-light fs-2'></FaUserCircle>
                                        }
                                        <Button onClick={handleLogOut} className='my-auto mx-3' variant="outline-primary">Log Out</Button></> :
                                        <><Link to='/login' className='text-decoration-none text-primary fs-5 my-auto me-3'>Log In</Link>
                                            <Link to='/signup' className='text-decoration-none text-primary fs-5 my-auto me-3'>Sign Up</Link></>
                                }

                                <Button onClick={toggle} className='my-3 mx-3' variant="outline-warning">{theme}</Button>
                            </div>

                        </div>





                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;