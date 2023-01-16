import React from 'react';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <h1>Thi is Main</h1>
        </div>
    );
};

export default Main;