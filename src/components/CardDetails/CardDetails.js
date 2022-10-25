import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CardDetails = () => {
    const course = useLoaderData()
    const { title, image, description, price, rating } = course;
    console.log(course)
    return (
        <Container>
            <Row>
                <Col>
                    <Card className='text-center bg-dark shadow-lg mt-4'>
                        <Card.Title className='text-warning fs-1 my-3'>{title}</Card.Title>
                        <Card.Img className='w-50 mx-auto' variant="top" src={image} />
                        <Card.Body className='text-light'>
                            <Card.Text>
                                {
                                    description
                                }
                            </Card.Text>
                            <div className='d-flex justify-content-evenly'>
                                <h4>Price: $ {price}</h4>
                                <h4>Ratings: <FaStar className='text-warning'></FaStar><FaStar className='text-warning'></FaStar><FaStar className='text-warning'></FaStar>  {rating}</h4>
                            </div>
                            <Button className='w-50 p-3 m-3 fs-5 text-light' variant="outline-primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CardDetails;