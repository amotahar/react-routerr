import React from 'react';
import { useLoaderData } from 'react-router';
import Friend from '../Friend/Friend';

const Friends = () => {
  const friends = useLoaderData();
  console.log(friends);
    return (
        <div>
          <h1>This is friends: {friends.length}</h1>
          {
            friends.map(
              friend=>
              <Friend
              key={friend.id}
              friend={friend}
              ></Friend>) 
          }
        </div>
    );
};

export default Friends;