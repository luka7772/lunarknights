import { Link } from 'react-router-dom';


export function Register() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="form-title">Register</h2>
        <form action="#" method="POST">
          {/* Username Input */}
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required />
          </div>
          
          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          
          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          
          {/* Confirm Password Input */}
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
          </div>
          
          <button type="submit" className="submit-btn">Register</button>
        </form>
        
        {/* Link to Login Page */}
        <div className="register-link">
          <p>Already have an account? <Link to="/login" className="register-btn">Log In</Link></p>
        </div>
      </div>
    </div>
  );
}
