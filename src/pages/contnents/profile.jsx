
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Profile.css';

export function Profile({ user }) {
  return (
    <div className="profile-component">
      <div className="profile-header">
        <img src={user.photo} alt="Profile" className="profile-image" />
        <h2>{user.username}</h2>
      </div>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
        <p><strong>Membership:</strong> {user.membership}</p>
      </div>
      
      {/* Button acts as a link to /edit-profile */}
      <Link to="/edit-profile" className="edit-btn">Edit Profile</Link>
    </div>
  );
}