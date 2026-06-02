import { Link } from 'react-router-dom';
import './login.css';

export function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="form-title">Log In</h2>
        <form action="#" method="POST">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="submit-btn">Log In</button>
        </form>
        <div className="register-link">
          <p>Don't have an account? <Link to="/register" className="register-btn">Register</Link></p>
        </div>
      </div>
    </div>
  );
}
