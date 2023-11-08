// UserCard.js
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-details">
        <h3>Name: {user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Category: {user.category}</p>
        <p>State: {user.state}</p>
        <p>Gender: {user.gender}</p>
        <p>Status: {user.status}</p>
      </div>
      <div className="user-actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
