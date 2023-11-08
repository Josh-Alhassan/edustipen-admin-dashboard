// UserCard.js
import React from 'react';
import userImage from '../assets/image.svg';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-details">
        <div className="profile__header">
            <img src={userImage} alt="User's Avater" />
            <span className='user-info'> {user.name}</span>
        </div>
        <p className='user-info email'>{user.email}</p>
        <p className='user-info category'>{user.category}</p>
        <p className='user-info'>{user.state}</p>
        <p className='user-info gender'>{user.gender}</p>
        <p className='user-info status'> {user.status}</p>
      </div>
      <div className="user-actions">
        <a href='#'>...</a>
        {/* <button>Delete</button> */}
      </div>
    </div>
  );
};

export default UserCard;
