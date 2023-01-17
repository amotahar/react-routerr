import React from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title, body, userId} = post; 
    const naviGate = useNavigate();
    const handleNavigate = ()=>{
      naviGate(`/friend/${userId}`);
    } 
    return (
        <div>
            <h1>This post Details: {id} </h1>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleNavigate}>Get The Author</button>
            
        </div>
    );
};

export default PostDetail;