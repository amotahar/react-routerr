import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
                {
                    posts.map(post=><Post
                        post={post}
                        key={post.id}
                        ></Post>)
                }
            
        </div>
    );
};

export default Posts;