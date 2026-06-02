import './intro.css';  
import { Link } from 'react-router-dom';
export function Intro() {
  return (
<div className="intro-box">
  <h1 className="website-name">Lunar Knights</h1>
  <p className="welcome-message">Welcome to Lunar Knights, your personal fitness hub! We're thrilled to help you achieve your fitness goals and elevate your journey with us.</p>
  <p className="description">
    Lunar Knights is designed for individuals who want to take their fitness journey to the next level. Whether you're just starting or a seasoned athlete, here’s what we offer:
    <ul>
      <li>Explore personalized exercises tailored to target different muscle groups</li>
      <li>Create customized workout schedules that fit your lifestyle and goals</li>
      <li>Track your progress, set milestones, and stay motivated with real-time updates</li>
    </ul>
    We’re here to guide you every step of the way, ensuring that you reach your full potential and beyond. Let’s build strength together.
  </p>
  <p className="call-to-action">
        <Link 
          to="workouts" 
          smooth={true} 
          duration={500} 
          style={{
            textDecoration: 'none',      
            color: 'white',              
            fontWeight: 'bold',         
            fontSize: '0.7rem',         
            transition: 'color 0.3s ease' 
          }}
          activeClass="active"  
        >
          Start your fitness journey with us today!
        </Link>
      </p>
</div>
  );
}
