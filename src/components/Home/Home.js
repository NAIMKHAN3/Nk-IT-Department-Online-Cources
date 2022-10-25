import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import backend from './images/backend.png';
import basic from './images/basic computer.jpg';
import microsoft from './images/microsoft office.png';
import frontend from './images/front-end-developer-skills.jpg';


const Home = () => {
    return (
        <div>
            <Container className='d-flex justify-content-between shadow-lg  rounded my-3'>

                <h2 className='text-center text-warning mt-5 mx-3 '>NK IT department is a beautiful company. We offer you the best courses. Many boys who have completed our courses are now working in good companies. You can also do our course. Thank You.</h2>
                <img style={{ width: '700px' }} src={basic} alt="" />
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

        </div>
    );
};

export default Home;