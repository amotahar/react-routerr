import React from 'react';
import { useLoaderData } from 'react-router';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h4> Friend Details: {friend.name}</h4>
            <p>Call him/her: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;