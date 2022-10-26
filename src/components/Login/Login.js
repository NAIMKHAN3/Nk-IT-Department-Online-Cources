import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Form className='text-light col-lg-6 col-sm-12 mx-auto my-5 border border-success h-100 p-5'>
            <h1 className='text-warning my-3 text-center'>Log In</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='mt-3'>Email address</Form.Label>
                <Form.Control className='bg-dark p-3 my-3 border-success' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='mt-3'>Password</Form.Label>
                <Form.Control className='bg-dark p-3 my-3 border-success' type="password" placeholder="Password" required />
            </Form.Group>
            <Button className='w-100 mx-auto text-center text-light p-2 m-3' variant="outline-primary" type="submit">
                Submit
            </Button>
            <p className='text-center my-3'>New User? Please <Link className='text-decoration-none fs-5' to='/signup'>Sign Up</Link></p>
        </Form>
    );
};

export default Login;