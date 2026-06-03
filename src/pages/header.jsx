import { Link } from 'react-router-dom';
import './Header.css';  

export function Header() {
  return (
    <div className="header">
     
       <Link to="/" className="title">
       <img src="../../public/vite.jpg" className='main-logo' />
        Lunar Knights
      </Link>

      <div className="navigate">
        <Link className="home" to="/">Home</Link>
        <Link className="service" to="/service">Service</Link>
        <Link className="workouts" to="/workouts">Workouts</Link>
          <Link className="trainers" to="/trainers">Trainers</Link>
        <Link className="contactus" to="/contact">Contact Us</Link>
      </div>

      <div className="account-container">
            <Link to="/login" className="account-name" style={{ color: 'white' }}>
              Log in
            </Link>
        <img src={`${import.meta.env.BASE_URL}images/profile2.png`} alt="Profile" className="profile-image" />
        <div className="new-comments">
          <Link to="/account">Account</Link> 
          <Link to="/comunity">Comunity</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/hisoty">Log Out</Link>
        </div>
      </div>
    </div>
  );
}
