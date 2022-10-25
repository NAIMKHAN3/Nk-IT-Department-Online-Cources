import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Cetegory from '../Cetegory/Cetegory';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <Container className='text-light'>
            <Row>
                <Col lg='3'>
                    {
                        courses.map(course => <Cetegory key={course.id} course={course}></Cetegory>)
                    }
                </Col>
                <Col lg='9'>
                    <h1>my name is Naim</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;