import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaDownload } from 'react-icons/fa';
import Pdf from 'react-to-pdf';


const ref = React.createRef();
const CardDetails = () => {
    const course = useLoaderData()
    const { title, image, description, price, rating } = course;

    return (
        <div>

            <Container>
                <Row>
                    <Col>

                        <Card className='text-center bg-dark shadow-lg mt-4'>
                            <Pdf targetRef={ref} filename={`${course.title}.pdf`}>
                                {({ toPdf }) => (
                                    <Button className='w-25 ms-auto text-light' variant="outline-primary" onClick={toPdf}><FaDownload></FaDownload> Download PDF</Button>
                                )}
                            </Pdf>
                            <div ref={ref} className='bg-dark'>
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
                                </Card.Body>
                            </div>
                            <Button className='w-50 p-3 mx-auto my-3 fs-5 text-light' variant="outline-primary">Enroll Now</Button>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default CardDetails;