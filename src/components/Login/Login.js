import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext';

const Login = () => {
    const { logIn, signInGoogle, githubSign } = useContext(AuthContext);
    const [error, setError] = useState('');
    const Navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                setError('')
                Navigate('/home')
            })
            .catch(error => { setError(error.message) });
        form.reset();
        // console.log(email, password)
    }
    const google = () => {
        signInGoogle()
            .then(result => { console.log(result.user) })
            .catch(error => console.log(error))
    }
    const github = () => {
        githubSign()
            .then(result => { console.log(result.user) })
            .catch(e => setError(e))
    }



    return (
        <Form onSubmit={handleLogIn} className='text-light col-lg-6 col-sm-12 mx-auto my-5 border border-success h-100 p-5'>
            <h1 className='text-warning my-3 text-center'>Log In</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='mt-3'>Email address</Form.Label>
                <Form.Control className='bg-dark text-light p-3 my-3 border-success' type="email" name='email' placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='mt-3'>Password</Form.Label>
                <Form.Control className='bg-dark text-light p-3 my-3 border-success' type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <p className='text-danger text-center'>{error}</p>
            <Button className='w-100 mx-auto text-center fs-5 text-light p-2 m-3' variant="outline-primary" type="submit">
                Log In
            </Button>
            <p className='text-center my-3'>New User? Please <Link className='text-decoration-none fs-5' to='/signup'>Sign Up</Link></p>
            <Button onClick={google} className='w-100 mx-auto text-center fs-5 text-light p-2 m-3' variant="outline-primary" >Google Sign In</Button>
            <Button onClick={github} className='w-100 mx-auto text-center fs-5 text-light p-2 m-3' variant="outline-primary" >Github Sign In</Button>
        </Form>
    );
};

export default Login;