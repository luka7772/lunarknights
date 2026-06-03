import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="header">
      <Link to="/" className="title">
        <img 
          src={`${import.meta.env.BASE_URL}vite.jpg`} 
          className='main-logo' 
          alt="Logo" 
        />
        Lunar Knights
      </Link>

      <div className="navigate">
        <Link className="home" to="/">Home</Link>
        <Link className="service" to="/service">Service</Link>
        <Link className="workouts" to="/workouts">Workouts</Link>
        <Link className="trainers" to="/trainers">Trainers</Link>
        <Link className="contactus" to="/contact">Contact Us</Link>
        {user?.role === 'admin' && <Link to="/admin-panel">Admin</Link>}
        {user?.role === 'trainer' && <Link to="/appointments">Appointments</Link>}
      </div>

      <div className="account-container">
        {user ? (
          <div className="logged-in-view">
            <span style={{ color: 'white', marginRight: '10px' }}>Hi, {user.name}</span>
            <img 
              src={`${import.meta.env.BASE_URL}images/profile2.png`} 
              alt="Profile" 
              className="profile-image" 
            />
            <div className="new-comments">
              <Link to="/account">Account</Link>
              <Link to="/comunity">Community</Link>
              <Link to="/workouts">Workouts</Link>
              <Link to="/trainers">Trainers</Link>
              <Link to="/contact">Contact Us</Link>
              <button onClick={handleLogout} className="logout-btn">Log Out</button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="account-name" style={{ color: 'white' }}>
            Log in
          </Link>
        )}
      </div>
    </div>
  );
}