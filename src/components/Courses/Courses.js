import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import CardComponents from '../CardComponents/CardComponents';
import Cetegory from '../Cetegory/Cetegory';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <Container className='text-light'>
            <Row>
                <Col lg='3'>
                    {
                        courses.map(course => <Cetegory key={course.id} course={course}></Cetegory>)
                    }
                </Col>
                <Col lg='9'>

                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;