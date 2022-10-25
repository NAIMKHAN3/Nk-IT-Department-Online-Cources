import React from 'react';
import { Button } from 'react-bootstrap';

const Cetegory = ({ course }) => {
    console.log(course)
    return (
        <div>
            <Button className='text-light mt-4 p-3 w-100' variant="outline-success">{course.title}</Button>
        </div>
    );
};

export default Cetegory;