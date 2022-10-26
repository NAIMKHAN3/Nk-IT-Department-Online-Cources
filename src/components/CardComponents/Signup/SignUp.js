import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../UserContext';

const SignUp = () => {
    const [error, setError] = useState('');
    const Navigate = useNavigate();
    const { signUp, updateNamePhoto, githubSign, signInGoogle } = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        signUp(email, password)
            .then(result => {
                setError('')
                Swal.fire(
                    'Sign Up Successfull',
                    'Thank You',
                    'success'
                )
                Navigate(from, { replace: true })
                updateProfile(name, photoURL)
            })
            .catch(error => { setError(error.message) });
        form.reset();
        // console.log(email, password)
    }
    const updateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateNamePhoto(profile)
            .then(() => { })
            .catch(e => console.log(e))
    }
    const google = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user)
                Swal.fire(
                    'Sign In Successfull',
                    'Thank You',
                    'success'
                )
                Navigate(from, { replace: true })
            })
            .catch(error => console.log(error))

    }
    const github = () => {
        githubSign()
            .then(result => {
                console.log(result.user)
                Swal.fire(
                    'Sign In Successfull',
                    'Thank You',
                    'success'
                )
                Navigate(from, { replace: true })
            })
            .catch(e => setError(e))

    }

    return (
        <Form onSubmit={handleSignUp} className='text-light col-lg-6 col-sm-12 mx-auto my-5 border border-success h-100 p-5'>
            <h1 className='text-warning my-3 text-center'>Sign Up</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='mt-3'>Email Your Full Name</Form.Label>
                <Form.Control className='bg-dark text-light p-3 my-3 border-success' type="text" name='name' placeholder="Enter Your Full Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                <Form.Label className='mt-3'>Your Photo URL</Form.Label>
                <Form.Control className='bg-dark text-light p-3 my-3 border-success' type="text" name='photoURL' placeholder="Photo URL" required />
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
            <Button onClick={google} className='w-100 mx-auto text-center fs-5 text-light p-2 m-3' variant="outline-primary"> <FaGoogle></FaGoogle>  Google Sign In</Button>
            <Button onClick={github} className='w-100 mx-auto text-center fs-5 text-light p-2 m-3' variant="outline-primary" > <FaGithub />  Github Sign In</Button>
            <p className='text-center my-3'>Already Have an account? Please <Link className='text-decoration-none fs-5' to='/login'>Log In</Link></p>
        </Form>
    );
};

export default SignUp;