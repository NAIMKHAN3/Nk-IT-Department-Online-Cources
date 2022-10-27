import React from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

const FAQ = ({ faq }) => {
    const { name, description } = faq;
    const [toggle, setToggle] = useState(false)
    console.log(faq)
    return (
        <Container>
            <Row>
                <Col className='text-light shadow-lg border border-success rounded my-3 mx-auto col-lg-8 col-sm-12'>
                    <Card className="text-center bg-dark">
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <Card.Title className='text-warning'>{name}</Card.Title>
                                <Button onClick={() => setToggle(!toggle)} variant="outline-success" className='text-light'>
                                    {
                                        toggle ? <FaMinusSquare></FaMinusSquare> : <FaPlusSquare></FaPlusSquare>
                                    }


                                </Button>
                            </div>
                            {
                                toggle && <Card.Text>
                                    {description}
                                </Card.Text>
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;