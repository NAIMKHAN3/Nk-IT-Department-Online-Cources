import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <Row>
                <Col lg='' className='text-light shadow-lg border border-success rounded my-3 mx-auto'>
                    <Card className="text-center bg-dark col-lg-8 col-sm-12 my-3 mx-auto border-primary">
                        <Card.Body>
                            <Card.Title className='text-warning'>What is cors?</Card.Title>
                            <Card.Text>
                                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center bg-dark col-lg-8 col-sm-12 my-3 mx-auto border-primary">
                        <Card.Body>
                            <Card.Title className='text-warning'>Why are you using firebase?  <br></br> What other options do you have to implement authentication?</Card.Title>

                            <Card.Text>
                                The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center bg-dark col-lg-8 col-sm-12 my-3 mx-auto border-primary">
                        <Card.Body>
                            <Card.Title className='text-warning'>How does the private route work?</Card.Title>
                            <Card.Text>
                                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center bg-dark col-lg-8 col-sm-12 my-3 mx-auto border-primary">
                        <Card.Body>
                            <Card.Title className='text-warning'> What is Node? <br></br> How does Node work?

                            </Card.Title>
                            <Card.Text>
                                Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;