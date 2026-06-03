import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let userRole = 'member';
    if (email.toLowerCase().includes('admin')) {
      userRole = 'admin';
    } else if (email.toLowerCase().includes('trainer')) {
      userRole = 'trainer';
    }

    const userData = {
      email: email,
      name: email.split('@')[0],
      role: userRole,
      isLoggedIn: true
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="form-title">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
              required 
            />
          </div>
          <button type="submit" className="submit-btn">Log In</button>
        </form>
      </div>
    </div>
  );
}