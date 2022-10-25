import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Navbar/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;