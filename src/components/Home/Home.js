import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import backend from './images/backend.png';
import basic from './images/basic computer.jpg';
import microsoft from './images/microsoft office.png';
import frontend from './images/front-end-developer-skills.jpg';




const Home = () => {
    return (
        <div>
            <Container className=' shadow-lg  rounded my-3'>

                <h2 className='text-center text-warning my-5 mx-3 '>NK IT department is a beautiful Company. We offer you the best courses. Many boys who have completed our courses are now working in good companies. You can also do our course. Thank You.</h2>
                <img className='d-block w-100' style={{ width: '' }} src={basic} alt="" />
            </Container>
            <Container>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={frontend}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={microsoft}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={backend}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container>
                <Row>
                    <Col lg='5' className='text-light shadow-lg border border-success rounded my-3 mx-auto'>
                        <Card className="text-center bg-dark">
                            <Card.Body>
                                <Card.Title className='text-warning'>Adobe PhotoShop</Card.Title>
                                <Card.Text>
                                    Adobe Photoshop is software that is extensively used for raster image editing, graphic design and digital art. It makes use of layering to allow for depth and flexibility in the design and editing process, as well as provide powerful editing tools, that when combined, are capable of just about anything.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='5' className='text-light shadow-lg border border-success rounded my-3 mx-auto'>
                        <Card className="text-center bg-dark">
                            <Card.Body>
                                <Card.Title className='text-warning'>Adobe Illustrator</Card.Title>
                                <Card.Text>
                                    Adobe Illustrator is the industry-leading graphic design tool that lets you design anything you can imagine  from logos and icons to graphics and illustrations. and customize it with professional-level precision, as well as time-saving features like Repeat for Patterns or Global Edits. You can use the graphics you....
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='5' className=' text-light shadow-lg border border-success rounded my-3 mx-auto'>
                        <Card className="text-center bg-dark">
                            <Card.Body>
                                <Card.Title className='text-warning'>Microsoft Office</Card.Title>
                                <Card.Text>
                                    Microsoft Office, or simply Office, is a family of client software, server software, and services developed by Microsoft. It was first announced by Bill Gates on August 1, 1988, at COMDEX in Las Vegas. Initially a marketing term for an office suite (bundled set of productivity applications), the first version....
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='5' className='text-light shadow-lg border border-success rounded my-3 mx-auto'>
                        <Card className="text-center bg-dark">
                            <Card.Body>
                                <Card.Title className='text-warning'>Basic Computer</Card.Title>
                                <Card.Text>
                                    A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. You can also use it to edit or create spreadsheets, presentations, and even videos
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='5' className=' text-light shadow-lg border border-success rounded my-3 mx-auto'>
                        <Card className="text-center bg-dark">
                            <Card.Body>
                                <Card.Title className='text-warning'>Front end developer</Card.Title>
                                <Card.Text>
                                    Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end....
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='5' className=' text-light shadow-lg border border-success rounded my-3 mx-auto'>
                        <Card className="text-center bg-dark ">
                            <Card.Body>
                                <Card.Title className='text-warning'>Back end developer</Card.Title>
                                <Card.Text>
                                    Back-end development means working on server-side software, which focuses on everything you cant see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers. They use code that helps browsers...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};



export default Home;