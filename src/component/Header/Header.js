import React from 'react';
import {NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
            <NavLink className={({ isActive }) =>
              isActive ? 'active': undefined
            } to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/posts">Post</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            </nav>

            <p>Common Header</p>
        </div>
    );
};

export default Header;