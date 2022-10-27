import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-light'>
            <Container>
                <Row>
                    <Col className='col-lg-6 col-sm-12 mx-auto my-5 text-center'>
                        <h1 className='text-danger'> 404</h1>
                        <h1>ERROR</h1>
                        <h4>Page Not Found</h4>
                        <Link to='/'>Back to Home page</Link>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ErrorPage;