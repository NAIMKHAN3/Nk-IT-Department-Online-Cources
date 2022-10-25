import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Cetegory from '../Cetegory/Cetegory';

const CardDetails = () => {
    const course = useLoaderData()
    const { title, image } = course;
    console.log(course)
    return (
        <Container>

        </Container>
    );
};

export default CardDetails;