import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cetegory = ({ course }) => {

    return (
        <div>
            <Link to={`/courses/${course.id}`}><Button className='text-light mt-4 p-3 w-100' variant="outline-success">{course.title}</Button></Link>
        </div>
    );
};

export default Cetegory;