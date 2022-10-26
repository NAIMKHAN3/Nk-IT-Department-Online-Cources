import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext';
import { FaUserCircle } from 'react-icons/fa';


const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );


    return (
        <Navbar className='shadow-lg' bg="dark" variant='dark' expand="lg">
            <Container>
                <Link to='/home' className='text-decoration-none text-warning fs-3 my-auto me-5'>NK-IT-Department</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100">

                        <div className='d-flex justify-content-between align-content-start w-100'>
                            <div>
                                <Link to='/home' className='text-decoration-none text-primary fs-5 my-auto me-3'>Home</Link>
                                <Link to='/courses' className='text-decoration-none text-primary fs-5 my-auto me-3'>Courses</Link>
                                <Link to='/blog' className='text-decoration-none text-primary fs-5 my-auto me-2'>Blog</Link>
                            </div>
                            <div className='justify-content-en'>

                                {
                                    user?.email ? <>
                                        {
                                            user?.photoURL ? <OverlayTrigger
                                                placement="bottom"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip}
                                            >
                                                <img type="button" style={{ width: '40px' }} className='bg-light rounded-circle text-light' src={user?.photoURL} alt="" />
                                            </OverlayTrigger> :
                                                <FaUserCircle className='text-light fs-2'></FaUserCircle>
                                        }
                                        <Button onClick={handleLogOut} className='my-auto mx-3' variant="outline-primary">Log Out</Button></> :
                                        <><Link to='/login' className='text-decoration-none text-primary fs-5 my-auto me-3'>Log In</Link>
                                            <Link to='/signup' className='text-decoration-none text-primary fs-5 my-auto me-3'>Sign Up</Link></>
                                }


                                {/* {
                                    user?.email ? <p className='text-warning'>{user?.email}</p> : ''
                                } */}
                            </div>

                        </div>





                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;