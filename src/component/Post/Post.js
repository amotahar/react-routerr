import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {title, body, id} = post;
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            
              <p>{title}</p>
              <p><small>{body}</small></p>
              <Link to={`/post/:${id}`}>Visit Id</Link>
              <Link to={`/post/:${id}`}>
                <button>Show Details</button>
                </Link>
            <button onClick={handleNavigate}> Show Details 2</button>
           
            
        </div>
    );
};

export default Post;