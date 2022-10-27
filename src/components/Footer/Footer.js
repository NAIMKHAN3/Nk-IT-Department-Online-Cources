import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-dark shadow-lg text-center text-secondary p-5 mt-3'>
            <h5>Copyrigth @ Naim Khan</h5>
            <FaGoogle className='fs-4 me-2'></FaGoogle>
            <FaFacebook className='fs-4 me-2'></FaFacebook>
            <FaGithub className='fs-4 me-2'></FaGithub>
            <FaWhatsapp className='fs-4 me-2'></FaWhatsapp>

        </div>
    );
};

export default Footer;