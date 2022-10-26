import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const CardComponents = () => {
    const courses = useLoaderData()
    return (
        <CardGroup>
            <Container>
                <Row>
                    {
                        courses.map(course => <Cards key={course.id} course={course}></Cards>)
                    }
                </Row>
            </Container>

        </CardGroup>
    );
};

export default CardComponents;