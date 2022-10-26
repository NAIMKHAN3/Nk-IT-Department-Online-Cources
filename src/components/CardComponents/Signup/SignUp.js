import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../UserContext';

const SignUp = () => {
    const [error, setError] = useState('');
    const Navigate = useNavigate();
    const { signUp } = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        signUp(email, password)
            .then(result => {
                setError('')
                Navigate('/home')
            })
            .catch(error => { setError(error.message) });
        form.reset();
        // console.log(email, password)
    }
    return (
        <Form onSubmit={handleSignUp} className='text-light col-lg-6 col-sm-12 mx-auto my-5 border border-success h-100 p-5'>
            <h1 className='text-warning my-3 text-center'>Sign Up</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='mt-3'>Email Your Full Name</Form.Label>
                <Form.Control className='bg-dark p-3 my-3 border-success' type="text" placeholder="Enter Your Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                <Form.Label className='mt-3'>Your Photo URL</Form.Label>
                <Form.Control className='bg-dark p-3 my-3 border-success' type="text" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='mt-3'>Email address</Form.Label>
                <Form.Control className='bg-dark text-light p-3 my-3 border-success' type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='mt-3'>Password</Form.Label>
                <Form.Control className='bg-dark text-light p-3 my-3 border-success' type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <p className='text-danger text-center'>{error}</p>
            <Button className='w-100 mx-auto text-center text-light p-2 m-3 fs-5' variant="outline-primary" type="submit">
                Sign Up
            </Button>
            <p className='text-center my-3'>Already Have an account? Please <Link className='text-decoration-none fs-5' to='/login'>Log In</Link></p>
        </Form>
    );
};

export default SignUp;