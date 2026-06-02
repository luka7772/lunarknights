import { Link } from 'react-router-dom';
import './UnderConstruction.css';

export function UnderConstruction({ pageName = "This page" }) {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <div className="icon">🚧</div>
        <h1>UNDER CONSTRUCTION</h1>
        <p>{pageName} is currently being forged by the Lunar Knights.</p>
        <p className="sub-text">Check back soon for updates.</p>
        <Link to="/" className="back-btn">RETURN TO BASE</Link>
      </div>
    </div>
  );
}