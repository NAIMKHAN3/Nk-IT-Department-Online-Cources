import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cards = ({ course }) => {
    const { title, image, price, id } = course;
    return (
        <Col lg='4'>
            <Card className='text-light bg-dark p-2 mt-3 shadow-lg' style={{ height: '450px' }}>
                <Card.Body>
                    <Card.Title className='text-warning'>{title}</Card.Title>
                </Card.Body>
                <Card.Img className='w-100 h-100 mb-3' variant="" src={image} />

                <h5 className='text-light'>Price: <span className='text-warning'>$ {price}</span></h5>
                <Link to={`/courses/${id}`}><Button className='w-100' variant='outline-warning text-light'>Course Details</Button></Link>
            </Card>
        </Col >

    );
};

export default Cards;