import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const course = useLoaderData();
    const { image, title, price } = course;
    const Navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire(
            'Congratulation',
            'You Check Out is done',
            'success'
        )
        Navigate('/courses')
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='bg-light col-sm-12 col-lg-6 mx-auto my-5 p-3 rounded'>
                <h2 className='text-center my-5'>Contact Information</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Mobile Number" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Emergency Mobile Number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-5'>Address</Form.Label>
                    <Form.Control className='p-4' type="text" placeholder="Your Address" required />
                </Form.Group>
                <div className='d-flex justify-content-between align-items-center p-2 m-2 border'>
                    <img style={{ width: '150px' }} src={image} alt="" />
                    <h3>{title}</h3>
                    <h3>$ {price}</h3>
                </div>
                <div className='d-flex justify-content-between my-3 px-3'>
                    <h4>Total Price :</h4>
                    <h4>$ {price}</h4>
                </div>
                <Button className='w-100 mx-auto my-4' variant="primary" type="submit">
                    Check Out
                </Button>
            </Form>
        </div>
    );
};

export default CheckOut;