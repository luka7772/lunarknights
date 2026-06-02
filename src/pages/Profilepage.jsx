import React from 'react';
import { Profile } from '../pages/contnents/profile'; 

function ProfilePage() {
  const userData = {
    name: "Luka Jijavadze",
    username: "lukach07",
    email: "jijavadze_luka@mail.ru",
    photo: "https://via.placeholder.com/150", 
    bio: "Fitness enthusiast and Lunar Knights member.",
    membership: "Premium",
    stats: { workouts: 42 }
  };

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      <Profile user={userData} />
    </div>
  );
}

export default ProfilePage;