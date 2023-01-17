import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, id, username, email} = friend;
    return (
        <div className='friend'>
            <h3> Name: {name} </h3>
            <p>Email: {email}</p>
            {/* <p>Address: {address[2]}</p> */}
            <p><small>UserName: <Link to={`friend/${id}`}>{username}</Link> </small></p>
            
        </div>
    );
};

export default Friend;